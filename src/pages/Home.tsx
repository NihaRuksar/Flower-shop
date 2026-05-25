import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import { CATEGORIES } from '../types';

export default function Home() {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 3);
  
  return (
    <div className="w-full">
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] bg-ivory flex items-center overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/80 to-transparent z-10 md:w-3/5"></div>
        
        {/* Floating floral background elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-10 w-64 h-64 bg-blush/30 rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 -right-10 w-96 h-96 bg-sage/20 rounded-full blur-[100px]"
        />

        {/* Hero split composition */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between">
          
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full pt-20 md:pt-0 pr-0 md:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-forest/70 mb-6">Bloom & Petal Studio</h4>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest leading-[1.1] mb-6 whitespace-pre-line">
                Fresh Flowers,<br/>
                <span className="italic font-light">Thoughtfully Designed</span>
              </h1>
              <p className="text-lg text-brown/80 max-w-md font-light leading-relaxed mb-10 text-balance">
                Handcrafted bouquets and elegant floral arrangements tailored for every memorable moment in San Luis Obispo.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/shop" className="bg-forest text-ivory px-8 py-4 rounded-full font-medium tracking-wide hover:bg-forest/90 transition-colors shadow-lg shadow-forest/20 flex items-center gap-3">
                  Shop Flowers <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="border border-forest/20 text-forest px-8 py-4 rounded-full font-medium tracking-wide hover:bg-forest/5 transition-colors">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right side floating image container */}
          <div className="hidden md:flex w-full md:w-1/2 h-[50vh] md:h-[75vh] mt-10 md:mt-0 relative justify-end items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full h-full max-w-lg rounded-t-full rounded-b-[4rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://www.mercidehradun.com/cdn/shop/products/MerciJuly2022-7046_2_1024x.jpg?v=1665294291" 
                alt="Elegant bouquet in vase" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent"></div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="py-10 md:py-24 px-6 bg-beige/20 text-center">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Shop By Occasion" subtitle="Find the perfect arrangement" className="mb-6 md:mb-12" />
          
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto mt-4 md:mt-8">
            {CATEGORIES.filter(c => c !== 'All').map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to="/shop" className="px-6 py-3 bg-white border border-beige/50 rounded-full text-forest font-medium hover:border-mauve hover:text-mauve transition-all hover:-translate-y-1 block shadow-sm text-sm">
                  {cat}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Preview */}
      <section className="py-10 md:py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 md:gap-6">
            <SectionHeader title="Beloved Bouquets" subtitle="Our signature collections" align="left" className="mb-0" />
            <Link to="/shop" className="text-forest hover:text-mauve transition-colors flex items-center gap-2 font-medium pb-1 border-b-2 border-transparent hover:border-mauve group">
              View All Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {bestSellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Story / Why Us */}
      <section className="py-10 md:py-24 px-6 bg-forest text-ivory relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1546842931-886c185b4c8c?q=80&w=1200')] bg-cover opacity-10 mix-blend-overlay"
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-blush mb-4 md:mb-6 block">The Bloom & Petal Difference</span>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6 md:mb-8">Artistry blooming in every petal.</h2>
              <p className="text-beige/80 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-lg">
                We believe in the power of flowers to transform spaces and elevate emotions. Our boutique sources directly from local sustainable farms to offer you vibrant, long-lasting blooms crafted with absolute dedication.
              </p>
              <Link to="/about" className="inline-flex items-center gap-3 text-ivory font-medium pb-1 md:pb-2 border-b border-ivory/30 hover:border-ivory transition-colors">
                Discover Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4 h-[280px] md:h-[320px] max-w-md mx-auto md:ml-auto md:mr-0">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full h-full"
              >
                <img src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800" className="w-full h-full object-cover rounded-2xl shadow-lg" alt="Florist working" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full h-full mt-8"
              >
                <img src="https://images.unsplash.com/photo-1586973699006-2a096c90f847?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover rounded-2xl shadow-lg" alt="Fresh tulips" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-10 md:py-24 px-6 bg-blush/20 flex justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl bg-white p-12 md:p-16 rounded-[2rem] shadow-xl shadow-mauve/5"
        >
          <h2 className="font-serif text-4xl text-forest mb-4">Let's craft something special.</h2>
          <p className="text-brown/70 mb-8 font-light">Custom arrangements for weddings, events, or that specific someone.</p>
          <Link to="/contact" className="bg-forest text-ivory px-10 py-4 rounded-full font-medium tracking-wide hover:bg-forest/90 transition-colors inline-block shadow-lg shadow-forest/20">
            Get in Touch
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
