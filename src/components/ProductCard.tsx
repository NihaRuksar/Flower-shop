import { useState, MouseEvent, Key } from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { ShoppingBag, Plus, Minus, Check, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  index: number;
  key?: Key;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [added, setAdded] = useState(false);
  const isWishlisted = isInWishlist(product.id);

  const handleAdd = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuantity(1);
    }, 1500);
  };

  const handleWishlistClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-forest/10 transition-shadow duration-500 overflow-hidden border border-beige/40"
    >
      <div 
        className="relative overflow-hidden bg-stone-100 aspect-[4/5]"
        onMouseLeave={() => setQuantity(1)}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.isBestSeller && (
          <div className="absolute top-0 left-0 bg-white/95 backdrop-blur-sm text-forest text-[10px] font-mono tracking-widest uppercase px-4 py-2 z-10 rounded-br-2xl rounded-tl-2xl whitespace-nowrap shadow-sm">
            Best Seller
          </div>
        )}

        {/* Wishlist Button */}
        <div className="absolute top-3 right-3 z-30">
          <button 
            onClick={handleWishlistClick}
            className={`p-2 rounded-full cursor-pointer backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-110 ${
              isWishlisted 
                ? 'bg-rose-50/90 text-rose-500 hover:bg-rose-100' 
                : 'bg-white/80 text-forest/70 hover:bg-white hover:text-rose-500'
            }`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart 
              className="w-4 h-4 transition-all duration-300" 
              fill={isWishlisted ? "currentColor" : "none"} 
            />
          </button>
        </div>
        
        {/* Hover overlay with Quick Add */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-20 items-center">
          <div className="w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-2">
            <div className="flex bg-white/95 backdrop-blur-sm shadow-sm rounded overflow-hidden">
               <button 
                 onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQuantity(Math.max(1, quantity - 1)) }}
                 className="flex-1 py-2 flex justify-center items-center text-forest hover:bg-forest/5 transition-colors"
                 aria-label="Decrease quantity"
               >
                 <Minus className="w-4 h-4" />
               </button>
               <div className="flex-1 py-2 flex justify-center items-center font-medium text-forest border-x border-beige/30 text-sm">
                 {quantity}
               </div>
               <button 
                 onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQuantity(quantity + 1) }}
                 className="flex-1 py-2 flex justify-center items-center text-forest hover:bg-forest/5 transition-colors"
                 aria-label="Increase quantity"
               >
                 <Plus className="w-4 h-4" />
               </button>
            </div>
            
            <button 
              onClick={handleAdd}
              className={`w-full font-medium py-2.5 text-xs uppercase tracking-wide flex items-center justify-center gap-2 transition-colors shadow-sm rounded ${added ? 'bg-sage text-ivory' : 'bg-forest text-ivory hover:bg-forest/90'}`}
            >
              {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />} 
              {added ? 'Added to Cart' : 'Quick Add'}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl text-forest">{product.name}</h3>
          <span className="font-medium text-forest">${product.price}</span>
        </div>
        <p className="text-sm text-brown/70 leading-relaxed mb-4 flex-1">{product.description}</p>
        <span className="text-xs uppercase tracking-widest text-mauve font-medium">
          {product.category}
        </span>
      </div>
    </motion.div>
  );
}
