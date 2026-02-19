import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 backdrop-blur-xl bg-white/80 border-b border-black/5 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl font-medium tracking-tight text-[#1a1a1a] hover:text-black transition-colors"
        >
          Daniel
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['Work', 'Skills', 'Process', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          onClick={() => scrollToSection('contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-[#1a1a1a] text-white rounded-full text-sm font-medium hover:bg-black transition-all hover:shadow-lg hover:shadow-blue-500/20 relative overflow-hidden group"
        >
          <span className="relative z-10">Hablemos</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </motion.button>
      </div>
    </motion.header>
  );
}
