import { Pet, Dog } from "@/types/index";

export function isDog(pet: Pet): pet is Dog {
  return (pet as Dog).type === "dog";
}
