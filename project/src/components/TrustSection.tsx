import { trustTools } from '@/data/content';

export default function TrustSection() {
  return (
    <section className="py-10 border-y border-slate-200 bg-slate-100/80 dark:border-slate-800 dark:bg-slate-900/60">
      <div className="container-px">
        <p className="text-center section-subtitle mb-6">Trusted SEO Solutions</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustTools.map((tool) => (
            <span
              key={tool}
              className="text-slate-500 font-semibold text-sm sm:text-base hover:text-primary-500 transition-colors cursor-default dark:text-slate-400 dark:hover:text-primary-400"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
