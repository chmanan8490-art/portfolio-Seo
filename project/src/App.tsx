import { useTheme } from '@/hooks/useTheme';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import SeoTools from '@/components/SeoTools';
import Workflow from '@/components/Workflow';
import CaseStudies from '@/components/CaseStudies';
import Portfolio from '@/components/Portfolio';
import MetricsDashboard from '@/components/MetricsDashboard';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function App() {
  const { theme, toggle } = useTheme();
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <LoadingScreen />
      <ScrollProgress onBackToTop={backToTop} />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main className="bg-slate-950 text-slate-100">
        <Hero />
        <TrustSection />
        <About />
        <Stats />
        <Services />
        <Skills />
        <SeoTools />
        <Workflow />
        <CaseStudies />
        <Portfolio />
        <MetricsDashboard />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer onBackToTop={backToTop} />
      <FloatingWhatsApp />
    </>
  );
}
