import { Mindmap } from '@/components/Mindmap';
import { treeData } from '@/data/treeData';
import './App.css';

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Mindmap data={treeData} />
    </div>
  );
}

export default App;
