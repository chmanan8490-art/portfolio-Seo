import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScroll';

export default function Blog() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="blog" className="section-pad">
      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="section-subtitle mb-3">Insights</p>
            <h2 className="section-title">Latest Articles</h2>
          </div>
          <a href="#blog" className="text-primary-600 dark:text-primary-400 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all posts <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <article
              key={post.title}
              className="card p-6 group hover:-translate-y-1.5 cursor-pointer flex flex-col"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="h-36 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-950/40 dark:to-secondary-950/40 mb-4 grid place-items-center relative overflow-hidden">
                <span className="font-heading font-bold text-3xl gradient-text">{post.category}</span>
              </div>
              <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-2">{post.category}</span>
              <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-primary-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100 dark:border-gray-700">
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
