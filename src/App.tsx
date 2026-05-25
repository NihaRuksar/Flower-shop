import { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import OrderHistory from './pages/OrderHistory';
import Wishlist from './pages/Wishlist';

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full relative">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-grow w-full relative z-10"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/shop" element={<MainLayout><Shop /></MainLayout>} />
        <Route path="/wishlist" element={<MainLayout><Wishlist /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/history" element={<MainLayout><OrderHistory /></MainLayout>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <AnimatedRoutes />
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

