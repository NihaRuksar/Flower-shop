import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeader({ title, subtitle, align = 'center', className = '' }: SectionHeaderProps) {
  const alignment = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignment[align]} mb-10 ${className}`}
    >
      {subtitle && (
        <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-sage mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-4xl md:text-5xl text-forest text-balance max-w-2xl">
        {title}
      </h2>
    </motion.div>
  );
}
