import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '../ui/Button';

// Header with branding and navigation
// WHY: Consistent navigation across all pages with mobile hamburger menu
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <Globe className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-white">
                DevConnect <span className="text-accent">Africa</span>
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">Connect. Learn. Collaborate.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost">Browse</Button>
            </Link>
            <Link to="/create">
              <Button variant="accent">Post Request</Button>
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block">
              <Button variant="ghost" className="w-full justify-start">Browse</Button>
            </Link>
            <Link to="/create" onClick={() => setIsMenuOpen(false)} className="block">
              <Button variant="accent" className="w-full justify-start">Post Request</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
