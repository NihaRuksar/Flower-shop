import { motion } from 'motion/react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

export default function Wishlist() {
  const { wishlistIds } = useWishlist();

  const wishlistedProducts = products.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="pt-24 pb-16 px-6 min-h-[80vh] flex flex-col bg-ivory">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader title="Your Wishlist" subtitle="Saved for later" align="center" />
        
        {wishlistIds.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="text-forest/30 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-forest mb-4">Your wishlist is empty</h3>
            <p className="text-forest/70 max-w-sm mb-8">
              Explore our collection and save your favorite bouquets for later.
            </p>
            <Link 
              to="/shop" 
              className="px-8 py-3 bg-forest text-ivory rounded-full hover:bg-forest/90 transition-colors"
            >
              Discover Bouquets
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
