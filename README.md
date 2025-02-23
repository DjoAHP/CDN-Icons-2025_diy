# Iconic CDN

Une bibliothèque d'icônes SVG moderne et optimisée pour le web.

## Installation

### Via CDN

Ajoutez Iconic CDN à votre projet en incluant notre script dans votre HTML :

```html
<script src="https://cdn.jsdelivr.net/npm/@jodevahp/icons-ahp-library@1.0.15/dist/iconic.js" type="module"></script>
```

**Important:** Assurez-vous de remplacer `1.0.15` par la version la plus récente de la librairie. Vous pouvez trouver la dernière version sur [npm](https://www.npmjs.com/package/@jodevahp/icons-ahp-library).

N'oubliez pas de mettre à jour le lien CDN dans la documentation de votre site : [https://charming-rugelach-c31ab2.netlify.app](https://charming-rugelach-c31ab2.netlify.app)

### Installation Locale (React)

```bash
npm install @jodevahp/icons-ahp-library
```

## Utilisation

### HTML (CDN)

Une fois le script CDN inclus, vous pouvez utiliser les icônes n'importe où dans votre HTML :

```html
<!-- Utilisation d'une icône -->
<i-icon name="joysline01"></i-icon>
-------------
CSS exemple styles:
i-icon {
    --icon-color: rgb(255, 255, 255);
    --icon-size: 30px;
  }
```

Vous pouvez contrôler la taille et la couleur des icônes en utilisant des variables CSS (custom properties).

### React

```jsx
import React from 'react';
import { icons } from '@jodevahp/icons-ahp-library';

function MyComponent() {
  return (
    <div>
      {/* Utilisation d'une icône */}
      <i-icon name="springbook"></i-icon>
    </div>
  );
}

export default MyComponent;
```

**Important pour React :**

*   Assurez-vous d'importer les icônes depuis `@jodevahp/icons-ahp-library` pour pouvoir les utiliser dans vos composants React.
*   Utilisez des styles en ligne (inline styles) pour définir les variables CSS `--icon-size` et `--icon-color`.

## Documentation

Visitez [https://charming-rugelach-c31ab2.netlify.app/] pour la documentation complète.

## Licence

MIT
-----
git add .
git commit -m "Update icons and styles"
git push origin main
```bash
{
  "name": "@jodevahp/icons-ahp-library",
  "version": "1.1.0", // Increment the version
  ...
}
```
npm run build:lib
npm publish --access public
