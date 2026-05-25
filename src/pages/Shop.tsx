import { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import { CATEGORIES } from '../types';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="w-full pt-32 pb-24 px-6 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <SectionHeader 
          title="The Floral Collection" 
          subtitle="handcrafted with love" 
        />

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-forest text-ivory shadow-md'
                  : 'bg-white text-brown/70 border border-beige/50 hover:border-forest/30 hover:text-forest'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-brown/60">
            No products found in this category.
          </div>
        )}

      </div>
    </div>
  );
}
