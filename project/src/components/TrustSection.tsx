import { trustTools } from '@/data/content';

export default function TrustSection() {
  return (
    <section className="py-10 border-y border-gray-100 dark:border-gray-800 bg-lightgray dark:bg-gray-900/40">
      <div className="container-px">
        <p className="text-center section-subtitle mb-6">Trusted SEO Solutions</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustTools.map((tool) => (
            <span
              key={tool}
              className="text-gray-500 dark:text-gray-400 font-semibold text-sm sm:text-base hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
