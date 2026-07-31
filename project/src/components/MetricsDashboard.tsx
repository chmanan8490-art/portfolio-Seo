import { metrics } from '@/data/content';
import { iconMap } from '@/components/Icon';
import { useScrollReveal } from '@/hooks/useScroll';
import { TrendingUp } from 'lucide-react';

export default function MetricsDashboard() {
  const { ref, visible } = useScrollReveal();
  return (
    <section className="py-16 bg-gradient-to-br from-dark to-gray-900 dark:from-black dark:to-gray-950">
      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-secondary-400 font-semibold text-sm uppercase tracking-widest mb-3">Live Performance</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">SEO Metrics Dashboard</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {metrics.map((m, i) => {
            const Icon = iconMap[m.icon];
            return (
              <div
                key={m.label}
                className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 hover:bg-white/10 hover:border-primary-500/30 transition-all group"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary-600/30 to-secondary-500/30 text-primary-300 group-hover:scale-110 transition-transform">
                    {Icon ? <Icon size={22} /> : null}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary-400 bg-secondary-500/10 px-2 py-1 rounded-full">
                    <TrendingUp size={12} /> {m.trend}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{m.label}</p>
                <p className="font-heading font-bold text-3xl text-white mt-1">{m.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
