import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  return (
    <div className="w-full bg-ivory min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl text-forest mb-8 leading-tight">
              Rooted in Passion.<br />
              <span className="italic font-light">Blooming with Love.</span>
            </h1>
            <p className="text-xl text-brown/80 font-light leading-relaxed max-w-2xl mx-auto">
              Bloom & Petal is a boutique floral studio based in San Luis Obispo, dedicated to crafting emotive arrangements that celebrate life's most precious moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image & Text Split */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[600px] rounded-t-full overflow-hidden shadow-2xl relative"
          >
            <img 
              src="https://media.istockphoto.com/id/1353492073/photo/flowers-all-around.jpg?s=612x612&w=0&k=20&c=QO8vUPQ9_U9E4kj8I53ocErh7UkHyOTRR32VqoK1yWo=" 
              alt="Florist arranging flowers" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-sage">Our Philosophy</span>
            <h2 className="font-serif text-4xl text-forest">More than just flowers.</h2>
            <div className="space-y-6 text-brown/80 font-light text-lg leading-relaxed">
              <p>
                Founded in 2021, we started with a simple belief: flowers have a unique language. They speak when words fall short, bringing warmth to a home and comfort to a heart.
              </p>
              <p>
                We source our materials meticulously, partnering with local California flower farms that practice sustainable agriculture. This ensures every stem we use is not only breathtakingly fresh but also environmentally responsible.
              </p>
              <p>
                From intimate weddings to "just because" bouquets, our team of artisan florists pours dedication and creativity into every wrap, vase, and basket that leaves our studio.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-beige/40">
              <div>
                <h4 className="font-serif text-2xl text-forest mb-2">Sustainable</h4>
                <p className="text-sm text-brown/70">Eco-friendly packaging and foam-free mechanics.</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-forest mb-2">Local</h4>
                <p className="text-sm text-brown/70">Supporting SLO County growers.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flower Care Guide */}
      <section className="py-24 px-6 bg-beige/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Flower Care Guide" subtitle="Keep them blooming" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
            {[
              {
                icon: "💧",
                title: "Fresh Water",
                description: "Change the water every 2 days, and ensure your vase is perfectly clean to prevent bacteria."
              },
              {
                icon: "✂️",
                title: "Snip the Stems",
                description: "Trim about an inch off the stems at a 45-degree angle before placing them in water."
              },
              {
                icon: "☀️",
                title: "Cool & Shaded",
                description: "Keep your arrangement away from direct sunlight, heating vents, and ripening fruit."
              },
              {
                icon: "🌿",
                title: "Remove Foliage",
                description: "Ensure no leaves are submerged in the water, as they will rot and shorten the vase life."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm text-center flex flex-col items-center"
              >
                <div className="text-4xl mb-6 bg-ivory w-20 h-20 rounded-full flex items-center justify-center border border-beige/20 shadow-sm shadow-mauve/5">
                  {step.icon}
                </div>
                <h4 className="font-serif text-xl text-forest mb-4">{step.title}</h4>
                <p className="text-brown/70 font-light text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Banner */}
      <section className="py-24 px-6 bg-forest text-ivory text-center mt-12">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Our Commitment to You" className="text-ivory" subtitle="The experience" />
          <p className="text-beige/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            We promise uncompromising quality, personalized service, and designs that feel organic, lush, and undeniably elegant. Your satisfaction is the soil in which our business grows.
          </p>
        </div>
      </section>

    </div>
  );
}
