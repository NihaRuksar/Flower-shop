import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest text-beige py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="font-serif text-2xl mb-6 block text-ivory">Bloom & Petal</Link>
          <p className="text-beige/80 text-sm leading-relaxed mb-6">
            Handcrafted bouquets and floral arrangements for every moment in San Luis Obispo.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-beige/20 flex items-center justify-center hover:bg-beige/10 hover:border-beige/50 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-beige/20 flex items-center justify-center hover:bg-beige/10 hover:border-beige/50 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-beige/20 flex items-center justify-center hover:bg-beige/10 hover:border-beige/50 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-widest uppercase mb-6 text-ivory">Explore</h4>
          <ul className="space-y-3 text-sm text-beige/80">
            <li><Link to="/" className="hover:text-ivory transition-colors">Home</Link></li>
            <li><Link to="/shop" className="hover:text-ivory transition-colors">Shop Flowers</Link></li>
            <li><Link to="/about" className="hover:text-ivory transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-ivory transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-mono text-xs tracking-widest uppercase mb-6 text-ivory">Occasions</h4>
          <ul className="space-y-3 text-sm text-beige/80">
            <li><Link to="/shop" className="hover:text-ivory transition-colors">Birthday & Celebrations</Link></li>
            <li><Link to="/shop" className="hover:text-ivory transition-colors">Romance & Anniversary</Link></li>
            <li><Link to="/shop" className="hover:text-ivory transition-colors">Sympathy</Link></li>
            <li><Link to="/shop" className="hover:text-ivory transition-colors">Weddings & Events</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-widest uppercase mb-6 text-ivory">Visit Us</h4>
          <address className="not-italic text-sm text-beige/80 space-y-3">
            <p>123 Floral Avenue<br />San Luis Obispo, CA 93401</p>
            <p>Mon-Fri: 9am - 6pm<br />Sat: 10am - 4pm<br />Sun: Closed</p>
            <p className="pt-2">hello@bloomandpetal.com<br />(555) 123-4567</p>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-beige/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-beige/60">
        <p>© 2026 Bloom & Petal. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-beige transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-beige transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
