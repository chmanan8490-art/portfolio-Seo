import { Heart, ArrowUp } from 'lucide-react';
import { navLinks, services } from '@/data/content';

export default function Footer({ onBackToTop }: { onBackToTop: () => void }) {
  return (
    <footer className="bg-slate-950 text-slate-100 pt-16 pb-8 border-t border-slate-800">
      <div className="container-px">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 text-white font-bold font-heading text-lg">S</span>
              <span className="font-heading font-bold text-lg text-white">Suffyan</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              SEO Specialist helping businesses rank higher, grow faster, and get more organic traffic.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 6).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-3">Weekly SEO tips delivered to your inbox.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-white placeholder-slate-400 focus:border-primary-500 outline-none"
              />
              <button className="px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Suffyan. All rights reserved. Made with{' '}
            <Heart size={12} className="inline fill-red-500 text-red-500" /> for SEO.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">Privacy Policy</a>
            <button onClick={onBackToTop} className="grid place-items-center w-9 h-9 rounded-full bg-slate-800 hover:bg-primary-600 hover:text-white transition-colors" aria-label="Back to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
