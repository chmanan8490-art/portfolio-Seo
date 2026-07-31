import { useEffect, useState } from 'react';
import { ArrowRight, Play, TrendingUp, Search, BarChart3, Globe, Key } from 'lucide-react';

const phrases = [
  'Organic Traffic',
  'Google Rankings',
  'More Leads',
  'Conversions',
];

function useTyping() {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: number;
    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === '') {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    } else {
      timeout = window.setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? 50 : 90);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx]);

  return text;
}

export default function Hero() {
  const typed = useTyping();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-20 overflow-hidden grid-bg">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute top-40 -left-32 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl" />

      <div className="container-px grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-secondary-500 opacity-75 animate-pulse-ring" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-500" />
            </span>
            Available for SEO Projects
          </span>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-dark dark:text-white">
            Rank Higher. Grow Faster.{' '}
            <span className="block gradient-text mt-2">Get More {typed}<span className="typing-cursor h-12 lg:h-14 ml-1" /></span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
            I help businesses increase their Google rankings, drive organic traffic, and generate
            more leads through data-driven SEO strategies.
          </p>

          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-xl">
            Specialized in Technical SEO, On-Page SEO, Keyword Research, SEO Audits, and Content Optimization.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => scrollTo('#contact')} className="btn-primary">
              Get Free SEO Audit <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollTo('#portfolio')} className="btn-outline">
              <Play size={16} /> View My Work
            </button>
          </div>

          <div className="mt-10 flex items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-secondary-500" />
              <span><strong className="text-dark dark:text-white">+300%</strong> Avg. Traffic Growth</span>
            </div>
            <div className="flex items-center gap-2">
              <Search size={18} className="text-primary-500" />
              <span><strong className="text-dark dark:text-white">200+</strong> Audits Done</span>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-secondary-500/20 rounded-3xl blur-2xl" />
      <div className="relative card p-6 lg:p-8 backdrop-blur">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">SEO Dashboard</p>
            <h3 className="font-heading font-bold text-xl text-dark dark:text-white">Performance Overview</h3>
          </div>
          <span className="px-3 py-1 rounded-full bg-secondary-100 dark:bg-secondary-900/40 text-secondary-700 dark:text-secondary-300 text-xs font-semibold">
            Live
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <MiniStat icon={<TrendingUp size={20} />} label="Organic Traffic" value="48.2K" trend="+34%" color="primary" />
          <MiniStat icon={<BarChart3 size={20} />} label="Avg. Position" value="3.4" trend="+5.2" color="secondary" />
          <MiniStat icon={<Key size={20} />} label="Keywords" value="1,240" trend="+18%" color="primary" />
          <MiniStat icon={<Globe size={20} />} label="Indexed Pages" value="342" trend="+12%" color="secondary" />
        </div>

        <div className="rounded-xl bg-gray-50 dark:bg-gray-900/60 p-4">
          <p className="text-sm font-semibold text-dark dark:text-white mb-3">Ranking Growth (6 months)</p>
          <div className="flex items-end gap-2 h-32">
            {[35, 48, 42, 60, 72, 88, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-primary-600 to-secondary-500 transition-all duration-700"
                  style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                />
                <span className="text-[10px] text-gray-400">M{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -top-6 -right-6 animate-float">
          <div className="card px-4 py-3 flex items-center gap-2 shadow-xl">
            <Search size={18} className="text-primary-500" />
            <span className="text-sm font-semibold text-dark dark:text-white">#1 Ranking</span>
          </div>
        </div>
        <div className="absolute -bottom-6 -left-6 animate-float-slow">
          <div className="card px-4 py-3 flex items-center gap-2 shadow-xl">
            <TrendingUp size={18} className="text-secondary-500" />
            <span className="text-sm font-semibold text-dark dark:text-white">+320% Traffic</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ icon, label, value, trend, color }: { icon: React.ReactNode; label: string; value: string; trend: string; color: 'primary' | 'secondary' }) {
  return (
    <div className="rounded-xl bg-gray-50 dark:bg-gray-900/60 p-4">
      <div className={`inline-flex p-2 rounded-lg mb-2 ${color === 'primary' ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300' : 'bg-secondary-100 dark:bg-secondary-900/40 text-secondary-600 dark:text-secondary-300'}`}>
        {icon}
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
      <p className="font-heading font-bold text-lg text-dark dark:text-white">{value}</p>
      <p className={`text-xs font-semibold ${color === 'primary' ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-600 dark:text-secondary-400'}`}>{trend}</p>
    </div>
  );
}
