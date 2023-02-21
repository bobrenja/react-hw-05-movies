import { nanoid } from 'nanoid';
const itemMenu = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
  },
  {
    id: nanoid(),
    to: '/movies',
    text: 'Movie',
  },
];
export { itemMenu };
