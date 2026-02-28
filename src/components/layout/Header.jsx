import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

// Header with branding and navigation
// WHY: Consistent navigation across all pages
export const Header = () => {
  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div>
              <h1 className="text-xl font-bold text-white">
                DevConnect <span className="text-accent">Africa</span>
              </h1>
              <p className="text-xs text-gray-400">Connect. Learn. Collaborate.</p>
            </div>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost">Browse</Button>
            </Link>
            <Link to="/create">
              <Button variant="accent">Post Request</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
