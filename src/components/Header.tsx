import React from 'react';
import { Link } from 'react-router-dom';
import { LibraryBig } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="glass sticky top-0 z-50 border-b border-gray-700/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <LibraryBig className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">Iconic CDN</span>
          </Link>
          <nav className="flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Accueil</Link>
            <Link to="/docs" className="text-gray-300 hover:text-purple-400 transition-colors">Documentation</Link>
            <Link to="/icons" className="text-gray-300 hover:text-purple-400 transition-colors">Icônes</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
