import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Bell } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Technology', path: '/category/technology' },
    { name: 'Business', path: '/category/business' },
    { name: 'Lifestyle', path: '/category/lifestyle' },
    { name: 'Environment', path: '/category/environment' },
    { name: 'Travel', path: '/category/travel' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-red-700 flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">S</span>
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-black">The SEA Journal</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black",
                  isActive(item.path) ? "text-black" : "text-gray-500"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-black">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-500 hover:text-black hidden sm:block">
              <Bell className="h-5 w-5" />
            </button>
            <button 
              className="md:hidden text-gray-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block text-base font-medium",
                  isActive(item.path) ? "text-black" : "text-gray-500"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
