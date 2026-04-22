import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Layers, Bot, Users, Maximize2, X } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Desarrollado con Next.js',
    description: 'Arquitectura de alto rendimiento construida con Next.js, ofreciendo cargas instantáneas y una fluidez excepcional.',
  },
  {
    icon: Bot,
    title: 'Múltiples Inteligencias Artificiales',
    description: 'Integración avanzada de los modelos de Inteligencia Artificial más potentes para entregar soluciones precisas y automatizadas.',
  },
  {
    icon: Users,
    title: 'Alta demanda y escala',
    description: 'Infraestructura sólida que soporta las interacciones diarias de una comunidad de cientos de miles de usuarios sin comprometer la velocidad.',
  },
];

export function ProjectSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <>
      <section
        className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5" />

        <div ref={containerRef} className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Content */}
            <motion.div
              style={{ opacity }}
              className="space-y-12"
            >
              {/* Header */}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-sm font-mono uppercase tracking-wider text-blue-600 mb-4"
                >
                  Proyecto destacado
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1a1a1a] mb-6"
                >
                  grazia.ai
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-[#1a1a1a]/60 leading-relaxed"
                >
                  Grazia es un asistente de IA avanzado diseñado para revolucionar la productividad diaria. Combina la potencia de múltiples inteligencias artificiales en una sola plataforma rápida y escalable.
                </motion.p>
              </div>

              {/* Features */}
              <div className="space-y-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-[#1a1a1a]/60 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-2xl border border-blue-500/10"
              >
                <p className="text-sm font-mono uppercase tracking-wider text-blue-600 mb-3">
                  Escala e Integración
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-1">
                      300k+
                    </div>
                    <div className="text-sm text-[#1a1a1a]/60">
                      Usuarios
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-1">
                      Múltiple
                    </div>
                    <div className="text-sm text-[#1a1a1a]/60">
                      Integración IA
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-1">
                      Next.js
                    </div>
                    <div className="text-sm text-[#1a1a1a]/60">
                      Core Stack
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Visual Preview (pinned) */}
            <motion.div className="relative lg:sticky lg:top-32 h-fit">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative cursor-pointer group"
                onClick={() => setIsOpen(true)}
              >
                {/* Glass card mockup */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300">
                  {/* Window UI */}
                  <div className="flex flex-col h-full w-full">
                    {/* Header bar */}
                    <div className="p-3 md:p-4 border-b border-black/5 bg-white/60 flex items-center gap-3 backdrop-blur-md">
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="mx-4 flex-1 flex justify-center">
                        <div className="bg-black/5 rounded-md px-4 py-1 text-[10px] md:text-xs font-mono text-[#1a1a1a]/50 flex items-center gap-2">
                          <span>https://www.grazia.ai/board</span>
                        </div>
                      </div>
                    </div>

                    {/* Iframe content */}
                    <div className="relative flex-1 w-full bg-white overflow-hidden pointer-events-none">
                       {/* Escala el iframe para que no se vea tan compacto en la vista pequeña usando css */}
                      <iframe 
                        src="https://www.grazia.ai/board" 
                        className="w-[125%] h-[125%] origin-top-left transform scale-80 border-0 absolute top-0 left-0"
                        title="Grazia AI Board Preview"
                        tabIndex={-1}
                      />
                    </div>
                  </div>

                  {/* Interactive Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10 flex items-center justify-center backdrop-blur-[1px] opacity-0 group-hover:opacity-100">
                     <div className="px-6 py-3 bg-white text-[#1a1a1a] rounded-full shadow-lg font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <Maximize2 className="w-5 h-5 text-blue-600" />
                        <span>Abrir y explorar grazia.ai</span>
                     </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl -z-20" />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 md:-top-4 md:-right-4 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500/30 to-violet-500/30 rounded-2xl backdrop-blur-xl border border-white/40 shadow-xl flex items-center justify-center z-10 pointer-events-none"
              >
                <Bot className="w-8 h-8 md:w-10 md:h-10 text-blue-600/70" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 md:-bottom-4 md:-left-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl backdrop-blur-xl border border-white/40 shadow-xl flex items-center justify-center z-10 pointer-events-none"
              >
                 <Users className="w-6 h-6 md:w-8 md:h-8 text-cyan-600/70" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-sm"
          >
            {/* Click bg to close */}
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[1400px] h-full max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-black/10"
            >
              {/* Browser Header */}
              <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex items-center gap-4 relative z-10">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                 </div>
                 
                 <div className="flex-1 flex justify-center">
                    <div className="bg-white border border-gray-200 rounded text-xs px-4 py-1.5 font-mono text-gray-500 shadow-sm w-full max-w-lg text-center">
                       https://www.grazia.ai/board
                    </div>
                 </div>

                 <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-500 hover:text-black absolute right-4"
                    title="Cerrar"
                 >
                    <X className="w-5 h-5 cursor-pointer" />
                 </button>
              </div>

              {/* Iframe Content */}
              <div className="flex-1 w-full bg-white relative">
                 <iframe 
                    src="https://www.grazia.ai/board" 
                    className="absolute inset-0 w-full h-full border-0"
                    title="Grazia AI Board Interactive"
                 />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}