import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

// ── Inline WishlistCard (remove button layered over image) ──────────────────
function WishlistCard({
  product,
  index,
  onRemove,
}: {
  product: { id: string; name: string; description: string; price: number; category: string; image: string; isBestSeller?: boolean };
  index: number;
  onRemove: (id: string) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Best-seller badge */}
      {product.isBestSeller && (
        <span className="absolute top-3 left-3 z-10 text-xs font-medium bg-forest text-ivory px-3 py-1 rounded-full">
          Best Seller
        </span>
      )}

      {/* Remove button */}
      <button
        onClick={() => onRemove(product.id)}
        aria-label={`Remove ${product.name} from wishlist`}
        className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-rose-500 hover:bg-rose-50 hover:text-rose-600 transition-colors shadow-sm"
      >
        {/* Filled heart → click removes */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </button>

      {/* Product image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-2">
        <span className="text-xs text-forest/50 uppercase tracking-widest font-medium">
          {product.category}
        </span>
        <h3 className="font-serif text-lg text-forest leading-snug">{product.name}</h3>
        <p className="text-sm text-forest/60 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="font-semibold text-forest text-base">${product.price}</span>
          <button className="text-sm px-4 py-2 bg-forest text-ivory rounded-full hover:bg-forest/90 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ── Empty state ─────────────────────────────────────────────────────────────
function EmptyWishlist() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <div className="text-forest/25 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </div>
      <h3 className="font-serif text-2xl text-forest mb-3">Your wishlist is empty</h3>
      <p className="text-forest/60 max-w-xs mb-8 text-sm leading-relaxed">
        Explore our collection and save your favourite bouquets to revisit later.
      </p>
      <Link
        to="/shop"
        className="px-8 py-3 bg-forest text-ivory rounded-full hover:bg-forest/90 transition-colors text-sm font-medium"
      >
        Discover Bouquets
      </Link>
    </motion.div>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────
export default function Wishlist() {
  const { wishlistIds, removeFromWishlist } = useWishlist();

  const wishlistedProducts = products.filter(p => wishlistIds.includes(p.id));
  const isEmpty = wishlistIds.length === 0;

  return (
    <div className="pt-24 pb-16 px-6 min-h-[80vh] flex flex-col bg-ivory">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header row with count badge */}
        <div className="flex items-start justify-between mb-2 flex-wrap gap-3">
          <SectionHeader
            title="Your Wishlist"
            subtitle={isEmpty ? 'Saved for later' : `${wishlistedProducts.length} item${wishlistedProducts.length !== 1 ? 's' : ''} saved`}
            align="center"
          />
        </div>

        {/* Content */}
        {isEmpty ? (
          <EmptyWishlist />
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
          >
            <AnimatePresence mode="popLayout">
              {wishlistedProducts.map((product, index) => (
                <WishlistCard
                  key={product.id}
                  product={product}
                  index={index}
                  onRemove={removeFromWishlist}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* "Continue shopping" link when list is not empty */}
        {!isEmpty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              to="/shop"
              className="text-sm text-forest/60 hover:text-forest underline underline-offset-4 transition-colors"
            >
              ← Continue shopping
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
