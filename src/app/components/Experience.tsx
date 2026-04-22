import { motion } from 'motion/react';
import { Briefcase, PenTool, Database } from 'lucide-react';

const experiences = [
  {
    company: 'Grazia.ai',
    role: 'Full-stack Developer & UI/UX',
    period: '2024 - 2025',
    description: 'Lideré el diseño de interfaz (UI/UX) colaborando estrechamente en Figma y desarrollé el front-end y back-end del producto. Enfoque hiper-centrado en el usuario para crear una experiencia fluida, rápida y accesible, integrando de forma eficiente múltiples APIs de inteligencia artificial y garantizando la mantenibilidad del código base.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Figma', 'UI/UX'],
    icon: PenTool,
  },
  {
    company: 'Solvertic',
    role: 'Desarrollador Backend',
    period: '2023 - 2024',
    description: 'Participé en el desarrollo de servicios backend bajo metodologías ágiles. Implementé APIs RESTful y servicios altamente escalables aplicando principios de código limpio (Clean Code) y microservicios, apoyando al equipo a cumplir los sprints y optimizando el acceso a las bases de datos relacionales.',
    stack: ['Spring Boot', 'Java', 'PostgreSQL', 'Microservicios', 'Arquitectura'],
    icon: Database,
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 bg-white overflow-hidden">
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-block px-3 py-1 mb-4 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-wide border border-blue-100">
            +2 Años de Experiencia
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6">
            Trayectoria Profesional
          </h2>
          <p className="text-xl text-[#1a1a1a]/60 leading-relaxed max-w-2xl">
            He tenido la oportunidad de impactar en diferentes áreas del ciclo de vida del software. Busco constantemente integrarme a equipos talentosos donde pueda aportar valor rápido, escribir código limpio y diseñar soluciones verdaderamente enfocadas en el usuario.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon || Briefcase;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Line & Dot */}
                <div className="absolute left-0 top-3 bottom-[-3rem] w-px bg-gradient-to-b from-blue-500/20 to-transparent last:bg-transparent">
                  <div className="absolute top-0 left-[-5px] w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white" />
                </div>

                <div className="bg-white border border-black/5 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-semibold text-[#1a1a1a]">
                      {exp.role}
                    </h3>
                    <span className="text-blue-600 font-mono text-sm tracking-wide bg-blue-50/50 px-3 py-1 rounded-md mt-2 md:mt-0 inline-block w-fit md:w-auto">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#1a1a1a]/50 font-medium mb-5">
                    <Icon className="w-5 h-5 text-blue-500" />
                    <span className="text-lg">{exp.company}</span>
                  </div>

                  <p className="text-[#1a1a1a]/70 leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-50 text-[#1a1a1a]/70 rounded-lg text-sm font-medium border border-gray-100 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
