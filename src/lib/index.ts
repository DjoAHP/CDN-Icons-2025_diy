import { icons } from '../data/icons';

class IconElement extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
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

    const icon = icons.find(i => i.id === name);
    if (!icon) {
      console.warn(`Icon "${name}" not found`);
      return;
    }

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          --icon-color: #e9e9f2; /* Default color */
          --icon-size: 24px; /* Default size */
          display: inline-block; /* Ensure the element takes up space */
        }

        svg {
          width: var(--icon-size);
          height: var(--icon-size);
          stroke: var(--icon-color);
          fill: var(--icon-color); /* Add fill for filled icons */
        }
      </style>
      ${icon.svg}
    `;

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
