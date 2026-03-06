import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-red-700 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">S</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">The SEA Journal</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering the most important stories from Southeast Asia to the world. Unbiased, in-depth, and modern.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Sections</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/category/technology" className="hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/category/business" className="hover:text-white transition-colors">Business</Link></li>
              <li><Link to="/category/lifestyle" className="hover:text-white transition-colors">Lifestyle</Link></li>
              <li><Link to="/category/environment" className="hover:text-white transition-colors">Environment</Link></li>
              <li><Link to="/category/travel" className="hover:text-white transition-colors">Travel</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">Get the latest SEA news delivered to your inbox.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white w-full"
              />
              <button className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} SEA Pulse Media. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
