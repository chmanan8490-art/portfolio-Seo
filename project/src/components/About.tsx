import { CheckCircle2, User } from 'lucide-react';
import { aboutSpecialties } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScroll';

export default function About() {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="about" className="section-pad">
      <div ref={ref} className={`container-px grid lg:grid-cols-2 gap-12 items-center reveal ${visible ? 'is-visible' : ''}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-500/10 rounded-3xl" />
          <div className="relative card p-8">
            <div className="grid place-items-center w-36 h-36 rounded-full overflow-hidden mx-auto mb-6 shadow-lg shadow-primary-600/30">
              <img
                src="/suffyan-profile.jpeg"
                alt="Suffyan"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-2 text-center">Suffyan</h3>
            <p className="text-primary-400 font-semibold text-sm mb-4 text-center">SEO Specialist</p>
            <p className="text-slate-300 leading-relaxed">
              Passionate about helping businesses improve their online visibility and organic search
              performance through data-driven strategies.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-3">
                <p className="font-heading font-bold text-2xl gradient-text">5+</p>
                <p className="text-xs text-slate-400">Years Exp.</p>
              </div>
              <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-3">
                <p className="font-heading font-bold text-2xl gradient-text">120+</p>
                <p className="text-xs text-slate-400">Projects</p>
              </div>
              <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-3">
                <p className="font-heading font-bold text-2xl gradient-text">98%</p>
                <p className="text-xs text-slate-400">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="section-subtitle mb-3">About Me</p>
          <h2 className="section-title mb-6 l">
            SEO Specialist building <span className="gradient-text">sustainable organic growth</span>
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Hi, I'm Suffyan, an SEO Specialist passionate about helping businesses improve their
            online visibility and organic search performance.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            My goal is to create long-term SEO strategies that generate sustainable traffic and
            measurable business growth. I specialize in:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {aboutSpecialties.map((s) => (
              <div key={s} className="flex items-center gap-3 group">
                <CheckCircle2 size={20} className="text-secondary-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-200 font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
