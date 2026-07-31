import { useState } from 'react';
import { X, Check, X as XIcon } from 'lucide-react';
import { caseStudies } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScroll';

export default function CaseStudies() {
  const { ref, visible } = useScrollReveal();
  const [active, setActive] = useState(0);
  const cs = caseStudies[active];

  return (
    <section id="case-studies" className="section-pad bg-lightgray dark:bg-gray-900/30">
      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-subtitle mb-3">Real Results</p>
          <h2 className="section-title">Featured <span className="gradient-text">Case Studies</span></h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {caseStudies.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                active === i
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-950/40'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div key={active} className="card p-6 lg:p-10 max-w-5xl mx-auto animate-fade-up">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl text-dark dark:text-white mb-1">{cs.name}</h3>
              <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-4">{cs.industry}</p>
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">Problems</h4>
              <ul className="space-y-2">
                {cs.problems.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="grid place-items-center w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 shrink-0">
                      <XIcon size={12} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 mt-6 lg:mt-0">SEO Work</h4>
              <ul className="space-y-2">
                {cs.work.map((w) => (
                  <li key={w} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="grid place-items-center w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 shrink-0">
                      <Check size={12} />
                    </span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 mt-6 lg:mt-0">Results</h4>
              <ul className="space-y-2">
                {cs.results.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 font-medium">
                    <span className="grid place-items-center w-5 h-5 rounded-full bg-secondary-100 dark:bg-secondary-900/40 text-secondary-600 dark:text-secondary-400 shrink-0">
                      <Check size={12} />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
