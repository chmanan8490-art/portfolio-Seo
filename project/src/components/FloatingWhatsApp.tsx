import { useEffect, useRef, useState } from 'react';

const WHATSAPP_NUMBER = '923000124414'; // Replace with your WhatsApp number in international format, without +
const MESSAGE = "Hi Suffyan, I found your portfolio and I'm interested in your SEO, Content Writing, and Graphic Design services. I'd like to discuss my project.";
const ENCODED_MESSAGE = encodeURIComponent(MESSAGE);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${ENCODED_MESSAGE}`;

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10 h-[22px] w-[22px] sm:h-[23px] sm:w-[23px] md:h-[24px] md:w-[24px]"
    >
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.149s-.771.967-.945 1.168c-.174.199-.347.224-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.174-.297-.019-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.199.05-.373-.025-.522-.075-.149-.672-1.612-.921-2.206-.242-.579-.487-.499-.672-.509l-.573-.01c-.199 0-.522.075-.795.373s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.199 2.1 3.2 5.076 4.487.709.306 1.26.489 1.69.626.71.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.695.248-1.29.174-1.413-.074-.124-.272-.199-.57-.348z"
        fill="white"
      />
      <path
        d="M20.52 3.478A11.86 11.86 0 0 0 12 0C5.372 0 0 5.373 0 12 0 13.978.51 15.887 1.46 17.612L0 24l6.585-1.729A11.92 11.92 0 0 0 12 24c6.628 0 12-5.373 12-12 0-3.184-1.244-6.164-3.48-8.522zm-8.522 18.165c-1.99 0-3.92-.533-5.58-1.539l-.398-.236-3.912 1.026 1.046-3.814-.259-.392A9.975 9.975 0 0 1 2 12c0-5.523 4.477-10 10-10 2.67 0 5.175 1.04 7.068 2.932A9.97 9.97 0 0 1 22 12c0 5.523-4.477 10-9.999 10z"
        fill="white"
      />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const bubbleShown = useRef(false);
  const bubbleTimeout = useRef<number | null>(null);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('#home');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isHeroVisible = entry.isIntersecting;
        setVisible(!isHeroVisible);

        if (!isHeroVisible && !bubbleShown.current) {
          bubbleShown.current = true;
          setBubbleVisible(true);
          bubbleTimeout.current = window.setTimeout(() => {
            setBubbleVisible(false);
          }, 3000);
        }
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => {
      observer.disconnect();
      if (bubbleTimeout.current) {
        window.clearTimeout(bubbleTimeout.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (bubbleTimeout.current) {
      window.clearTimeout(bubbleTimeout.current);
    }
    setBubbleVisible(true);
  };

  const handleMouseLeave = () => {
    bubbleTimeout.current = window.setTimeout(() => {
      setBubbleVisible(false);
    }, 300);
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group fixed left-6 top-1/2 z-50 flex items-center justify-center w-[48px] h-[48px] sm:w-[50px] sm:h-[50px] md:w-[52px] md:h-[52px] -translate-y-1/2 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/20 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
        visible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`absolute left-full top-1/2 ml-3 flex h-[46px] min-w-[180px] max-w-[200px] -translate-y-1/2 items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-4 text-[14px] font-semibold text-[#111827] shadow-xl shadow-slate-900/10 transition-all duration-300 ease-out ${
          bubbleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 pointer-events-none'
        }`}
      >
        <span className="relative">👋 Let's Talk →</span>
      </div>
      <WhatsAppIcon />
    </a>
  );
}
