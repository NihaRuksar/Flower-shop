import React from 'react';

export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      {subtitle && <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-40 mb-3 text-charcoal">{subtitle}</p>}
      <h2 className="text-4xl md:text-5xl font-serif text-charcoal">{title}</h2>
    </div>
  );
}
