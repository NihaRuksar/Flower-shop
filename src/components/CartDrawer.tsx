import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  const handleCheckout = () => {
    // Navigate to checkout or just close and simulate
    closeCart();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-black/10">
              <h2 className="font-serif text-2xl text-forest">Your Cart</h2>
              <button 
                onClick={closeCart}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-brown" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-brown/60 gap-4">
                  <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center">
                    <X className="w-8 h-8" />
                  </div>
                  <p className="text-lg">Your cart is empty.</p>
                  <button 
                    onClick={closeCart}
                    className="mt-4 text-forest font-medium hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-black/5">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-serif text-forest text-lg">{item.product.name}</h3>
                            <p className="text-brown/70 text-sm">{item.product.category}</p>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-1 text-brown/50 hover:text-rose-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-black/10 rounded-full">
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-2 text-brown hover:bg-black/5 rounded-l-full transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-2 text-brown hover:bg-black/5 rounded-r-full transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-medium text-forest">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-black/10">
                <div className="flex justify-between mb-4 text-brown">
                  <span>Subtotal</span>
                  <span className="font-medium text-forest">${subtotal.toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full py-4 bg-forest text-ivory rounded-full font-medium hover:bg-forest/90 transition-colors"
                >
                  Proceed to Buy
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
