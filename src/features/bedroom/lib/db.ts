const blurDataUrl =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGOobGn48/dTRloMCysDQ/+EFlNT/cy87NRYbwCV/QonfvGUXgAAAABJRU5ErkJggg==';

const bedroomHotspots = [
  {
    name: 'topwear',
    to: '/categories/topwear',
    position: { left: '10vw', top: '20vh' },
  },
  {
    name: 'accessories',
    to: '/categories/accessories',
    position: { left: '40vw', top: '50vh' },
  },
  {
    name: 'nike fly',
    to: '/products/nike-fly',
    position: { left: '70vw', top: '30vh' },
  },
];

export type BedroomHotspots = typeof bedroomHotspots;

export { bedroomHotspots, blurDataUrl };
