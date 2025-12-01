import React from 'react';
import { Pet, AdoptionStatus } from '../types';

// --- Part 4: Utility Types ---
// We create a "Subset" type. We only want these 3 fields.
type PetSummary = Pick<Pet, 'name' | 'status' | 'photoUrl'>;


// --- Part 5: Conditional Types ---
// Logic: If T is 'available', use Green. Otherwise, Red.
type StatusColor<T extends AdoptionStatus> = T extends 'available' ? 'text-green-600' : 'text-red-600';


export const PetCard = ({ info }: { info: PetSummary }) => {
  
  // We use the conditional logic here for the className
  const statusColor = (info.status === 'available' ? 'text-green-600' : 'text-red-600') as StatusColor<typeof info.status>;

  return (
    <div className="flex items-center gap-4 mb-2">
      <img 
        src={info.photoUrl} 
        alt={info.name} 
        className="w-12 h-12 rounded-full bg-gray-100" 
      />
      <div>
        <h3 className="font-bold text-lg">{info.name}</h3>
        <span className={`text-xs font-bold uppercase ${statusColor}`}>
          {info.status}
        </span>
      </div>
    </div>
  );
};
