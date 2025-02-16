import { icons } from '../data/icons';

class IconElement extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'size', 'color'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name');
    const size = this.getAttribute('size') || '24';
    const color = this.getAttribute('color') || '#e9e9f2';

    const icon = icons.find(i => i.id === name);
    if (!icon) {
      console.warn(`Icon "${name}" not found`);
      return;
    }

    let svg = icon.svg
      .replace('width="24"', `width="${size}"`)
      .replace('height="24"', `height="${size}"`);

    if (svg.includes('stroke=')) {
      svg = svg.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
    }

    if (svg.includes('fill=')) {
      svg = svg.replace(/fill="[^"]*"/g, `fill="${color}"`);
    } else {
      svg = svg.replace('<svg ', `<svg fill="${color}" `);
    }

    const template = document.createElement('template');
    template.innerHTML = svg;

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = '';
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

if (!customElements.get('i-icon')) {
  customElements.define('i-icon', IconElement);
}

export { icons };
