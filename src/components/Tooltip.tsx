import { useEffect, useRef, useState } from 'react';
import type { TreeNode } from '@/data/treeData';

interface TooltipProps {
  visible: boolean;
  x: number;
  y: number;
  content: TreeNode['hoverContent'] | null;
  nodeName: string;
}

export function Tooltip({ visible, x, y, content, nodeName }: TooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x, y });

  useEffect(() => {
    if (tooltipRef.current && visible) {
      const rect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let newX = x;
      let newY = y;

      // Adjust if tooltip goes off right edge
      if (x + rect.width > viewportWidth - 20) {
        newX = x - rect.width - 20;
      }

      // Adjust if tooltip goes off bottom edge
      if (y + rect.height > viewportHeight - 20) {
        newY = y - rect.height - 20;
      }

      // Adjust if tooltip goes off left edge
      if (newX < 20) {
        newX = 20;
      }

      // Adjust if tooltip goes off top edge
      if (newY < 20) {
        newY = 20;
      }

      setPosition({ x: newX, y: newY });
    }
  }, [visible, x, y]);

  if (!visible || !content) return null;

  return (
    <div
      ref={tooltipRef}
      className="fixed z-50 max-w-md animate-in fade-in zoom-in-95 duration-150"
      style={{
        left: position.x,
        top: position.y,
        pointerEvents: 'none'
      }}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3">
          <h3 className="text-white font-semibold text-lg">
            {content.title || nodeName}
          </h3>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
          {content.sections.map((section, index) => (
            <div key={index} className="space-y-2">
              <h4 className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                {section.heading}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="text-sm text-gray-700 leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 py-2 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Click node to expand/collapse
          </p>
        </div>
      </div>
    </div>
  );
}
