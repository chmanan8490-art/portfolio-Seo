import { ArrowRight, BookOpen, ClipboardList, FileText, LayoutList, PenTool, Search, Sparkles, Star, Wand2 } from 'lucide-react';
import { skills } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScroll';

function CircularProgress({ name, value, visible, delay }: { name: string; value: number; visible: boolean; delay: number }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = visible ? circumference - (value / 100) * circumference : circumference;

  return (
    <div className="flex flex-col items-center group" style={{ transitionDelay: `${delay}s` }}>
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} fill="none" strokeWidth="10" className="stroke-gray-200 dark:stroke-gray-700" />
          <circle
            cx="60" cy="60" r={radius} fill="none" strokeWidth="10"
            strokeLinecap="round"
            stroke="url(#skillGradient)"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.6s cubic-bezier(0.4,0,0.2,1)' }}
          />
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-heading font-bold text-xl text-dark dark:text-white">{value}%</span>
        </div>
      </div>
      <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-200 text-center">{name}</p>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="skills" className="section-pad">
      <div ref={ref} className="container-px">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-subtitle mb-3">My Expertise</p>
          <h2 className="section-title">SEO <span className="gradient-text">Skills</span></h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            A deep toolkit honed across hundreds of audits and ranking campaigns.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, i) => (
            <CircularProgress key={skill.name} name={skill.name} value={skill.value} visible={visible} delay={i * 0.08} />
          ))}
        </div>

        <section className="mt-16 overflow-hidden rounded-[36px] border border-slate-200/70 bg-white shadow-[0_35px_80px_-40px_rgba(15,23,42,0.15)]">
          <div className="rounded-[34px] bg-white p-8 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6 text-center">
                <div className="inline-flex items-center rounded-full bg-blue-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 shadow-sm">
                  Premium Content Writing
                </div>
                <div className="space-y-4">
                  <p className="section-subtitle mb-0 text-slate-500">Content Writing Skills</p>
                  <h3 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                    Writing services built to convert visitors into clients.
                  </h3>
                  <p className="mx-auto max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                    High-impact writing for SEO pages, blogs, landing pages, and product descriptions with clear messaging, brand-ready tone, and conversion focus.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[30px] border border-blue-100 bg-blue-50 p-5 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-600">Conversion</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">Copy that motivates action and builds trust fast.</p>
                  </div>
                  <div className="rounded-[30px] border border-blue-100 bg-blue-50 p-5 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-600">Clarity</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">Clear messaging that removes friction and boosts confidence.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:items-center">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition hover:scale-[1.02]">
                    Hire me for content writing
                  </a>
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-slate-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> Fast delivery, polished results
                  </span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: 'SEO Writing',
                    description: 'Optimized content that ranks higher on search engines.',
                    icon: Search,
                  },
                  {
                    title: 'Blog Writing',
                    description: 'Engaging articles that attract and retain readers.',
                    icon: BookOpen,
                  },
                  {
                    title: 'Article Writing',
                    description: 'Well-researched, informative, and original articles.',
                    icon: ClipboardList,
                  },
                  {
                    title: 'Website Content Writing',
                    description: 'Clear, persuasive content for business websites.',
                    icon: LayoutList,
                  },
                  {
                    title: 'Research Writing',
                    description: 'Accurate, detailed, and data-driven writing.',
                    icon: FileText,
                  },
                  {
                    title: 'Content Strategy',
                    description: 'Content planning focused on business growth.',
                    icon: Sparkles,
                  },
                  {
                    title: 'Editing & Proofreading',
                    description: 'Polished, error-free, professional content.',
                    icon: PenTool,
                  },
                  {
                    title: 'Storytelling',
                    description: 'Compelling writing that connects with readers.',
                    icon: Star,
                  },
                  {
                    title: 'AI Content Optimization',
                    description: 'Humanized AI content optimized for SEO.',
                    icon: Wand2,
                  },
                  {
                    title: 'Copywriting',
                    description: 'High-converting copy that drives more sales.',
                    icon: ArrowRight,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300/50 hover:shadow-[0_18px_45px_-25px_rgba(56,189,248,0.45)]"
                      style={{ transitionDelay: `${index * 0.03}s` }}
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 to-cyan-300 opacity-0 transition duration-300 group-hover:opacity-100" />
                      <div className="relative flex items-start gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-100 via-sky-50 to-cyan-100 text-sky-700 shadow-sm">
                          <Icon size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                        </div>
                      </div>
                      <div className="absolute bottom-5 right-5 opacity-0 transition duration-300 group-hover:opacity-100">
                        <ArrowRight size={18} className="text-sky-500" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
