import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Aria Premium E-commerce',
    tagline: 'Exploración de UI/UX y desarrollo frontend',
    url: 'https://aria-concept.vercel.app',
    role: 'Frontend Developer & UI/UX',
    achievements: [
      'Prototipado rápido y maquetación de alta fidelidad: del diseño en Figma directo al código funcional.',
      'Fuerte enfoque en la experiencia de usuario (UX), optimizando animaciones fluidas con Framer Motion.',
      'Implementación de una arquitectura frontend modular, basada en componentes reutilizables y código limpio.',
    ],
    stack: ['React', 'Framer Motion', 'Tailwind', 'Vite', 'UI/UX'],
    live: '#',
    github: '#',
  },
  {
    name: 'NeuroDoc AI',
    tagline: 'Sistema full-stack integrado con LLMs',
    url: 'https://neurodoc-ai.vercel.app',
    role: 'Software Engineer',
    achievements: [
      'Integración exitosa de APIs de Inteligencia Artificial para el procesamiento rápido de lenguaje natural.',
      'Arquitectura de código totalmente mantenible en Next.js, priorizando la separación de responsabilidades y buenas prácticas.',
      'Desarrollo End-to-End de una interfaz minimalista orientada exclusivamente en aportar utilidad real al usuario final.',
    ],
    stack: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Arquitectura'],
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
            Proyectos Adicionales
          </h2>
          <p className="text-xl text-[#1a1a1a]/60 max-w-3xl">
            Sistemas donde exploro nuevas tecnologías, afino mis habilidades en diseño técnico y desarrollo soluciones completas demostrando buenas prácticas.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              whileHover={{ scale: 1.01 }}
              className={`group relative grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}
            >
              
              {/* Content Side */}
              <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                <h3 className="text-3xl font-semibold text-[#1a1a1a] mb-2">
                  {project.name}
                </h3>
                <p className="text-lg text-[#1a1a1a]/60 mb-4">
                  {project.tagline}
                </p>
                <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium mb-8">
                  {project.role}
                </span>

                {/* Achievements */}
                <ul className="space-y-4 mb-8">
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
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech, i) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-100/80 text-[#1a1a1a]/70 rounded-lg text-sm font-medium border border-black/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                     <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-full hover:bg-black transition-all shadow-md hover:shadow-lg text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visitar Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center w-11 h-11 bg-white text-[#1a1a1a] rounded-full border border-black/10 transition-all shadow-sm hover:shadow-md"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                </div>
              </div>

              {/* Browser Preview Mockup */}
              <div className={`relative ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                 <div className="relative aspect-[4/3] bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-2xl border border-black/10 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    {/* Window Header */}
                    <div className="p-3 border-b border-black/5 bg-white/50 flex items-center gap-2 backdrop-blur-md">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="ml-4 flex-1 flex justify-center">
                        <div className="bg-black/5 rounded-md px-3 py-1 text-[10px] font-mono text-[#1a1a1a]/50">
                          {project.url}
                        </div>
                      </div>
                    </div>

                    {/* Window Body (Mock Content) */}
                    <div className="absolute inset-0 top-[40px] bg-white p-6 overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                       
                       {/* Geometric Mock Shapes depending on project to vary it visually */}
                       {index === 0 ? (
                         <div className="flex flex-col gap-4 h-full">
                           <div className="h-32 w-full bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl" />
                           <div className="grid grid-cols-2 gap-4 flex-1">
                              <div className="bg-gray-50 rounded-xl h-full" />
                              <div className="bg-gray-50 rounded-xl h-full" />
                           </div>
                         </div>
                       ) : (
                         <div className="flex flex-col items-center justify-center h-full gap-4 opacity-70">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                               <div className="w-8 h-8 rounded-full bg-blue-500/20" />
                            </div>
                            <div className="h-4 w-1/3 bg-gray-100 rounded-full" />
                            <div className="h-2 w-1/2 bg-gray-50 rounded-full" />
                            <div className="w-full max-w-sm mt-4 space-y-2">
                              <div className="h-8 bg-gray-50 rounded-lg w-full" />
                              <div className="h-8 bg-gray-50 rounded-lg w-full" />
                            </div>
                         </div>
                       )}
                    </div>
                 </div>
                 
                 {/* Decorative Glow */}
                 <div className="absolute -inset-4 bg-blue-500/5 blur-2xl rounded-3xl -z-10 group-hover:bg-blue-500/10 transition-colors duration-500" />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}