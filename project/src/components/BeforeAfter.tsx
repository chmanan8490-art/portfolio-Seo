import { TrendingUp, TrendingDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScroll';

const before = [
  { label: 'Page Speed', value: '4.8s', bad: true },
  { label: 'SEO Score', value: '42/100', bad: true },
  { label: 'Indexed Pages', value: '38', bad: true },
  { label: 'Organic Keywords', value: '120', bad: true },
  { label: 'Avg. Position', value: '28.4', bad: true },
];

const after = [
  { label: 'Page Speed', value: '1.1s', bad: false },
  { label: 'SEO Score', value: '96/100', bad: false },
  { label: 'Indexed Pages', value: '342', bad: false },
  { label: 'Organic Keywords', value: '1,240', bad: false },
  { label: 'Avg. Position', value: '3.4', bad: false },
];

export default function BeforeAfter() {
  const { ref, visible } = useScrollReveal();
  return (
    <section className="py-16 bg-slate-950">
      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="section-subtitle mb-3">Real Impact</p>
          <h2 className="section-title text-3xl lg:text-4xl">Before vs After <span className="gradient-text">Optimization</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="card p-6 border-red-500/20 bg-slate-900/80">
            <div className="flex items-center gap-2 mb-5">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
                <TrendingDown size={18} />
              </span>
              <h3 className="font-heading font-bold text-lg text-white">Before</h3>
            </div>
            <div className="space-y-3">
              {before.map((b) => (
                <div key={b.label} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-0">
                  <span className="text-sm text-slate-300">{b.label}</span>
                  <span className="font-heading font-bold text-red-400">{b.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6 border-secondary-500/20 bg-slate-900/80 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-secondary-500 text-white text-xs font-semibold rounded-bl-xl">Improved</div>
            <div className="flex items-center gap-2 mb-5">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-secondary-500/10 text-secondary-300 border border-secondary-500/20">
                <TrendingUp size={18} />
              </span>
              <h3 className="font-heading font-bold text-lg text-white">After</h3>
            </div>
            <div className="space-y-3">
              {after.map((a) => (
                <div key={a.label} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-0">
                  <span className="text-sm text-slate-300">{a.label}</span>
                  <span className="font-heading font-bold text-secondary-300">{a.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
