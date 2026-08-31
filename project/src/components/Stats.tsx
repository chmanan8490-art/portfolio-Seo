import { stats } from '@/data/content';
import { iconMap } from '@/components/Icon';
import { useCountUp, useScrollReveal } from '@/hooks/useScroll';

export default function Stats() {
  const { ref, visible } = useScrollReveal();
  return (
    <section className="py-12 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-800 dark:to-primary-700">
      <div ref={ref} className="container-px grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = iconMap[stat.icon];
          const value = useCountUp(stat.value, visible);
          return (
            <div key={stat.label} className="text-center text-white">
              <div className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-white/15 backdrop-blur mb-3">
                {Icon ? <Icon size={26} /> : null}
              </div>
              <p className="font-heading font-extrabold text-3xl lg:text-4xl">
                {value}{stat.suffix}
              </p>
              <p className="text-primary-100 text-sm font-medium mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
