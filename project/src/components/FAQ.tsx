import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScroll';

export default function FAQ() {
  const { ref, visible } = useScrollReveal();
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad bg-slate-50 text-slate-900">
      <div ref={ref} className={`container-px max-w-3xl mx-auto reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center mb-10">
          <p className="section-subtitle mb-3">Got Questions?</p>
          <h2 className="section-title">FAQ</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-heading font-semibold text-dark dark:text-white">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-primary-500 transition-transform ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
