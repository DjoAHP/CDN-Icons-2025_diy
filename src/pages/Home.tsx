import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            De Belles Icônes pour le Web Moderne
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Une collection soigneusement élaborée d'icônes SVG, optimisée pour une diffusion via CDN.
            Gratuite, open source, et prête à l'emploi dans votre prochain projet.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/icons"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Parcourir les Icônes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center px-6 py-3 glass glass-hover text-purple-400 rounded-lg"
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
