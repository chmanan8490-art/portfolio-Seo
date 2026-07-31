import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioItems } from '@/data/content';
import { iconMap } from '@/components/Icon';
import { useScrollReveal } from '@/hooks/useScroll';

const categories = ['All', ...Array.from(new Set(portfolioItems.map((p) => p.category)))];

export default function Portfolio() {
  const { ref, visible } = useScrollReveal();
  const [filter, setFilter] = useState('All');
  const items = filter === 'All' ? portfolioItems : portfolioItems.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-pad">
      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="section-subtitle mb-3">My Work</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                filter === cat
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-950/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="card p-6 group hover:-translate-y-1.5 cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-secondary-500/0 group-hover:from-primary-600/5 group-hover:to-secondary-500/5 transition-all" />
                <div className="relative">
                  <div className="inline-grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-950/50 dark:to-secondary-950/50 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                    {Icon ? <Icon size={22} /> : null}
                  </div>
                  <h3 className="font-heading font-bold text-dark dark:text-white mb-1 flex items-center justify-between">
                    {item.title}
                    <ArrowUpRight size={16} className="text-gray-300 dark:text-gray-600 group-hover:text-primary-500 group-hover:rotate-45 transition-all" />
                  </h3>
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">{item.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
