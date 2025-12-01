// 1. Define the specific string options (Union)
export type AdoptionStatus = 'available' | 'pending' | 'adopted';

// 2. Define the shared properties (The Base)
export interface BasePet {
  id: string;
  name: string;
  status: AdoptionStatus;
  photoUrl: string;
}

// 3. Define specific animals (Extending the Base)
export interface Dog extends BasePet {
  type: 'dog'; // Literal type acting as a discriminator
  bark: () => void;
}

export interface Cat extends BasePet {
  type: 'cat';
  meow: () => void;
}

// 4. The Master Type (Union)
export type Pet = Dog | Cat;
