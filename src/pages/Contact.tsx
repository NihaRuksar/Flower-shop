import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  return (
    <div className="w-full bg-ivory min-h-screen pt-32 pb-24 px-6 relative">
      <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-blush/20 to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="Let's Talk Flowers" 
          subtitle="reach out" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-12">
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-mauve/5 space-y-8">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-mauve shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl text-forest mb-2">Visit the Studio</h4>
                  <p className="text-brown/70 font-light leading-relaxed">
                    123 Floral Avenue<br />
                    San Luis Obispo, CA 93401<br />
                    (Parking available in rear)
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Clock className="w-6 h-6 text-mauve shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl text-forest mb-2">Opening Hours</h4>
                  <p className="text-brown/70 font-light leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-mauve shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl text-forest mb-2">Call Us</h4>
                  <p className="text-brown/70 font-light leading-relaxed">
                    (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 text-mauve shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl text-forest mb-2">Email</h4>
                  <p className="text-brown/70 font-light leading-relaxed">
                    hello@bloomandpetal.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[300px] bg-beige/30 rounded-[2rem] overflow-hidden flex items-center justify-center border border-beige relative group">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" alt="Map background" />
               <div className="absolute inset-0 bg-ivory/60 backdrop-blur-sm"></div>
               <div className="relative z-10 text-center">
                 <MapPin className="w-8 h-8 text-forest mx-auto mb-3" />
                 <span className="font-serif text-xl text-forest">Map Integration Placeholder</span>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-mauve/5 h-full">
              <h3 className="font-serif text-3xl text-forest mb-6">Send a Message</h3>
              <p className="text-brown/70 font-light mb-8">For custom event inquiries, special requests, or just to say hello, please fill out the form below.</p>
              
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-forest uppercase tracking-wide">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Jane Doe"
                    className="w-full px-5 py-4 bg-ivory border border-beige rounded-lg focus:outline-none focus:border-mauve focus:ring-1 focus:ring-mauve transition-all text-brown"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-forest uppercase tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="jane@example.com"
                    className="w-full px-5 py-4 bg-ivory border border-beige rounded-lg focus:outline-none focus:border-mauve focus:ring-1 focus:ring-mauve transition-all text-brown"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-forest uppercase tracking-wide">Subject (Optional)</label>
                  <select 
                    id="subject"
                    className="w-full px-5 py-4 bg-ivory border border-beige rounded-lg focus:outline-none focus:border-mauve focus:ring-1 focus:ring-mauve transition-all text-brown appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Wedding & Events</option>
                    <option>Custom Order</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-forest uppercase tracking-wide">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    placeholder="How can we help you bloom?"
                    className="w-full px-5 py-4 bg-ivory border border-beige rounded-lg focus:outline-none focus:border-mauve focus:ring-1 focus:ring-mauve transition-all text-brown resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-forest text-ivory py-4 rounded-lg font-medium tracking-wide uppercase hover:bg-forest/90 transition-colors shadow-md mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
