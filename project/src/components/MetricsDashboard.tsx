import { metrics } from '@/data/content';
import { iconMap } from '@/components/Icon';
import { useScrollReveal } from '@/hooks/useScroll';
import { TrendingUp } from 'lucide-react';

export default function MetricsDashboard() {
  const { ref, visible } = useScrollReveal();
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950">
      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-slate-500 font-semibold text-sm uppercase tracking-widest mb-3 dark:text-slate-400">Live Performance</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">SEO Metrics Dashboard</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {metrics.map((m, i) => {
            const Icon = iconMap[m.icon];
            return (
              <div
                key={m.label}
                className="rounded-2xl bg-white border border-slate-200 p-6 hover:border-sky-300 hover:shadow-lg shadow-slate-200 transition-all group dark:bg-slate-900/80 dark:border-slate-800 dark:shadow-slate-950/60 dark:hover:border-sky-400/60"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="grid place-items-center w-11 h-11 rounded-xl bg-sky-100 text-sky-600 group-hover:scale-110 transition-transform dark:bg-sky-500/10 dark:text-sky-300">
                    {Icon ? <Icon size={22} /> : null}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full border border-emerald-200 dark:text-emerald-300 dark:bg-emerald-500/10 dark:border-emerald-500/20">
                    <TrendingUp size={12} /> {m.trend}
                  </span>
                </div>
                <p className="text-slate-600 text-sm dark:text-slate-300">{m.label}</p>
                <p className="font-heading font-bold text-3xl text-slate-900 mt-1 dark:text-white">{m.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
