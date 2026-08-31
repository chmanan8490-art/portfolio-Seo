import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ClipboardList,
  FileText,
  Gauge,
  Globe,
  LayoutList,
  Link2,
  MapPin,
  PenTool,
  Search,
  Settings2,
  ShoppingCart,
  Sparkles,
  Star,
  Wand2,
  Workflow,
} from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScroll';

const seoTools = [
  { title: 'SEO Strategy', icon: Gauge },
  { title: 'Technical SEO', icon: Settings2 },
  { title: 'Keyword Research', icon: Search },
  { title: 'Content Optimization', icon: FileText },
  { title: 'Link Building', icon: Link2 },
  { title: 'WordPress SEO', icon: Globe },
  { title: 'Analytics (GA4)', icon: BarChart3 },
  { title: 'Local SEO', icon: MapPin },
  { title: 'Competitive Analysis', icon: BarChart3 },
  { title: 'E-commerce SEO', icon: ShoppingCart },
];

const contentServices = [
  { title: 'SEO Writing', description: 'Search-first copy that ranks and converts.', icon: Search },
  { title: 'Blog Writing', description: 'Sharp articles that attract and retain readers.', icon: BookOpen },
  { title: 'Article Writing', description: 'Research-backed stories with clear expert value.', icon: ClipboardList },
  { title: 'Website Content Writing', description: 'Clean messaging for trust and action.', icon: LayoutList },
  { title: 'Research Writing', description: 'Structured, source-led content for authority.', icon: FileText },
  { title: 'Content Strategy', description: 'Roadmaps built for reach, relevance, and ROI.', icon: Sparkles },
  { title: 'Content Refresh & Audit', description: 'Re-optimizing legacy content for better ranking.', icon: PenTool },
  { title: 'UX Copywriting', description: 'Crafting seamless journeys that drive conversions.', icon: Star },
  { title: 'Data-Driven Case Studies', description: 'Showcasing real-world results that build trust.', icon: Wand2 },
  { title: 'Email Copywriting', description: 'Persuasive sequences for lead nurture and sales.', icon: ArrowRight },
  { title: 'Workflow Automation', description: 'Streamlined content production and management.', icon: Workflow },
];

const skillTabs = {
  'SEO Strategy': [
    { title: 'SEO Strategy', description: 'Intent-driven growth plans built around rankings and revenue.', icon: Gauge },
    { title: 'Keyword Research', description: 'High-opportunity terms mapped to business goals and search intent.', icon: Search },
    { title: 'Content Optimization', description: 'On-page improvements that sharpen relevance and conversion lift.', icon: FileText },
    { title: 'Link Building', description: 'Authoritative backlinks that support sustainable organic growth.', icon: Link2 },
    { title: 'Competitive Analysis', description: 'Gap analysis for stronger ranking strategy and market position.', icon: BarChart3 },
    { title: 'Analytics (GA4)', description: 'Performance tracking to connect search gains with business outcomes.', icon: BarChart3 },
  ],
  'Technical SEO': [
    { title: 'Technical SEO', description: 'Clean crawlability, site structure, and indexation health.', icon: Settings2 },
    { title: 'WordPress SEO', description: 'Fast, scalable optimization for WordPress growth and speed.', icon: Globe },
    { title: 'Local SEO', description: 'Geo-targeted visibility that drives more qualified local leads.', icon: MapPin },
    { title: 'E-commerce SEO', description: 'Product and category optimization for more qualified traffic.', icon: ShoppingCart },
    { title: 'Technical Audits', description: 'Issue detection and correction across crawl, index, and performance gaps.', icon: FileText },
    { title: 'Performance Tracking', description: 'Monitoring the technical fixes that impact rankings and UX.', icon: Sparkles },
  ],
  'Content Writing': [
    { title: 'SEO Writing', description: 'Search-first copy that ranks and converts.', icon: Search },
    { title: 'Blog Writing', description: 'Sharp articles that attract and retain readers.', icon: BookOpen },
    { title: 'Article Writing', description: 'Research-backed stories with clear expert value.', icon: ClipboardList },
    { title: 'Website Content Writing', description: 'Clean messaging for trust and action.', icon: LayoutList },
    { title: 'Research Writing', description: 'Structured, source-led content for authority.', icon: FileText },
    { title: 'Content Strategy', description: 'Roadmaps built for reach, relevance, and ROI.', icon: Sparkles },
  ],
} as const;

export default function Skills() {
  const { ref, visible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<keyof typeof skillTabs>('SEO Strategy');
  const activeSkillCards = skillTabs[activeTab];

  return (
    <section id="skills" className="section-pad bg-white dark:bg-slate-950">
      <div ref={ref} className="container-px">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-subtitle mb-3">My Expertise</p>
          <h2 className="section-title">
            SEO <span className="text-blue-600">Expertise</span> &amp; <span className="text-teal-600">Core Tools</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            A data-driven toolkit honed through extensive audits and conversion-focused campaigns.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {(Object.keys(skillTabs) as Array<keyof typeof skillTabs>).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                  : 'border border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-400/60 dark:hover:text-sky-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {activeSkillCards.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <div
                key={`${activeTab}-${tool.title}`}
                className="group rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-[0_18px_40px_-28px_rgba(15,23,42,0.9)] dark:hover:border-sky-400/60 dark:hover:shadow-[0_25px_50px_-24px_rgba(14,116,144,0.25)]"
                style={{ transitionDelay: `${index * 0.03}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 shadow-inner shadow-slate-200 transition group-hover:bg-sky-100 group-hover:text-sky-600 dark:bg-slate-800 dark:text-slate-100 dark:shadow-slate-900 dark:group-hover:bg-sky-500/10 dark:group-hover:text-sky-300">
                  <Icon size={22} />
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-800 dark:text-slate-100">{tool.title}</p>
              </div>
            );
          })}
        </div>

        <section className="mt-16 overflow-hidden rounded-[36px] border border-slate-200 bg-slate-50 shadow-[0_35px_80px_-40px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-[0_35px_80px_-40px_rgba(15,23,42,0.7)]">
          <div className="rounded-[34px] bg-white p-8 sm:p-10 lg:p-12 dark:bg-slate-900">
            <div className="flex items-start gap-10 lg:gap-10">
              <div className="w-full lg:w-[38%] lg:sticky lg:top-[120px] lg:self-start">
                <div className="space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center rounded-full bg-blue-50 px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm">
                    PREMIUM CONTENT SERVICES
                  </div>
                  <div className="space-y-4">
                    <h2 className="mx-auto max-w-[520px] text-[2.25rem] font-[800] leading-[1.25] text-slate-900 lg:mx-0 dark:text-white">
                      Writing That Converts <span className="text-blue-500 dark:text-blue-400">Visitors Into Clients.</span>
                    </h2>
                    <p className="mx-auto max-w-[420px] text-sm leading-7 text-slate-600 lg:mx-0 dark:text-slate-300">
                      High-impact writing for SEO pages, blogs, landing pages, and product descriptions with clear messaging, brand-ready tone, and conversion focus.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <div className="rounded-[30px] border border-blue-200 bg-blue-50 p-5 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-blue-500/20 dark:bg-blue-500/5 dark:text-slate-200">
                      <p className="text-xs uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">Conversion</p>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Copy that motivates action and builds trust fast.</p>
                    </div>
                    <div className="rounded-[30px] border border-blue-200 bg-blue-50 p-5 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-blue-500/20 dark:bg-blue-500/5 dark:text-slate-200">
                      <p className="text-xs uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">Clarity</p>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Clear messaging that removes friction and boosts confidence.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                    <a
                      href="#contact"
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_12px_25px_-5px_rgba(37,99,235,0.45)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_25px_-5px_rgba(37,99,235,0.45)] active:translate-y-0 active:scale-[0.98]"
                      style={{ borderRadius: '9999px', whiteSpace: 'nowrap', textTransform: 'capitalize' }}
                    >
                      <span className="relative z-10">Book Writing Service</span>
                      <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.25)_25%,rgba(255,255,255,0.08)_50%,transparent_75%)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
                    </a>
                    <span className="group inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-6 py-3 text-sm font-medium text-blue-200 transition-all duration-300 ease-out hover:bg-blue-500/10" style={{ borderRadius: '9999px', whiteSpace: 'nowrap', textTransform: 'capitalize' }}>
                      <span className="h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_0_4px_rgba(45,212,191,0.12)] animate-pulse" />
                      <span className="transition-colors duration-300 ease-out group-hover:text-teal-300">⚡ Fast Turnaround &amp; Polished Quality</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid w-full flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:min-h-[580px]">
                {contentServices.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden rounded-[16px] border border-slate-200 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_10px_25px_rgba(14,165,233,0.08)] dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-sky-400/60"
                      style={{ transitionDelay: `${index * 0.03}s` }}
                    >
                      <div className="relative flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                          <Icon size={19} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[1.05rem] font-bold leading-snug text-slate-900 dark:text-white">{item.title}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-5 text-slate-600 font-normal dark:text-slate-300">{item.description}</p>
                      <div className="absolute bottom-4 right-4 opacity-0 transition duration-300 group-hover:opacity-100">
                        <ArrowRight size={18} className="text-sky-500" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200/80 pt-5 text-center">
              <p className="text-sm text-slate-300">
                Curious about my process? <a href="#contact" className="font-semibold text-sky-300 transition hover:text-sky-200">Let’s connect.</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
