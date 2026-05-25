import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} className="w-full max-w-5xl mx-auto min-h-screen flex items-center px-6 py-24 relative z-10">
      <motion.div style={{ y: y1, opacity }} className="glass p-8 md:p-16 lg:p-20 rounded-[2.5rem] md:rounded-[3rem] text-center w-full relative overflow-hidden border-white/5">
        <div className="absolute top-[-50%] left-[-10%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
        
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 italic font-light leading-tight">
          Redefining the <span className="font-medium not-italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">intersection</span> of<br className="hidden md:block" /> design and logic.
        </h2>
        
        <p className="text-base md:text-xl font-light leading-relaxed text-gray-400 max-w-2xl mx-auto space-y-6">
          <span className="block mb-6">I am an architect of digital cognition, building systems that not only solve complex problems but do so with <span className="text-white font-medium">uncompromising elegance</span>.</span>
          <span className="block">My expertise lies in integrating Large Language Models, generative networks, and scalable architectures into seamless luxury interfaces. The future is not just smart; it is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 glow-text">beautifully intelligent</span>.</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mt-16 pt-16 border-t border-white/5">
          {[
            { label: 'MODELS TRAINED', value: '14+' },
            { label: 'SYSTEMS SCALED', value: '30M+' },
            { label: 'YEARS EXP.', value: '7' },
            { label: 'AWARDS', value: '4' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-serif text-white mb-2">{stat.value}</div>
              <div className="text-[9px] md:text-[10px] uppercase font-mono tracking-[0.2em] text-blue-400/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
