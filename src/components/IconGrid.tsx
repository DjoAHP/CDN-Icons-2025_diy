import React, { useState } from 'react';
import { icons, categories } from '../data/icons';
import { Copy, Check } from 'lucide-react';

export const IconGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredIcons = icons.filter(icon => {
    const searchMatch = icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      icon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const categoryMatch = selectedCategory === '' || icon.category === selectedCategory;
    return searchMatch && categoryMatch;
  });

  const copyToClipboard = (id: string) => {
    const code = `<i-icon name="${id}"></i-icon>`;
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="mb-4 md:mb-0">
          <select
            className="px-4 py-2 glass rounded-lg border-gray-700/50 text-white bg-transparent focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Toutes les catégories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Rechercher des icônes..."
            className="w-full max-w-md px-4 py-2 glass rounded-lg border-gray-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-4">
        {filteredIcons.map(icon => (
          <div
            key={icon.id}
            className="glass-card p-4 glass-hover"
          >
            <div className="flex flex-col items-center">
              <div
                className="w-12 h-12 flex items-center justify-center mb-2 text-purple-400"
                dangerouslySetInnerHTML={{ __html: icon.svg }}
              />
              <p className="text-sm text-gray-300 text-center mb-2">{icon.name}</p>
              <button
                onClick={() => copyToClipboard(icon.id)}
                className="text-gray-400 hover:text-purple-400 transition-colors"
                title={copiedId === icon.id ? "Copié !" : "Copier le code"}
              >
                {copiedId === icon.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
