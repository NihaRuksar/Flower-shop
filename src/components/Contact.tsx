import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <section id="contact" ref={ref} className="w-full max-w-5xl mx-auto min-h-screen flex items-center justify-center px-6 py-24 relative z-10 overflow-hidden">
      <motion.div style={{ y, opacity }} className="w-full flex flex-col items-center">
        
        <div className="glass w-full p-8 md:p-16 lg:p-20 rounded-[2.5rem] md:rounded-[3rem] border-white/5 relative overflow-hidden">
          <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="text-center mb-12 md:mb-16 relative z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">Initiate <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 glow-text">Sequence</span>.</h2>
            <p className="text-base md:text-xl text-gray-400 font-light max-w-lg mx-auto leading-relaxed">
              Ready to construct the next generation of intelligent systems? Open a communication channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 relative z-10">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono tracking-widest text-blue-400 uppercase">Identity</label>
                <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors focus:ring-1 focus:ring-blue-500/50" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono tracking-widest text-blue-400 uppercase">Frequency (Email)</label>
                <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors focus:ring-1 focus:ring-blue-500/50" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono tracking-widest text-blue-400 uppercase">Transmission</label>
                <textarea rows={4} className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors focus:ring-1 focus:ring-blue-500/50 resize-none custom-scrollbar" placeholder="Enter message parameters..." />
              </div>
              <button className="glass py-4 rounded-xl text-white font-mono text-[10px] md:text-xs tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center justify-center gap-3 group mt-2 border-blue-500/30 hover:border-blue-400 focus:outline-none">
                Transmit <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>

            <div className="flex flex-col justify-between pt-4 md:pt-0">
              <div>
                <h4 className="font-mono text-[10px] tracking-[0.2em] text-gray-500 mb-4 uppercase">Direct Uplink</h4>
                <a href="mailto:hello@example.com" className="text-xl md:text-2xl text-white hover:text-blue-300 transition-colors block mb-12">
                  sysadmin@nexus.ai
                </a>
              </div>
              
              <div>
                <h4 className="font-mono text-[10px] tracking-[0.2em] text-gray-500 mb-4 uppercase">Network Nodes</h4>
                <div className="flex gap-4">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="glass w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white hover:text-blue-300 hover:border-blue-500/50 transition-all hover:scale-110">
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 text-center pb-8">
          <p className="text-[9px] md:text-[10px] font-mono tracking-[0.2em] text-gray-600 uppercase">
            © 2026 AI ARCHITECT. DESIGNED FOR THE FUTURE.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
