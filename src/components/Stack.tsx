import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const TECH_STACK = [
  'PyTorch', 'TensorFlow', 'CUDA', 'Python', 'TypeScript', 'React', 'Next.js', 'Framer Motion', 'WebGL', 'Three.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'GCP'
];

export default function Stack() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section id="stack" ref={containerRef} className="w-full py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="text-center mb-16 md:mb-20 relative z-10">
        <h2 className="text-[10px] font-mono tracking-[0.3em] text-blue-400 mb-4 uppercase">Technology Arsenal</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-white">The Neural Fabric</h3>
      </div>

      <div className="w-full flex flex-col gap-4 md:gap-6 relative z-10">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>

        <motion.div style={{ x: x1 }} className="flex gap-4 md:gap-6 whitespace-nowrap px-10">
          {[...TECH_STACK, ...TECH_STACK].slice(0, 15).map((tech, i) => (
            <div key={i} className="glass px-6 md:px-8 py-4 md:py-6 rounded-2xl flex items-center justify-center text-lg md:text-xl font-light text-gray-400 hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-default">
              {tech}
            </div>
          ))}
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="flex gap-4 md:gap-6 whitespace-nowrap px-10">
          {[...TECH_STACK, ...TECH_STACK].slice(8, 24).map((tech, i) => (
            <div key={i} className="glass px-6 md:px-8 py-4 md:py-6 rounded-2xl flex items-center justify-center text-lg md:text-xl font-light text-gray-400 hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-default">
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
