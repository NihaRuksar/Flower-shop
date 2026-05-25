import { motion } from 'motion/react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020202]">
      {/* Ambient glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/20 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-900/20 rounded-full blur-[150px]"
      />
    </div>
  );
}
