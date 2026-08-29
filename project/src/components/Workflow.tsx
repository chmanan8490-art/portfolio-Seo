import { workflow } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScroll';

export default function Workflow() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="process" className="section-pad bg-slate-950">
      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-subtitle mb-3">How I Work</p>
          <h2 className="section-title">SEO <span className="gradient-text">Workflow</span></h2>
          <p className="mt-4 text-slate-300">
            A proven 9-step process that takes your site from invisible to dominant.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 hidden md:block -translate-x-1/2" />
          <div className="space-y-6 md:space-y-0">
            {workflow.map((item, i) => (
              <div
                key={item.step}
                className={`md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? '' : 'md:[direction:rtl]'}`}
              >
                <div className={`md:[direction:ltr] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="card p-6 group hover:-translate-y-1 relative">
                    <div className="flex items-center gap-3 mb-2 md:flex-row-reverse md:justify-start" style={{ direction: 'ltr' }}>
                      <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-secondary-500 text-white font-heading font-bold shrink-0 shadow-lg shadow-primary-600/30">
                        {item.step}
                      </span>
                      <h3 className="font-heading font-bold text-lg text-white">{item.title}</h3>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
