import React from 'react';
    import { Link } from 'react-router-dom';
    // import { LibraryBig } from 'lucide-react';

    export const Header: React.FC = () => {
      return (
        <header className="glass sticky top-0 z-50 border-b border-gray-700/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center space-x-2">
                {/* <LibraryBig className="w-8 h-8 text-purple-400" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256" fill="#e9e9f2" className="w-8 h-8 text-purple-400"><path id="ahp-icon-01" d="M128,229.78l14.49-8.38v22.66l-14.49,8.37-14.49-8.37v-22.66l14.49,8.38ZM83.45,187.57l-15.64-9.05h-.02l-1.19-.69-2.76-1.59-14.28,8.24-14.49,8.37v5.92l14.49,8.35,19.6,11.34,14.49,8.35v-22.65l-14.47-8.35,14.26-8.25ZM113.51,147.58v22.63l14.49-8.37,14.49,8.37v-22.63l-14.49-8.36-14.49,8.36ZM192.16,176.24l-2.76,1.59-1.1.62-15.75,9.11,14.26,8.25-14.47,8.35v22.65l14.49-8.35,19.6-11.34,14.49-8.35v-5.92l-14.49-8.37-14.28-8.24ZM226.05,82.83v45.27l-19.59,11.34h-.03l-19.6,11.31-19.43,11.23h0l-.19.11v-45.27l-19.59,11.31v113.21l19.59-11.34v-45.27l19.6-11.34h.03l19.6-11.31,19.62-11.34v45.29l19.6-11.31h.03v-113.21l-19.62,11.31ZM88.78,116.81l19.59,11.31v113.21l-19.59-11.34v-45.27l-19.6-11.34h-.03l-19.6-11.31-19.62-11.34v45.29l-19.6-11.31h-.03v-113.21l19.62,11.31,19.59,11.31.03.03,19.6,11.31,19.6,11.31.03.03ZM88.78,161.86v-22.43l-19.62-11.34-19.6-11.31h-.03l-19.59-11.31v22.62l19.59,11.34h.03l19.6,11.31,19.43,11.23h0l.19.11v-.22ZM128,116.79l-19.62-11.34-19.59-11.31-19.62-11.31-19.6-11.34-19.62-11.31,19.62-11.34,19.6-11.31h.03l19.6-11.31,19.59-11.31v-.03h.03l19.6-11.31,19.6,11.31h.03v.03l19.59,11.31,19.6,11.31h.03l19.6,11.31,19.62,11.34-19.62,11.31-19.6,11.34-19.62,11.31-19.59,11.31-19.62,11.34ZM108.4,82.8l19.6,11.34,19.6-11.34.03.03v-.03l19.59-11.31,19.6-11.31-19.6-11.34-19.59-11.31-19.62-11.34-19.62,11.34-19.59,11.31-19.6,11.34,19.6,11.31,19.59,11.31v.03l.03-.03Z"/></svg>
                <span className="text-xl font-bold text-white">IcOnS LiBrArY</span>
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
