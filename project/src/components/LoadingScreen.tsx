import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-slate-950 transition-opacity duration-500 ${
        done ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="relative inline-grid place-items-center mb-6">
          <span className="absolute inset-0 rounded-2xl bg-primary-600/20 animate-ping" />
          <span className="grid place-items-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-500 text-white shadow-lg shadow-primary-600/40">
            <Search size={28} />
          </span>
        </div>
        <h2 className="font-heading font-bold text-xl text-white mb-1">Suffyan</h2>
        <p className="text-sm text-slate-400 mb-4">SEO Specialist</p>
        <div className="w-48 h-1 rounded-full bg-slate-800 overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-primary-600 to-secondary-500 loader-bar" />
        </div>
      </div>
    </div>
  );
}
