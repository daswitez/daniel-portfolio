import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'SaaS Platform Enterprise',
    tagline: 'Plataforma B2B que transformó la gestión de equipos',
    role: 'Full-stack Lead',
    achievements: [
      'Incremento del 45% en retención de usuarios con dashboard en tiempo real',
      'Arquitectura multi-tenant segura manejando +100K usuarios activos',
      'Reducción del 60% en tiempo de onboarding con flujos optimizados',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    live: '#',
    github: '#',
  },
  {
    name: 'E-commerce Premium',
    tagline: 'Motor de ventas que escala sin comprometer performance',
    role: 'Backend Architect',
    achievements: [
      'Procesamiento de +50K transacciones diarias sin downtime',
      'Mejora del 70% en velocidad de carga con optimización de queries',
      'Sistema de pagos robusto con 99.99% de confiabilidad',
    ],
    stack: ['NestJS', 'PostgreSQL', 'Redis', 'AWS'],
    live: '#',
    github: '#',
  },
  {
    name: 'Analytics Dashboard Pro',
    tagline: 'Inteligencia de datos que impulsa decisiones estratégicas',
    role: 'Full-stack Developer',
    achievements: [
      'Visualización en tiempo real de +2M eventos diarios',
      'Reducción del 80% en tiempo de generación de reportes',
      'UI intuitiva que aumentó adopción interna en 90%',
    ],
    stack: ['React', 'TypeScript', 'Prisma', 'Recharts'],
    live: '#',
    github: '#',
  },
];

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    cardsRef.current.forEach((card) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#1a1a1a] mb-6">
            Proyectos destacados
          </h2>
          <p className="text-xl text-[#1a1a1a]/60 max-w-3xl">
            Soluciones reales que generaron impacto medible. Cada proyecto combina excelencia técnica con visión de negocio.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              whileHover={{ scale: 1.01 }}
              className="group relative"
            >
              {/* Glass card */}
              <div className="relative p-8 md:p-10 bg-white/60 backdrop-blur-xl border border-black/5 rounded-3xl shadow-lg hover:shadow-2xl hover:border-blue-500/20 transition-all duration-500">
                {/* Tilt effect container */}
                <div className="relative">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-3xl font-semibold text-[#1a1a1a] mb-2">
                        {project.name}
                      </h3>
                      <p className="text-lg text-[#1a1a1a]/60 mb-2">
                        {project.tagline}
                      </p>
                      <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium">
                        {project.role}
                      </span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-center w-10 h-10 bg-[#1a1a1a] text-white rounded-full hover:bg-black transition-all shadow-md hover:shadow-lg"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-center w-10 h-10 bg-white/80 text-[#1a1a1a] rounded-full hover:bg-white border border-black/10 transition-all shadow-md hover:shadow-lg"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-6">
                    {project.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                        <span className="text-[#1a1a1a]/70 leading-relaxed">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1.5 bg-gray-100/80 text-[#1a1a1a]/70 rounded-lg text-sm font-medium hover:bg-gray-200/80 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </div>

                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-violet-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}