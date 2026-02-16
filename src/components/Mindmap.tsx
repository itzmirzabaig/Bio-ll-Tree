import { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
import type { TreeNode } from '@/data/treeData';
import { Tooltip } from '@/components/Tooltip';
import { Minus, Plus, RotateCcw } from 'lucide-react';

interface MindmapProps {
  data: TreeNode;
}

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  content: TreeNode['hoverContent'] | null;
  nodeName: string;
}

// Extend HierarchyNode to include our custom properties
type HierarchyNode = d3.HierarchyNode<TreeNode> & {
  id?: string;
  x0?: number;
  y0?: number;
  _children?: d3.HierarchyNode<TreeNode>[];
};

interface Point {
  x: number;
  y: number;
}

export function Mindmap({ data }: MindmapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gRef = useRef<d3.Selection<SVGGElement, unknown, null, undefined> | null>(null);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const rootRef = useRef<HierarchyNode | null>(null);
  
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    content: null,
    nodeName: ''
  });

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize the tree
  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0 || dimensions.height === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 120, bottom: 20, left: 120 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;

    // Create main group
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    
    gRef.current = g;

    // Helper function to count visible nodes
    const countVisibleNodes = (node: d3.HierarchyNode<TreeNode>): number => {
      if (!node.children) return 1;
      return 1 + node.children.reduce((sum, child) => sum + countVisibleNodes(child), 0);
    };

    // Create hierarchy
    const root = d3.hierarchy(data) as HierarchyNode;
    rootRef.current = root;
    
    // Collapse all nodes initially except first 3 levels
    root.descendants().forEach((d) => {
      const node = d as HierarchyNode;
      if (node.depth >= 2 && node.children) {
        node._children = node.children;
        node.children = undefined;
      }
    });

    // Create zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 3])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    zoomRef.current = zoom;
    svg.call(zoom);

    // Initial center position
    // Zoom out more to accommodate the larger, more spaced-out tree
    const initialTransform = d3.zoomIdentity
      .translate(margin.left, margin.top)
      .scale(0.6); // Reduced from 0.85 to show more of the tree
    
    svg.call(zoom.transform, initialTransform);

    // Update function
    const update = (source: HierarchyNode) => {
      // DYNAMIC HEIGHT CALCULATION - recalculates every time nodes expand/collapse
      const visibleNodeCount = countVisibleNodes(root);
      const minNodeSpacing = 60; // Minimum 60 pixels between each node vertically
      const calculatedHeight = Math.max(height * 1.5, visibleNodeCount * minNodeSpacing);
      
      // Recreate tree layout with new height
      const treeLayout = d3.tree<TreeNode>()
        .size([calculatedHeight, width])
        .separation((a, b) => {
          // Calculate actual node widths (matching the rect width calculation)
          const aWidth = Math.max(140, a.data.name.length * 8 + 32);
          const bWidth = Math.max(140, b.data.name.length * 8 + 32);
          
          // Average width of the two nodes in "node units" (each unit = ~50px)
          const avgWidth = (aWidth + bWidth) / 100;
          
          // Sibling nodes (same parent) need more space, different parents need even more
          // This ensures nodes at the same level never overlap vertically
          if (a.parent === b.parent) {
            return Math.max(2.5, avgWidth * 1.2); // At least 2.5 units apart, more for longer names
          } else {
            return Math.max(3.0, avgWidth * 1.5); // Different parents get even more space
          }
        });

      const treeData = treeLayout(root);
      const nodes = treeData.descendants() as HierarchyNode[];
      const links = treeData.links() as d3.HierarchyLink<TreeNode>[];

      // Normalize for fixed-depth with more spacing for longer connections
      // Increase horizontal distance between generations to 450px
      // This prevents long node names from overlapping with their parent's connection line
      nodes.forEach(d => { d.y = d.depth * 450; });

      // ****************** Nodes section ******************
      const node = g.selectAll<SVGGElement, HierarchyNode>('g.node')
        .data(nodes, (d: unknown) => {
          const nodeData = d as HierarchyNode;
          if (!nodeData.id) {
            nodeData.id = Math.random().toString(36).substr(2, 9);
          }
          return nodeData.id;
        });

      // Enter any new nodes at the parent's previous position
      const nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', () => `translate(${source.y0 ?? source.y},${source.x0 ?? source.x})`)
        .on('click', (_event, d) => {
          const nodeData = d as HierarchyNode;
          if (nodeData.children) {
            nodeData._children = nodeData.children;
            nodeData.children = undefined;
          } else {
            nodeData.children = nodeData._children;
            nodeData._children = undefined;
          }
          update(nodeData);
        })
        .on('mouseover', (event, d) => {
          const nodeData = d as HierarchyNode;
          const rect = containerRef.current?.getBoundingClientRect();
          if (rect && nodeData.data.hoverContent) {
            setTooltip({
              visible: true,
              x: event.clientX - rect.left + 15,
              y: event.clientY - rect.top + 15,
              content: nodeData.data.hoverContent,
              nodeName: nodeData.data.name
            });
          }
        })
        .on('mousemove', (event) => {
          const rect = containerRef.current?.getBoundingClientRect();
          if (rect) {
            setTooltip(prev => ({
              ...prev,
              x: event.clientX - rect.left + 15,
              y: event.clientY - rect.top + 15
            }));
          }
        })
        .on('mouseout', () => {
          setTooltip(prev => ({ ...prev, visible: false }));
        });

      // Add rectangle for the nodes
      nodeEnter.append('rect')
        .attr('class', 'node-rect')
        .attr('rx', 12)
        .attr('ry', 12)
        .attr('width', (d) => {
          const nodeData = d as HierarchyNode;
          return Math.max(140, nodeData.data.name.length * 8 + 32);
        })
        .attr('height', 40)
        .attr('x', (d) => {
          const nodeData = d as HierarchyNode;
          return -Math.max(140, nodeData.data.name.length * 8 + 32) / 2;
        })
        .attr('y', -20)
        .attr('cursor', 'pointer')
        .style('fill', (d) => {
          const nodeData = d as HierarchyNode;
          if (nodeData.depth === 0) return '#1e3a5f';
          if (nodeData.depth === 1) return '#2563eb';
          if (nodeData.depth === 2) return '#3b82f6';
          if (nodeData.depth === 3) return '#60a5fa';
          if (nodeData.depth === 4) return '#93c5fd';
          return '#dbeafe';
        })
        .style('stroke', (d) => {
          const nodeData = d as HierarchyNode;
          if (nodeData.depth === 0) return '#0f172a';
          return '#1e40af';
        })
        .style('stroke-width', (d) => {
          const nodeData = d as HierarchyNode;
          return nodeData.depth === 0 ? 3 : 2;
        })
        .style('filter', 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))');

      // Add labels for the nodes
      nodeEnter.append('text')
        .attr('dy', '.35em')
        .attr('text-anchor', 'middle')
        .text((d) => {
          const nodeData = d as HierarchyNode;
          return nodeData.data.name;
        })
        .style('font-size', (d) => {
          const nodeData = d as HierarchyNode;
          return nodeData.depth === 0 ? '14px' : '12px';
        })
        .style('font-weight', (d) => {
          const nodeData = d as HierarchyNode;
          return nodeData.depth <= 1 ? '600' : '500';
        })
        .style('fill', (d) => {
          const nodeData = d as HierarchyNode;
          return nodeData.depth <= 2 ? '#ffffff' : '#1e3a5f';
        })
        .style('pointer-events', 'none');

      // Add expand/collapse indicator
      const expandableNodes = nodeEnter.filter((d) => {
        const nodeData = d as HierarchyNode;
        return !!(nodeData.children || nodeData._children);
      });

      expandableNodes.append('circle')
        .attr('class', 'toggle-circle')
        .attr('r', 8)
        .attr('cx', (d) => {
          const nodeData = d as HierarchyNode;
          return Math.max(140, nodeData.data.name.length * 8 + 32) / 2 + 10;
        })
        .attr('cy', 0)
        .style('fill', '#ffffff')
        .style('stroke', '#1e40af')
        .style('stroke-width', 1.5)
        .style('cursor', 'pointer');

      expandableNodes.append('text')
        .attr('class', 'toggle-text')
        .attr('x', (d) => {
          const nodeData = d as HierarchyNode;
          return Math.max(140, nodeData.data.name.length * 8 + 32) / 2 + 10;
        })
        .attr('y', 0)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .text((d) => {
          const nodeData = d as HierarchyNode;
          return nodeData._children ? '+' : '-';
        })
        .style('font-size', '12px')
        .style('font-weight', '700')
        .style('fill', '#1e40af')
        .style('pointer-events', 'none');

      // UPDATE
      const nodeUpdate = node.merge(nodeEnter);

      // Transition to the proper position for the node
      nodeUpdate.transition()
        .duration(500)
        .attr('transform', (d) => {
          const nodeData = d as HierarchyNode;
          return `translate(${nodeData.y},${nodeData.x})`;
        });

      // Update the node attributes and style
      nodeUpdate.select('rect.node-rect')
        .style('fill', (d) => {
          const nodeData = d as HierarchyNode;
          if (nodeData.depth === 0) return '#1e3a5f';
          if (nodeData.depth === 1) return '#2563eb';
          if (nodeData.depth === 2) return '#3b82f6';
          if (nodeData.depth === 3) return '#60a5fa';
          if (nodeData.depth === 4) return '#93c5fd';
          return '#dbeafe';
        });

      nodeUpdate.select('.toggle-text')
        .text((d) => {
          const nodeData = d as HierarchyNode;
          return nodeData._children ? '+' : '-';
        });

      // Remove any exiting nodes
      const nodeExit = node.exit().transition()
        .duration(500)
        .attr('transform', () => `translate(${source.y},${source.x})`)
        .remove();

      nodeExit.select('rect')
        .attr('width', 0)
        .attr('height', 0);

      nodeExit.select('text')
        .style('fill-opacity', 0);

      // ****************** Links section ******************
      const link = g.selectAll<SVGPathElement, d3.HierarchyLink<TreeNode>>('path.link')
        .data(links, (d: unknown) => {
          const linkData = d as d3.HierarchyLink<TreeNode>;
          const target = linkData.target as HierarchyNode;
          return target.id || '';
        });

      // Enter any new links at the parent's previous position
      const linkEnter = link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', () => {
          const o: Point = { x: source.x0 ?? source.x ?? 0, y: source.y0 ?? source.y ?? 0 };
          return diagonal(o, o);
        })
        .style('fill', 'none')
        .style('stroke', '#94a3b8')
        .style('stroke-width', (d: unknown) => {
          const linkData = d as d3.HierarchyLink<TreeNode>;
          return Math.max(1.5, 3 - (linkData.target.depth * 0.4));
        })
        .style('stroke-opacity', 0.8);

      // UPDATE
      const linkUpdate = link.merge(linkEnter);

      // Transition back to the parent element position
      linkUpdate.transition()
        .duration(500)
        .attr('d', (d: unknown) => {
          const linkData = d as d3.HierarchyLink<TreeNode>;
          const sourceNode = linkData.source as HierarchyNode;
          const targetNode = linkData.target as HierarchyNode;
          const s: Point = { x: sourceNode.x ?? 0, y: sourceNode.y ?? 0 };
          const t: Point = { x: targetNode.x ?? 0, y: targetNode.y ?? 0 };
          return diagonal(s, t);
        });

      // Remove any exiting links
      link.exit().transition()
        .duration(500)
        .attr('d', () => {
          const o: Point = { x: source.x ?? 0, y: source.y ?? 0 };
          return diagonal(o, o);
        })
        .remove();

      // Store the old positions for transition
      nodes.forEach((d) => {
        const nodeData = d as HierarchyNode;
        nodeData.x0 = nodeData.x;
        nodeData.y0 = nodeData.y;
      });
    };

    // Curved path generator
    const diagonal = (s: Point, d: Point) => {
      return `M ${s.y} ${s.x}
              C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},
                ${d.y} ${d.x}`;
    };

    // Initialize
    root.x0 = height / 2;
    root.y0 = 0;
    update(root);

  }, [data, dimensions]);

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    if (svgRef.current && zoomRef.current) {
      const svg = d3.select(svgRef.current);
      svg.transition().duration(300).call(zoomRef.current.scaleBy, 1.3);
    }
  }, []);

  const handleZoomOut = useCallback(() => {
    if (svgRef.current && zoomRef.current) {
      const svg = d3.select(svgRef.current);
      svg.transition().duration(300).call(zoomRef.current.scaleBy, 0.7);
    }
  }, []);

  const handleReset = useCallback(() => {
    if (svgRef.current && zoomRef.current) {
      const svg = d3.select(svgRef.current);
      const margin = { top: 20, right: 120, bottom: 20, left: 120 };
      const initialTransform = d3.zoomIdentity
        .translate(margin.left, margin.top)
        .scale(0.6); // Match the new initial zoom level
      svg.transition().duration(500).call(zoomRef.current.transform, initialTransform);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
          title="Zoom In"
        >
          <Plus className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
          title="Zoom Out"
        >
          <Minus className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={handleReset}
          className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
          title="Reset View"
        >
          <RotateCcw className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-md border border-gray-200">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Click nodes</span> to expand/collapse • 
          <span className="font-medium"> Drag</span> to pan • 
          <span className="font-medium"> Scroll</span> to zoom
        </p>
      </div>

      {/* Title */}
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-2xl font-bold text-gray-800">Tree of Life ~ Mirza Baig</h1>
        <p className="text-sm text-gray-500">Phylogenetic Classification ~ from the teachings of Dr. Clayton Vondriska</p>
      </div>

      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="cursor-grab active:cursor-grabbing"
      />

      <Tooltip
        visible={tooltip.visible}
        x={tooltip.x}
        y={tooltip.y}
        content={tooltip.content}
        nodeName={tooltip.nodeName}
      />
    </div>
  );
}
