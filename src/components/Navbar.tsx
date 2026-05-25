import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag, History, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => setMobileMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ivory/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brown hover:text-mauve transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Links (Left) */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          {LINKS.slice(0, 2).map(link => (
            <NavLink 
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium tracking-wide uppercase transition-colors relative group ${isActive ? 'text-forest' : 'text-brown/70 hover:text-forest'}`
              }
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-forest transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Logo */}
        <NavLink to="/" className="font-serif text-2xl md:text-3xl text-forest text-center flex-1 md:flex-none tracking-tight">
          Bloom & Petal
        </NavLink>

        {/* Desktop Links (Right) */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          {LINKS.slice(2).map(link => (
            <NavLink 
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium tracking-wide uppercase transition-colors relative group ${isActive ? 'text-forest' : 'text-brown/70 hover:text-forest'}`
              }
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-forest transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
          <NavLink to="/history" className="text-brown hover:text-mauve transition-colors flex items-center gap-2" title="Order History">
            <History className="w-5 h-5" />
          </NavLink>
          <NavLink to="/wishlist" className="relative text-brown hover:text-mauve transition-colors flex items-center gap-2" title="Wishlist">
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-rose-400 text-ivory text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </NavLink>
          <button className="relative text-brown hover:text-mauve transition-colors flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-2 bg-mauve text-ivory text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>

        {/* Mobile Cart / History */}
        <div className="md:hidden flex items-center gap-4">
           <NavLink to="/history" className="text-brown hover:text-mauve transition-colors flex items-center gap-2">
             <History className="w-5 h-5" />
           </NavLink>
           <NavLink to="/wishlist" className="relative text-brown hover:text-mauve transition-colors flex items-center gap-2">
             <Heart className="w-5 h-5" />
             {wishlistCount > 0 && (
               <span className="absolute -top-1.5 -right-2 bg-rose-400 text-ivory text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                 {wishlistCount}
               </span>
             )}
           </NavLink>
           <button className="relative text-brown hover:text-mauve transition-colors flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-2 bg-mauve text-ivory text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? 'auto' : 0 }}
        className="md:hidden bg-ivory overflow-hidden border-b border-black/5"
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          {LINKS.map(link => (
            <NavLink 
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => 
                `text-lg font-serif transition-colors ${isActive ? 'text-forest' : 'text-brown/80'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
