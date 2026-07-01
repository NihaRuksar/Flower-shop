import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Package, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { Product } from '../types';

interface Order {
  orderId: string;
  date: string;
  product: Product;
  quantity: number;
  total: number;
}

export default function OrderHistory() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const historyJson = localStorage.getItem('orderHistory');
    if (historyJson) {
      setOrders(JSON.parse(historyJson));
    }
  }, []);

  return (
    <div className="w-full pt-32 pb-24 px-6 bg-ivory min-h-screen">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="Order History" 
          subtitle="Your past blooms" 
        />

        {orders.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-beige/30">
            <Package className="w-12 h-12 text-beige mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-forest mb-2">No past orders yet.</h3>
            <p className="text-brown/70">When you add items, they will appear here as simulated purchases.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, index) => (
              <motion.div 
                key={`${order.orderId}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-beige/30 flex flex-col md:flex-row gap-8 items-center md:items-start"
              >
                <div className="w-full md:w-32 h-40 bg-stone-100 rounded-lg overflow-hidden shrink-0">
                  <img src={order.product.image} alt={order.product.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:justify-between mb-4 md:mb-2 gap-2">
                    <h3 className="font-serif text-2xl text-forest">{order.product.name}</h3>
                    <span className="font-medium text-forest">${order.total.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-xs tracking-wide uppercase text-brown/70 font-medium mb-6">
                    <span className="flex items-center gap-1.5 bg-ivory px-3 py-1.5 rounded-full"><Tag className="w-3.5 h-3.5" /> Qty: {order.quantity}</span>
                    <span className="flex items-center gap-1.5 bg-ivory px-3 py-1.5 rounded-full"><Package className="w-3.5 h-3.5" /> Order #{order.orderId}</span>
                    <span className="flex items-center gap-1.5 bg-ivory px-3 py-1.5 rounded-full"><Calendar className="w-3.5 h-3.5" /> {new Date(order.date).toLocaleDateString()}</span>
                  </div>
                  
                  <p className="text-sm text-brown/80 leading-relaxed max-w-xl mb-6">
                    {order.product.description}
                  </p>

                  <Link 
                    to={`/track/${order.orderId}`}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-forest text-ivory rounded-full text-sm font-medium hover:bg-forest/90 transition-colors"
                  >
                    Track Order
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
