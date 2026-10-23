export interface Cours { 
  id: number; 
  titre: string; 
  categorie: string; 
  duree: string; 
  places: number; 
  // gardez ici les autres champs de votre TP2 (description, etc.) 
} 
  
export const COURS: Cours[] = [ 
  { id: 1, titre: 'Angular 22', categorie: 'Front-end', duree: '24h', places: 12 }, 
  { id: 2, titre: 'TypeScript', categorie: 'Langage', duree: '16h', places: 8 }, 
  { id: 3, titre: 'Node.js', categorie: 'Back-end', duree: '20h', places: 15 }, 
  // ... reprenez les cours de votre TP, en ajoutant un id unique à chacun 
]; 