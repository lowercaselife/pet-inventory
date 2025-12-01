'use client'
import React from 'react';
import { pets } from '../data/mockPets';
import { List } from '../components/List';
import { PetCard } from '../components/PetCard';
import { isDog } from '../utils/guards';

export default function PetAdoptionPage() {
  return (
    <div className="p-10 max-w-2xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🐾 Pet Adoption Admin</h1>
      
      {/* The Generic List Component */}
      <List 
        items={pets}
        renderItem={(pet) => (
          <div className="flex flex-col h-full justify-between">
            
            {/* The Utility Type Component */}
            <PetCard info={pet} />
            
            {/* The Type Guard Logic */}
            <button 
              onClick={() => isDog(pet) ? pet.bark() : pet.meow()}
              className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Interact
            </button>
          </div>
        )}
      />
    </div>
  );
}
