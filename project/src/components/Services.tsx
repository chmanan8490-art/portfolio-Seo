import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  ClipboardCheck,
  FileText,
  Gauge,
  Globe,
  Link2,
  Mail,
  MapPin,
  MessageSquare,
  PenTool,
  Search,
  Settings2,
  Share2,
  ShoppingBag,
  Sparkles,
  Users,
} from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { services } from '@/data/content';
import { iconMap } from '@/components/Icon';
import { useScrollReveal } from '@/hooks/useScroll';

const contentServices = [
  {
    title: 'SEO Content Writing',
    icon: Search,
    desc: 'Create search-optimized pages and articles that rank for target keywords and attract qualified traffic.',
  },
  {
    title: 'Blog & Article Writing',
    icon: FileText,
    desc: 'Write engaging blog posts and long-form articles that build your authority and keep readers coming back.',
  },
  {
    title: 'Website Content Writing',
    icon: Globe,
    desc: 'Develop clear, persuasive website copy that communicates your value and converts visitors into leads.',
  },
  {
    title: 'Copywriting',
    icon: PenTool,
    desc: 'Craft compelling headlines, value propositions, and sales copy that drive action and improve conversions.',
  },
  {
    title: 'Product Description Writing',
    icon: ShoppingBag,
    desc: 'Write product descriptions that explain benefits, reduce friction, and help customers make faster buying decisions.',
  },
  {
    title: 'Email Copywriting',
    icon: Mail,
    desc: 'Create email campaigns that engage subscribers, nurture leads, and get measurable clicks and responses.',
  },
  {
    title: 'Social Media Content',
    icon: Share2,
    desc: 'Produce social posts, captions, and campaign copy that grow your following and strengthen brand awareness.',
  },
  {
    title: 'Technical Writing',
    icon: FileText,
    desc: 'Develop clear technical documentation, guides, and manuals that are easy to understand and follow.',
  },
  {
    title: 'Content Editing & Proofreading',
    icon: ClipboardCheck,
    desc: 'Polish your content with grammar checks, style improvements, and consistency edits for a professional finish.',
  },
];

const linkBuildingServices = [
  {
    title: 'Guest Posting',
    icon: Link2,
    desc: 'Secure high-quality placements on relevant websites to boost authority, referral traffic, and search visibility.',
  },
  {
    title: 'Niche Edits',
    icon: Globe,
    desc: 'Add your links naturally within existing content on trusted sites for a seamless and effective backlink strategy.',
  },
  {
    title: 'Blogger Outreach',
    icon: Mail,
    desc: 'Build genuine relationships with bloggers and publishers to earn valuable links and expand your online reach.',
  },
  {
    title: 'Article Submission',
    icon: FileText,
    desc: 'Distribute well-written articles across reputable platforms to strengthen your backlink profile and brand presence.',
  },
  {
    title: 'Profile Creation',
    icon: Users,
    desc: 'Create and optimize business and author profiles across trusted directories to enhance credibility and online authority.',
  },
  {
    title: 'Business Listing Submission',
    icon: Briefcase,
    desc: 'Submit your business to high-quality local and industry listings to improve discoverability and local SEO signals.',
  },
  {
    title: 'Web 2.0 Creation',
    icon: Globe,
    desc: 'Develop branded web properties with useful content that support your SEO goals and reinforce your digital footprint.',
  },
  {
    title: 'Social Bookmarking',
    icon: Share2,
    desc: 'Promote your content through trusted bookmarking platforms to increase discoverability and drive engagement.',
  },
  {
    title: 'Forum Posting',
    icon: MessageSquare,
    desc: 'Share thoughtful, value-driven contributions in relevant communities to build trust and generate quality backlinks.',
  },
  {
    title: 'Local Citation Building',
    icon: MapPin,
    desc: 'Ensure your business appears consistently across local directories to strengthen trust, visibility, and local rankings.',
  },
  {
    title: 'Competitor Backlink Analysis',
    icon: BarChart3,
    desc: 'Study competitor link patterns to uncover opportunities and shape a smarter, more competitive backlink strategy.',
  },
  {
    title: 'High Authority Backlink Building',
    icon: Sparkles,
    desc: 'Target premium, trusted sources that can significantly improve domain authority and long-term SEO performance.',
  },
];

const iconBadgeClassName = 'inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 text-primary-600 border border-primary-100 shadow-sm dark:bg-gray-800/80 dark:text-primary-400 dark:border-primary-900/50 mb-4 group-hover:scale-110 group-hover:shadow-md transition-all';

function ServiceIconBadge({ icon }: { icon: ReactNode }) {
  const resolvedIcon = typeof icon === 'string' ? iconMap[icon] : icon;
  const IconComponent = resolvedIcon && typeof resolvedIcon !== 'string' ? resolvedIcon : null;

  return (
    <div className={iconBadgeClassName}>
      {IconComponent ? <IconComponent size={20} /> : null}
    </div>
  );
}

export default function Services() {
  const { ref, visible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<'SEO Expertise' | 'Content Writing' | 'Link Building'>('SEO Expertise');

  const tabs = {
    'SEO Expertise': services,
    'Content Writing': contentServices,
    'Link Building': linkBuildingServices,
  } as const;

  const activeServices = tabs[activeTab];

  return (
    <section id="services" className="section-pad bg-slate-50 text-slate-900">
      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="section-subtitle mb-3">What I Do</p>
          <h2 className="section-title">My <span className="gradient-text">Expertise</span></h2>
          <p className="mt-4 text-slate-600">
            A focused portfolio of SEO, content, and link-building services designed to improve rankings, traffic, and conversions.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {(Object.keys(tabs) as Array<keyof typeof tabs>).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:text-sky-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeServices.map((service, i) => {
            const iconValue = 'icon' in service ? service.icon : null;
            const Icon = typeof iconValue === 'string' ? iconMap[iconValue] : iconValue;

            return (
              <div
                key={service.title}
                className="card p-6 group hover:-translate-y-1.5 relative overflow-hidden"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary-50 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 text-primary-600 border border-primary-100 shadow-sm mb-4 group-hover:scale-110 group-hover:shadow-md transition-all">
                    {Icon ? <Icon size={20} /> : null}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-primary-500 group-hover:rotate-45 transition-all" />
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
