import { Icon, IconCategory } from '../types/icon';

export const categories: IconCategory[] = [
  {
    id: 'essential',
    name: 'Essential',
    description: 'Must-have icons for any project'
  },
  {
    id: 'interface',
    name: 'Interface',
    description: 'UI/UX focused icons'
  }
];

export const icons: Icon[] = [
  {
    id: 'home',
    name: 'Home',
    tags: ['house', 'main', 'dashboard'],
    category: 'essential',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e9e9f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  },
  {
    id: 'search',
    name: 'Search',
    tags: ['find', 'magnifier', 'lookup'],
    category: 'essential',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e9e9f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`
  },
  {
    id: 'ahp-logo01',
    name: 'AhpLogo01',
    tags: ['ahp', 'logo'],
    category: 'essential',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="#e9e9f2"><path d="m128 229.8 14.5-8.4v22.7l-14.5 8.4-14.5-8.4v-22.7zm-44.5-42.2-15.6-9-1.2-.7-2.8-1.6-14.3 8.2-14.5 8.4v5.9l14.5 8.4 19.6 11.3 14.5 8.4v-22.7l-14.5-8.3zm30-40v22.6l14.5-8.4 14.5 8.4v-22.6l-14.5-8.4zm78.7 28.6-2.8 1.6-1.1.6-15.8 9.1 14.3 8.3-14.5 8.3v22.7l14.5-8.4 19.6-11.3 14.5-8.4v-5.9l-14.5-8.4-14.3-8.2Zm33.9-93.4v45.3l-19.6 11.3-19.6 11.3-19.4 11.2h-.2v-45.2L147.7 128v113.2l19.6-11.3v-45.3l19.6-11.3 19.6-11.3 19.6-11.3V196l19.6-11.3V71.5zm-137.3 34 19.6 11.3v113.2L88.8 230v-45.3l-19.6-11.3-19.6-11.3L30 150.8v45.3l-19.6-11.3V71.6L30 82.9l19.6 11.3 19.6 11.3zm0 45.1v-22.4l-19.6-11.3-19.6-11.3L30 105.6v22.6l19.6 11.3 19.6 11.3L88.6 162h.2zm39.2-45.1-19.6-11.3-19.6-11.3-19.6-11.3-19.6-11.3L30 60.3 49.6 49l19.6-11.3 19.6-11.3 19.6-11.3L128 3.8l19.6 11.3 19.6 11.3 19.6 11.3L206.4 49 226 60.3l-19.6 11.3-19.6 11.3-19.6 11.3-19.6 11.3zm-19.6-34L128 94.1l19.6-11.3 19.6-11.3 19.6-11.3-19.6-11.3-19.6-11.3L128 26.3l-19.6 11.3-19.6 11.3-19.6 11.3 19.6 11.3z"/></svg>`
  },
  {
    id: 'springbook',
    name: 'Springbook',
    tags: ['springbook'],
    category: 'essential',
    svg: `<svg xmlns="http://www.w3.org/2000/svg"width="24" height="24" viewBox="0 0 256 256" fill="#e9e9f2"><path d="M227.63 20.91c-.41-.9-.95-1.08-1.33 0-2.88 8.07-6.87 15.4-11.62 22.11-22.29-23.13-53.55-37.56-88.21-37.56C58.79 5.46 3.93 60.32 3.93 128c0 36.5 15.98 69.26 41.3 91.7-.33-1.12-.56-2.28-.56-3.5 0-6.87 5.57-12.44 12.44-12.44s12.44 5.57 12.44 12.44-5.57 12.44-12.44 12.44c-.2 0-.39-.05-.6-.06 19.84 13.82 43.94 21.95 69.95 21.95 54.29 0 100.3-35.31 116.39-84.21 20.7-42.28 2.49-107.18-15.23-145.42Zm-.5 13.42c.25.38.57.79 1.07 1.27 3.33 3.2 5.16 13.27 6.58 17.49 11.4 33.89 23.46 82.33.75 112.81-18.91 25.39-53.6 35.89-83.65 39.61-12.01 1.49-27.64 3.52-42.37 3.29 19.25-6.15 38.44-13.61 54.92-24.25 24.33-15.73 37.91-47.57 49.04-73.45 1-1.98.05-10.32-.96-10.6-.13-.09-.26-.03-.37.25-14.04 27.79-35.83 52.88-64.4 65.96-16.61 7.6-34.59 12.52-52.28 16.87-7.59 1.86-23.08 8.62-30.7 6.59-7.3-1.95-13.94-13.47-16.58-20.43-13.42-35.29 14.96-55.46 41.46-63.78 25.23-7.92 53.27-5.28 77.75-14.96 14.99-5.93 29.93-16.4 41.51-27.44 8.68-8.27 9.56-18.5 16.72-26.86.84-.98 1.24-1.72 1.5-2.35Z"/></svg>`
  },
  {
    id: 'joysline01',
    name: 'Joysline01',
    tags: ['joysline01'],
    category: 'essential',
    svg: `<svg xmlns="http://www.w3.org/2000/svg"width="24" height="24" viewBox="0 0 256 256" fill="#e9e9f2"><path d="M183.11 199.49H72.9c-39.43 0-71.5-32.07-71.5-71.49s32.07-71.49 71.49-71.49H183.1c39.42 0 71.49 32.07 71.49 71.49s-32.07 71.49-71.49 71.49ZM72.89 65.51C38.43 65.51 10.4 93.54 10.4 128s28.03 62.49 62.49 62.49H183.1c34.46 0 62.49-28.03 62.49-62.49s-28.03-62.49-62.49-62.49zm18.72 101.72H69.36c-2.66 0-4.82-2.16-4.82-4.82v-19.9h-19.9c-2.66 0-4.82-2.16-4.82-4.82v-22.25c0-2.66 2.16-4.82 4.82-4.82h19.9v-19.9c0-2.66 2.16-4.82 4.82-4.82h22.25c2.66 0 4.82 2.16 4.82 4.82v19.9h19.9c2.66 0 4.82 2.16 4.82 4.82v22.25c0 2.66-2.16 4.82-4.82 4.82h-19.9v19.9c0 2.66-2.16 4.82-4.82 4.82m-18.08-9h13.89v-19.9c0-2.66 2.16-4.82 4.82-4.82h19.9v-13.89h-19.9c-2.66 0-4.82-2.16-4.82-4.82V94.9H73.53v19.9c0 2.66-2.16 4.82-4.82 4.82h-19.9v13.89h19.9c2.66 0 4.82 2.16 4.82 4.82zm83.33 9c-12.87 0-23.34-10.47-23.34-23.34s10.47-23.34 23.34-23.34 23.34 10.47 23.34 23.34-10.47 23.34-23.34 23.34m0-37.68c-7.91 0-14.34 6.43-14.34 14.34s6.43 14.34 14.34 14.34 14.34-6.43 14.34-14.34-6.43-14.34-14.34-14.34m34.64 3.04c-12.87 0-23.34-10.47-23.34-23.34s10.47-23.34 23.34-23.34 23.34 10.47 23.34 23.34-10.47 23.34-23.34 23.34m0-37.68c-7.91 0-14.34 6.43-14.34 14.34s6.43 14.34 14.34 14.34 14.34-6.43 14.34-14.34-6.43-14.34-14.34-14.34"/></svg>`
  }
];
