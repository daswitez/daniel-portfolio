import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Target, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const impacts = [
  {
    icon: Zap,
    title: 'Adaptabilidad ágil',
    subtitle: 'y velocidad.',
    description: 'Rápida integración a nuevos stacks y dominios con enfoque en la mejora continua.',
  },
  {
    icon: Target,
    title: 'Código escalable',
    subtitle: 'y mantenible.',
    description: 'Arquitecturas pensadas para crecer. Código limpio, tipado robusto y buenas prácticas.',
  },
  {
    icon: Sparkles,
    title: 'Pasión por la UX',
    subtitle: 'y el producto.',
    description: 'Construyo la mejor experiencia posible velando por el diseño visual y la interacción.',
  },
];

export function Impact() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 65%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-500 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#1a1a1a] mb-4">
            Cualidades que{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              aporto al equipo
            </span>
          </h2>
          <p className="text-xl text-[#1a1a1a]/60 max-w-2xl mx-auto">
            Prioridad plena en la solidez técnica y el impacto directo en el producto
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Glass card */}
                <div className="relative h-full p-8 bg-white/60 backdrop-blur-xl border border-black/5 rounded-3xl shadow-lg hover:shadow-2xl hover:border-blue-500/20 transition-all duration-500">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-violet-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl"
                  >
                    <Icon className="w-7 h-7 text-blue-600" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-1">
                      {impact.title}
                    </h3>
                    <p className="text-2xl font-semibold text-blue-600 mb-4">
                      {impact.subtitle}
                    </p>
                    <p className="text-[#1a1a1a]/60 leading-relaxed">
                      {impact.description}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Toolbelt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-[#1a1a1a]/50 text-sm font-mono uppercase tracking-wider mb-3">
            Toolbelt
          </p>
          <p className="text-[#1a1a1a]/70 text-lg">
            Tests · CI/CD · Observabilidad · Documentación
          </p>
        </motion.div>
      </div>
    </section>
  );
}