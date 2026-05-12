import { Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Brain className="w-16 h-16 text-blue-400" />
        </div>
        <h1 className="text-5xl font-bold mb-4">StudyBeast</h1>
        <p className="text-xl text-slate-300 mb-8">AI-Powered Study Assistant</p>
        <p className="text-slate-400">Ready to transform your learning journey</p>
      </div>
    </div>
  );
}

export default App;