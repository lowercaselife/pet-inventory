import { Pet } from '../types';

// We now strongly type this array as Pet[]
export const pets: Pet[] = [
  { 
    id: '1', 
    type: 'dog', 
    name: 'Rex', 
    status: 'available', 
    photoUrl: 'https://placehold.co/100x100/png?text=Dog',
    bark: () => alert('Woof! 🐕') 
  },
  { 
    id: '2', 
    type: 'cat', 
    name: 'Luna', 
    status: 'adopted', 
    photoUrl: 'https://placehold.co/100x100/png?text=Cat',
    meow: () => alert('Meow! 🐈') 
  },
];


