import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { FiCheckCircle, FiCode, FiEdit3, FiGlobe, FiMail, FiPenTool, FiSearch, FiShare2, FiShoppingBag } from 'react-icons/fi';
import { services } from '@/data/content';
import { iconMap } from '@/components/Icon';
import { useScrollReveal } from '@/hooks/useScroll';

const contentServices = [
  {
    title: 'SEO Content Writing',
    icon: <FiSearch size={20} />,
    desc: 'Create search-optimized pages and articles that rank for target keywords and attract qualified traffic.',
  },
  {
    title: 'Blog & Article Writing',
    icon: <FiEdit3 size={20} />,
    desc: 'Write engaging blog posts and long-form articles that build your authority and keep readers coming back.',
  },
  {
    title: 'Website Content Writing',
    icon: <FiGlobe size={20} />,
    desc: 'Develop clear, persuasive website copy that communicates your value and converts visitors into leads.',
  },
  {
    title: 'Copywriting',
    icon: <FiPenTool size={20} />,
    desc: 'Craft compelling headlines, value propositions, and sales copy that drive action and improve conversions.',
  },
  {
    title: 'Product Description Writing',
    icon: <FiShoppingBag size={20} />,
    desc: 'Write product descriptions that explain benefits, reduce friction, and help customers make faster buying decisions.',
  },
  {
    title: 'Email Copywriting',
    icon: <FiMail size={20} />,
    desc: 'Create email campaigns that engage subscribers, nurture leads, and get measurable clicks and responses.',
  },
  {
    title: 'Social Media Content',
    icon: <FiShare2 size={20} />,
    desc: 'Produce social posts, captions, and campaign copy that grow your following and strengthen brand awareness.',
  },
  {
    title: 'Technical Writing',
    icon: <FiCode size={20} />,
    desc: 'Develop clear technical documentation, guides, and manuals that are easy to understand and follow.',
  },
  {
    title: 'Content Editing & Proofreading',
    icon: <FiCheckCircle size={20} />,
    desc: 'Polish your content with grammar checks, style improvements, and consistency edits for a professional finish.',
  },
];

const linkBuildingServices = [
  {
    title: 'Guest Posting',
    icon: '🔗',
    desc: 'Secure high-quality placements on relevant websites to boost authority, referral traffic, and search visibility.',
  },
  {
    title: 'Niche Edits',
    icon: '🌐',
    desc: 'Add your links naturally within existing content on trusted sites for a seamless and effective backlink strategy.',
  },
  {
    title: 'Blogger Outreach',
    icon: '📩',
    desc: 'Build genuine relationships with bloggers and publishers to earn valuable links and expand your online reach.',
  },
  {
    title: 'Article Submission',
    icon: '📝',
    desc: 'Distribute well-written articles across reputable platforms to strengthen your backlink profile and brand presence.',
  },
  {
    title: 'Profile Creation',
    icon: '👤',
    desc: 'Create and optimize business and author profiles across trusted directories to enhance credibility and online authority.',
  },
  {
    title: 'Business Listing Submission',
    icon: '🏢',
    desc: 'Submit your business to high-quality local and industry listings to improve discoverability and local SEO signals.',
  },
  {
    title: 'Web 2.0 Creation',
    icon: '🌍',
    desc: 'Develop branded web properties with useful content that support your SEO goals and reinforce your digital footprint.',
  },
  {
    title: 'Social Bookmarking',
    icon: '🔖',
    desc: 'Promote your content through trusted bookmarking platforms to increase discoverability and drive engagement.',
  },
  {
    title: 'Forum Posting',
    icon: '💬',
    desc: 'Share thoughtful, value-driven contributions in relevant communities to build trust and generate quality backlinks.',
  },
  {
    title: 'Local Citation Building',
    icon: '📍',
    desc: 'Ensure your business appears consistently across local directories to strengthen trust, visibility, and local rankings.',
  },
  {
    title: 'Competitor Backlink Analysis',
    icon: '📊',
    desc: 'Study competitor link patterns to uncover opportunities and shape a smarter, more competitive backlink strategy.',
  },
  {
    title: 'High Authority Backlink Building',
    icon: '⭐',
    desc: 'Target premium, trusted sources that can significantly improve domain authority and long-term SEO performance.',
  },
];

const iconBadgeClassName = 'inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 text-primary-600 border border-primary-100 shadow-sm dark:bg-gray-800/80 dark:text-primary-400 dark:border-primary-900/50 mb-4 group-hover:scale-110 group-hover:shadow-md transition-all';

function ServiceIconBadge({ icon }: { icon: ReactNode }) {
  return (
    <div className={iconBadgeClassName}>
      {typeof icon === 'string' ? <span className="text-lg leading-none">{icon}</span> : icon}
    </div>
  );
}

export default function Services() {
  const { ref, visible } = useScrollReveal();
  return (
    <>
      <section id="services" className="section-pad bg-lightgray dark:bg-gray-900/30">
        <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-subtitle mb-3">What I Do</p>
            <h2 className="section-title">My <span className="gradient-text">SEO Services</span></h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Comprehensive SEO services designed to improve your rankings, traffic, and conversions.
            </p>
          </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="card p-6 group hover:-translate-y-1.5 relative overflow-hidden"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary-50 dark:bg-primary-950/40 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="inline-grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 text-white mb-4 shadow-lg shadow-primary-600/20 group-hover:scale-110 transition-transform">
                    {Icon ? <Icon size={22} /> : null}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-dark dark:text-white mb-2 flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight size={18} className="text-gray-300 dark:text-gray-600 group-hover:text-primary-500 group-hover:rotate-45 transition-all" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section id="content-writing" className="section-pad">
      <div className="container-px">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-subtitle mb-3">Content Writing</p>
          <h2 className="section-title">
            Content Writing <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Professional content writing solutions tailored to your brand, audience, and SEO goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentServices.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="card p-6 group hover:-translate-y-1.5 relative overflow-hidden"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary-50 dark:bg-primary-950/40 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <ServiceIconBadge icon={service.icon} />
                  <h3 className="font-heading font-bold text-lg text-dark dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section id="link-building" className="section-pad bg-lightgray/70 dark:bg-gray-900/20">
      <div className="container-px">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-subtitle mb-3">Link Building</p>
          <h2 className="section-title">
            Smart <span className="gradient-text">Link Building Services</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            High-quality backlink solutions built to strengthen authority, improve rankings, and support sustainable SEO growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {linkBuildingServices.map((service, i) => (
            <div
              key={service.title}
              className="card p-6 group hover:-translate-y-1.5 relative overflow-hidden border border-primary-100/70 dark:border-primary-900/40"
              style={{ transitionDelay: `${i * 0.04}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <ServiceIconBadge icon={service.icon} />
                <h3 className="font-heading font-bold text-lg text-dark dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  );
}
