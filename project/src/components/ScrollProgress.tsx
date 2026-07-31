import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScroll';

export default function ScrollProgress({ onBackToTop }: { onBackToTop: () => void }) {
  const progress = useScrollProgress();
  const showButton = progress > 10;

  return (
    <>
      <div className="fixed top-0 inset-x-0 h-1 z-[60] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <button
        onClick={onBackToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 grid place-items-center w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/40 hover:bg-primary-700 hover:-translate-y-1 transition-all ${
          showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
