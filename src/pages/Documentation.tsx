import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Documentation: React.FC = () => {
  const cdnExample = `<script src="https://cdn.jsdelivr.net/npm/@jodevahp/icons-ahp-library@1.0.9/dist/iconic.js" type="module"></script>`;
  const usageExample = `<!-- Utilisation d'une icône -->
<i-icon name="springbook"></i-icon>
-------------
CSS exemple styles:
i-icon {
    --icon-color: rgb(255, 255, 255);
    --icon-size: 24px;
  }
    `;


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-8 mb-8">
          <h1 className="text-4xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Documentation</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Pour Commencer</h2>
            <p className="text-gray-300 mb-6">
              Ajoutez Iconic CDN à votre projet en incluant notre script dans votre HTML :
            </p>
            <div className="mb-6">
              <SyntaxHighlighter 
                language="html" 
                style={tomorrow}
                className="rounded-lg"
              >
                {cdnExample}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Utilisation</h2>
            <p className="text-gray-300 mb-6">
              Une fois le script CDN inclus, vous pouvez utiliser les icônes n'importe où dans votre HTML :
            </p>
            <div className="mb-6">
              <SyntaxHighlighter 
                language="html" 
                style={tomorrow}
                className="rounded-lg"
              >
                {usageExample}
              </SyntaxHighlighter>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Référence de l'API</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-white">size</h3>
                <p className="text-gray-300">Définit la taille de l'icône en pixels (par défaut : 24)</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-white">color</h3>
                <p className="text-gray-300">Définit la couleur de l'icône en utilisant n'importe quelle valeur CSS valide</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-white">class</h3>
                <p className="text-gray-300">Ajoute des classes CSS personnalisées à l'icône</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
