import { seoTools } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScroll';

const contentWritingTools = [
  'Grammarly',
  'Microsoft Word',
  'QuillBot',
  'Originality.ai',
  'Copyscape',
  'Duplichecker',
  'ZeroGPT',
  'Surfer SEO',
  'Jasper AI',
  'Hemingway Editor',
];

const seoToolMessages: Record<string, string> = {
  'Google Search Console': 'Monitor site index status, fix issues, and improve search visibility faster.',
  'Google Analytics 4': 'Track user behavior, conversions, and traffic performance across devices.',
  Ahrefs: 'Analyze backlinks, keyword opportunities, and competitor rankings with depth.',
  SEMrush: 'Plan keyword campaigns, track ranking progress, and audit technical SEO issues.',
  'Screaming Frog': 'Crawl your site for broken links, duplicate tags, and SEO errors.',
  'Google Keyword Planner': 'Find keyword volume and bid estimates for SEO and campaigns.',
  'Google Trends': 'Discover emerging search trends and seasonal demand for target keywords.',
  'PageSpeed Insights': 'Measure page speed and get optimization suggestions for mobile and desktop.',
  'Yoast SEO': 'Optimize page titles, meta descriptions, and readability for WordPress content.',
  'Rank Math': 'Manage schema, sitemaps, and on-page SEO with smart WordPress controls.',
  'GTmetrix': 'Analyze load times, performance scores, and actionable speed fixes.',
  Ubersuggest: 'Research keywords, content ideas, and backlink opportunities quickly.',
  Canva: 'Design polished visuals, infographics, and social posts for better engagement.',
  ChatGPT: 'Generate SEO-friendly content briefs, titles, and quick keyword-driven copy ideas.',
};

const toolLogos: Record<string, string> = {
  'Google Search Console': '/tool-logos/google-search-console.png',
  'Google Analytics 4': '/tool-logos/google-analytics-4.png',
  Ahrefs: '/tool-logos/ahrefs.png',
  SEMrush: '/tool-logos/semrush.png',
  'Screaming Frog': '/tool-logos/screaming-frog.png',
  'Google Keyword Planner': '/tool-logos/google-keyword-planner.png',
  'Google Trends': '/tool-logos/google-trends.png',
  'PageSpeed Insights': '/tool-logos/pagespeed-insights.png',
  'Yoast SEO': '/tool-logos/yoast-seo.png',
  'Rank Math': '/tool-logos/rank-math.png',
  GTmetrix: '/tool-logos/gtmetrix.png',
  Ubersuggest: '/tool-logos/ubersuggest.png',
  Canva: '/tool-logos/canva.png',
  ChatGPT: '/tool-logos/chatgpt.png',
};

const contentWritingToolLogos: Record<string, string> = {
  Grammarly: '/tool-logos/grammarly.svg',
  'Microsoft Word': '/tool-logos/microsoft-word.svg',
  QuillBot: '/tool-logos/quillbot.svg',
  'Originality.ai': '/tool-logos/originality-ai.svg',
  Copyscape: '/tool-logos/copyscape.svg',
  Duplichecker: '/tool-logos/duplichecker.svg',
  ZeroGPT: '/tool-logos/zerogpt.svg',
  'Surfer SEO': '/tool-logos/surfer-seo.svg',
  'Jasper AI': '/tool-logos/jasper-ai.svg',
  'Hemingway Editor': '/tool-logos/hemingway-editor.svg',
};

export default function SeoTools() {
  const { ref, visible } = useScrollReveal();
  return (
    <>
      <section className="relative overflow-hidden py-20 bg-slate-100 text-slate-900">
        <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="pointer-events-none absolute left-0 top-1/3 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />

        <div ref={ref} className={`relative container-px reveal ${visible ? 'is-visible' : ''}`}>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] items-center mb-14">
            <div className="max-w-2xl">
              <p className="section-subtitle mb-3 text-sky-500">SEO Toolkit</p>
              <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                Essential <span className="gradient-text">SEO Tools</span> for fast growth.
              </h2>
              <p className="mt-5 text-slate-600 sm:text-lg leading-8 max-w-xl">
                I use proven SEO platforms and analytics tools to improve search visibility, track keywords, and deliver growth-focused results.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
              <div className="flex items-center justify-between gap-4 rounded-3xl bg-sky-50 p-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-500">Toolkit</p>
                  <p className="mt-3 text-4xl font-semibold text-slate-900">14+</p>
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-cyan-400 text-xl text-white shadow-lg shadow-sky-500/20">
                  ⚡
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <p className="rounded-3xl bg-slate-50 p-4">Fast site audits with Search Console, PageSpeed, and Core Web Vitals.</p>
                <p className="rounded-3xl bg-slate-50 p-4">Keyword strategy using Ahrefs, SEMrush, Trends, and Planner.</p>
                <p className="rounded-3xl bg-slate-50 p-4">Performance monitoring for traffic, rankings, and content growth.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {seoTools.map((tool, i) => (
              <div
                key={tool}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-200/50 transition duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-sky-200/40"
                style={{ transitionDelay: `${i * 0.03}s` }}
              >
                <div className="absolute -left-4 top-4 h-24 w-24 rounded-full bg-sky-100/75 blur-3xl" />
                <div className="relative mx-auto mb-5 h-20 w-20 overflow-hidden rounded-full bg-slate-100 shadow-lg shadow-slate-200/40">
                  <img
                    src={toolLogos[tool]}
                    alt={tool}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="relative text-base font-semibold text-slate-900">{tool}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {tool} helps power better audits, keyword planning, and SEO performance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100 text-slate-900">
        <div className="container-px">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="section-subtitle mb-3 text-primary-600">Content Writing</p>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Tools for <span className="gradient-text">Powerful Writing</span>
            </h2>
            <p className="mt-5 text-slate-600 sm:text-lg leading-8 max-w-2xl mx-auto">
              These tools help me write clean copy, optimize content for search intent, and keep every message professional and on brand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentWritingTools.map((tool, i) => (
              <div
                key={tool}
                className="group rounded-[32px] border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-200/50 transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-cyan-200/30"
                style={{ transitionDelay: `${i * 0.03}s` }}
              >
                <div className="mx-auto mb-5 h-20 w-20 overflow-hidden rounded-full bg-slate-100 shadow-lg shadow-slate-200/40">
                  <img
                    src={contentWritingToolLogos[tool]}
                    alt={tool}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-3">
                  {tool}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  A modern writing tool that improves clarity, editorial quality, and SEO-ready content flow.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

