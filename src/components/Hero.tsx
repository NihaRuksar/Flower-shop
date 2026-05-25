import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="w-full max-w-7xl mx-auto min-h-screen flex items-center px-6 pt-24 md:pt-0 pb-16">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start space-y-6 lg:pr-8"
        >
          <motion.div variants={itemVariants} className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 font-mono text-[10px] tracking-[0.2em] uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></span>
            AI Architect & Engineer
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[5rem] font-serif font-medium leading-[1.1] text-white">
            Shaping the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 glow-text italic pr-4">Intelligence</span><br />
            of Tomorrow
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-400 font-light max-w-md leading-relaxed border-l border-white/10 pl-6">
            I craft luxury digital experiences powered by state-of-the-art artificial intelligence, bridging the gap between high-end design and complex neural networks.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-6">
            <button className="glass px-8 py-4 rounded-full text-white text-sm tracking-widest font-mono uppercase flex items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300 group border-blue-500/20 hover:border-blue-400/50">
              Explore Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full text-gray-400 hover:text-white transition-colors relative group font-mono tracking-widest text-[10px] uppercase">
              Init Contact
              <span className="absolute bottom-3 left-8 right-8 h-[1px] bg-blue-400/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[400px] md:h-[500px] lg:h-[700px] w-full flex justify-center lg:justify-end"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 rounded-full blur-[120px] z-0 pointer-events-none"></div>
          
          <div className="glass relative z-10 w-full max-w-[360px] lg:max-w-md h-full rounded-[2rem] overflow-hidden p-2 glow-box border-white/10 hover:border-blue-500/30 transition-colors duration-500 group">
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-[#050505]">
              <img 
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea378?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Abstract AI concept" 
                className="w-full h-full object-cover opacity-60 mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#020202]/50 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl flex items-center justify-between border-white/5 bg-black/20 backdrop-blur-md">
                <div>
                  <div className="text-[9px] font-mono tracking-widest text-blue-300 mb-1">STATUS</div>
                  <div className="text-[11px] font-mono text-white tracking-widest">SYSTEM ONLINE</div>
                </div>
                <div className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
