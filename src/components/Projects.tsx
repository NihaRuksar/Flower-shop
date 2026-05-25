import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, X, ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    id: 'neural-canvas',
    title: 'Neural Canvas',
    subtitle: 'Generative AI Image Synthesis Platform',
    desc: 'A luxury platform for generating high-fidelity artistic imagery using custom trained diffusion models. Features a bespoke glassmorphic interface and real-time prompt interpolation.',
    tech: ['PyTorch', 'Next.js', 'WebGL', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1634014022421-2ef3e2840ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: 'The architecture utilizes a distributed cluster of GPUs to deliver sub-second generation times. The frontend is heavily optimized using WebGL for canvas rendering and motion design principles to create a seamless, fluid user experience that feels like magic.'
  },
  {
    id: 'nexus-llm',
    title: 'Nexus Intelligence',
    subtitle: 'Enterprise Conversational Agent',
    desc: 'An editorial-grade chat interface powered by a fine-tuned LLM designed specifically for financial analysis and strategic advisory.',
    tech: ['OpenAI', 'React', 'Tailwind', 'VectorDB'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: 'Implemented a custom RAG (Retrieval-Augmented Generation) pipeline using Pinecone to grounding the model in proprietary data. The interface eschews typical chatbot patterns for a refined, document-centric layout.'
  },
  {
    id: 'quantum-vision',
    title: 'Quantum Vision',
    subtitle: 'Predictive Analytics Dashboard',
    desc: 'A cinematic dashboard for real-time predictive analytics using streaming data and edge AI inference.',
    tech: ['TensorFlow', 'TypeScript', 'D3.js', 'Kafka'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: 'The system ingests millions of events per minute. The UI translates complex multidimensional data into intuitive, glowing geometric visualizer components that update in real-time without dropping frames.'
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const next = () => setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);

  const current = PROJECTS[currentIndex];
  
  const activeProj = PROJECTS.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="w-full min-h-screen py-24 relative flex flex-col justify-center overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full mb-12 flex justify-between items-end relative z-10">
        <div>
          <h2 className="text-[10px] font-mono tracking-[0.3em] text-blue-400 mb-4 uppercase">Selected Works</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Cinematic Intelligence</h3>
        </div>
        <div className="hidden md:flex gap-4">
          <button onClick={prev} className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button onClick={next} className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 h-[400px] md:h-[600px] perspective-1000">
        <AnimatePresence mode="wait">
          {!selectedProject && (
            <motion.div
              layoutId={`project-container-${current.id}`}
              key={current.id}
              initial={{ opacity: 0, x: 100, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: 10 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 px-6 cursor-pointer group"
              onClick={() => setSelectedProject(current.id)}
            >
              <div className="w-full h-full glass rounded-[2rem] overflow-hidden relative border-white/10 group-hover:border-blue-500/50 transition-colors duration-500 shadow-2xl shadow-blue-500/5">
                <motion.div layoutId={`project-image-${current.id}`} className="absolute inset-0 z-0">
                  <img src={current.image} alt={current.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 mix-blend-luminosity hover:mix-blend-normal" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </motion.div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10 flex flex-col items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <motion.div layoutId={`project-tech-${current.id}`} className="flex flex-wrap gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {current.tech.map(t => (
                      <span key={t} className="px-3 py-1 glass rounded-full text-[9px] font-mono tracking-widest uppercase text-blue-200">
                        {t}
                      </span>
                    ))}
                  </motion.div>
                  <motion.h4 layoutId={`project-title-${current.id}`} className="text-3xl md:text-6xl font-serif text-white mb-2">{current.title}</motion.h4>
                  <motion.p layoutId={`project-subtitle-${current.id}`} className="text-lg md:text-xl text-gray-300 font-light max-w-2xl">{current.subtitle}</motion.p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="md:hidden flex justify-center gap-4 mt-8">
        <button onClick={prev} className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <button onClick={next} className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* EXPANDED PROJECT VIEW */}
      <AnimatePresence>
        {activeProj && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
          >
            <motion.div 
              layoutId={`project-container-${activeProj.id}`}
              className="w-full max-w-6xl h-[90vh] md:h-[80vh] glass rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row relative shadow-[0_0_50px_rgba(59,130,246,0.1)] border-blue-500/20"
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(null);
                }}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] glass w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div layoutId={`project-image-${activeProj.id}`} className="w-full lg:w-1/2 h-[30vh] lg:h-full relative shrink-0">
                <img src={activeProj.image} alt={activeProj.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 lg:from-transparent to-transparent lg:to-[#050505] via-[#050505]/0 lg:via-[#050505]/80 pointer-events-none"></div>
              </motion.div>

              <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto custom-scrollbar relative z-10 bg-[#050505]/60 lg:bg-transparent">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <motion.div layoutId={`project-tech-${activeProj.id}`} className="flex flex-wrap gap-2 mb-6">
                    {activeProj.tech.map(t => (
                      <span key={t} className="px-3 py-1 glass rounded-full text-[9px] font-mono tracking-widest uppercase text-blue-200">
                        {t}
                      </span>
                    ))}
                  </motion.div>
                  
                  <motion.h4 layoutId={`project-title-${activeProj.id}`} className="text-3xl md:text-5xl font-serif text-white mb-2">{activeProj.title}</motion.h4>
                  <motion.p layoutId={`project-subtitle-${activeProj.id}`} className="text-lg md:text-xl text-blue-400 font-light mb-8">{activeProj.subtitle}</motion.p>
                  
                  <div className="space-y-6 text-gray-300 font-light leading-relaxed text-sm md:text-base">
                    <p>{activeProj.desc}</p>
                    <div className="h-[1px] w-full bg-white/10 my-8"></div>
                    <h5 className="font-mono text-[10px] tracking-widest uppercase text-white mb-4">Architecture & Implementation</h5>
                    <p className="text-gray-400">{activeProj.details}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-12 pb-8">
                    <button className="px-6 py-4 glass rounded-full text-white text-[10px] md:text-xs tracking-widest font-mono uppercase flex items-center justify-center gap-3 hover:bg-white/10 transition-colors group">
                      Live Preview <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="px-6 py-4 glass rounded-full text-white text-[10px] md:text-xs tracking-widest font-mono uppercase flex items-center justify-center gap-3 hover:bg-white/10 transition-colors group">
                      Repository <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
