import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Package, Truck, CheckCircle2, Store, ArrowLeft, Clock } from 'lucide-react';
import { Product } from '../types';

interface Order {
  orderId: string;
  date: string;
  product: Product;
  quantity: number;
  total: number;
}

const STAGES = [
  { id: 'placed', label: 'Order Placed', icon: Clock },
  { id: 'preparing', label: 'Studio Preparation', icon: Store },
  { id: 'transit', label: 'Out for Delivery', icon: Truck },
  { id: 'delivered', label: 'Delivered', icon: CheckCircle2 }
];

export default function OrderStatus() {
  const { orderId } = useParams();
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  useEffect(() => {
    const historyJson = localStorage.getItem('orderHistory');
    if (historyJson) {
      const allOrders: Order[] = JSON.parse(historyJson);
      const matchingOrders = allOrders.filter(o => o.orderId === orderId);
      setOrders(matchingOrders);

      if (matchingOrders.length > 0) {
        const orderDate = new Date(matchingOrders[0].date).getTime();
        
        const updateStatus = () => {
          const now = Date.now();
          const elapsed = (now - orderDate) / 1000; // in seconds

          if (elapsed < 5) setCurrentStageIndex(0);
          else if (elapsed < 15) setCurrentStageIndex(1);
          else if (elapsed < 30) setCurrentStageIndex(2);
          else setCurrentStageIndex(3);
        };

        updateStatus();
        const interval = setInterval(updateStatus, 1000);
        return () => clearInterval(interval);
      }
    }
  }, [orderId]);

  if (orders.length === 0) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-[70vh] flex flex-col items-center justify-center">
        <Package className="w-16 h-16 text-beige mb-4" />
        <h2 className="font-serif text-2xl text-forest mb-4">Order not found</h2>
        <Link to="/history" className="text-forest underline underline-offset-4">
          Return to Order History
        </Link>
      </div>
    );
  }

  const orderDate = new Date(orders[0].date);
  const total = orders.reduce((sum, o) => sum + o.total, 0);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <Link 
        to="/history" 
        className="inline-flex items-center gap-2 text-brown/70 hover:text-forest transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Order History
      </Link>

      <div className="mb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-forest mb-2">
          Tracking Order #{orderId}
        </h1>
        <p className="text-brown/70">
          Placed on {orderDate.toLocaleDateString()} at {orderDate.toLocaleTimeString()}
        </p>
      </div>

      {/* Tracking Tracker */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 mb-12">
        <div className="relative">
          {/* Progress Bar Background */}
          <div className="absolute top-6 left-6 right-6 h-1 bg-black/5 rounded-full" />
          
          {/* Progress Bar Fill */}
          <motion.div 
            className="absolute top-6 left-6 h-1 bg-forest rounded-full"
            initial={{ width: '0%' }}
            animate={{ 
              width: `${(currentStageIndex / (STAGES.length - 1)) * 100}%`,
              // Adjust width visually so it doesn't overshoot the container
              right: currentStageIndex === STAGES.length - 1 ? '1.5rem' : 'auto'
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          <div className="relative flex justify-between">
            {STAGES.map((stage, index) => {
              const Icon = stage.icon;
              const isCompleted = index <= currentStageIndex;
              const isCurrent = index === currentStageIndex;

              return (
                <div key={stage.id} className="flex flex-col items-center gap-4 relative z-10 w-1/4">
                  <motion.div
                    animate={{
                      backgroundColor: isCompleted ? '#2C4C3B' : '#FFFFFF', // forest or white
                      borderColor: isCompleted ? '#2C4C3B' : '#E5E7EB',
                      color: isCompleted ? '#FDFBF7' : '#9CA3AF' // ivory or gray
                    }}
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors duration-500"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <div className="text-center">
                    <p className={`font-medium text-sm ${isCompleted ? 'text-forest' : 'text-gray-400'}`}>
                      {stage.label}
                    </p>
                    {isCurrent && (
                      <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="text-xs text-[#FF9900] font-medium mt-1"
                      >
                        In Progress
                      </motion.p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Order Details */}
      <h2 className="font-serif text-2xl text-forest mb-6">Order Details</h2>
      <div className="bg-white rounded-3xl shadow-sm border border-black/5 overflow-hidden">
        <div className="p-8">
          <div className="space-y-6">
            {orders.map((order, index) => (
              <div key={index} className="flex gap-6 items-center">
                <div className="w-20 h-20 bg-stone-100 rounded-xl overflow-hidden shrink-0">
                  <img src={order.product.image} alt={order.product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-forest">{order.product.name}</h3>
                  <p className="text-sm text-brown/60">Qty: {order.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-forest">${order.total.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black/5 p-8 flex justify-between items-center border-t border-black/5">
          <span className="font-serif text-xl text-forest">Total</span>
          <span className="font-serif text-2xl text-forest">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
