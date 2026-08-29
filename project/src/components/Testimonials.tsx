import { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScroll';

export default function Testimonials() {
  const { ref, visible } = useScrollReveal();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[idx];

  return (
    <section id="testimonials" className="section-pad bg-slate-950 text-slate-100">
      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-subtitle mb-3">Client Feedback</p>
          <h2 className="section-title">Testimonials</h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <Quote className="absolute -top-6 -left-2 w-20 h-20 text-primary-100 dark:text-primary-950/60 -scale-x-100" />
          <div key={idx} className="card p-8 lg:p-12 text-center animate-fade-up relative">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={20} className="fill-accent-400 text-accent-400" />
              ))}
            </div>
            <p className="text-lg lg:text-xl text-slate-200 leading-relaxed font-medium italic">
              "{t.text}"
            </p>
            <div className="mt-6">
              <p className="font-heading font-bold text-white">{t.name}</p>
              <p className="text-sm text-primary-400">{t.role}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="grid place-items-center w-10 h-10 rounded-full bg-slate-900 border border-slate-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-primary-600' : 'w-2 bg-slate-600'}`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
              className="grid place-items-center w-10 h-10 rounded-full bg-slate-900 border border-slate-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
