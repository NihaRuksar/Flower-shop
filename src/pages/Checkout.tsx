import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + tax + shipping;

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      // Create orders for history
      const historyJson = localStorage.getItem('orderHistory');
      let history = historyJson ? JSON.parse(historyJson) : [];
      const date = new Date().toISOString();
      const orderId = Math.random().toString(36).substring(2, 10).toUpperCase();
      
      const newOrders = cart.map(item => ({
        orderId,
        date,
        product: item.product,
        quantity: item.quantity,
        total: item.product.price * item.quantity
      }));
      
      localStorage.setItem('orderHistory', JSON.stringify([...newOrders, ...history]));

      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
      setTimeout(() => {
        navigate('/history');
      }, 3000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="pt-24 min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 20 }}
          className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <h1 className="font-serif text-3xl text-forest mb-4">Payment Successful!</h1>
        <p className="text-brown max-w-md">
          Thank you for your order. We're processing it now and will send you an email confirmation shortly.
        </p>
        <p className="text-brown/70 mt-4 text-sm">Redirecting to your order history...</p>
      </div>
    );
  }

  if (cart.length === 0 && !isProcessing) {
    return (
      <div className="pt-24 min-h-[70vh] flex flex-col items-center justify-center p-6">
        <h1 className="font-serif text-2xl text-forest mb-4">Your cart is empty</h1>
        <button 
          onClick={() => navigate('/shop')}
          className="px-6 py-3 bg-forest text-ivory rounded-full hover:bg-forest/90 transition-colors"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
      <h1 className="font-serif text-3xl md:text-4xl text-forest mb-12">Confirm Payment</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Address */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-5 h-5 text-forest" />
              <h2 className="font-serif text-xl text-forest">Shipping Address</h2>
            </div>
            <div className="text-brown/80 space-y-1 text-sm">
              <p className="font-medium text-brown">Jane Doe</p>
              <p>123 Floral Lane</p>
              <p>Apt 4B</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-5 h-5 text-forest" />
              <h2 className="font-serif text-xl text-forest">Payment Method</h2>
            </div>
            <div className="flex items-center justify-between p-4 border border-black/10 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-600">
                  VISA
                </div>
                <div className="text-sm">
                  <p className="font-medium text-forest">Visa ending in 4242</p>
                  <p className="text-brown/60">Exp: 12/26</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full border-4 border-forest bg-white"></div>
            </div>
          </section>
          
          {/* Review Items */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-black/5">
            <h2 className="font-serif text-xl text-forest mb-4">Review Items</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-black/5">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-forest">{item.product.name}</h3>
                    <p className="text-brown/60 text-sm">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-forest">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 sticky top-24">
            <h2 className="font-serif text-xl text-forest mb-6">Order Summary</h2>
            
            <div className="space-y-4 text-sm text-brown mb-6 pb-6 border-b border-black/10">
              <div className="flex justify-between">
                <span>Items ({cart.length})</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between font-serif text-xl text-forest mb-8">
              <span>Order Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full py-4 bg-[#FF9900] text-black rounded-full font-medium hover:bg-[#FF9900]/90 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing...' : 'Place your order'}
            </button>
            
            <div className="mt-6 flex items-start gap-3 text-xs text-brown/60">
              <ShieldCheck className="w-5 h-5 flex-shrink-0 text-green-600" />
              <p>Safe and secure checkout. By placing your order, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
