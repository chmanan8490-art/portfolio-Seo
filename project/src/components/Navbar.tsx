import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, FileText } from 'lucide-react';
import { navLinks } from '@/data/content';
import { useActiveSection } from '@/hooks/useScroll';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-md border-b border-slate-200 dark:bg-slate-950/85 dark:border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-16 lg:h-20">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
          className="flex items-center gap-2 group"
        >
          <span className="relative grid place-items-center w-11 h-11 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-700 to-sky-500 text-white font-bold font-heading text-lg shadow-xl shadow-slate-900/20 transition-transform group-hover:scale-105">
            <span className="absolute inset-0 rounded-3xl border border-white/10" />
            <span className="relative z-10">S</span>
          </span>
          <span className="font-heading font-bold text-lg text-slate-900 hidden sm:block tracking-wide dark:text-white">
            Suffyan
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/40'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="grid place-items-center w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-colors dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm sm:text-base font-semibold shadow-lg shadow-sky-500/20 transition duration-300 transform hover:-translate-y-1 hover:scale-105 motion-safe:animate-bounce focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/20 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <FileText size={18} className="shrink-0" />
            My CV
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="lg:hidden grid place-items-center w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg dark:bg-slate-950 dark:border-slate-800">
          <ul className="container-px py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-950/40 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-950/40 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              >
                MY CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
