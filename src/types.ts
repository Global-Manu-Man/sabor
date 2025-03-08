export interface Dish {
  id: number;
  name: string;
  shortDescription: string;
  ingredients: string[];
  history: string;
  culturalRelevance: string;
  image: string;
  category?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}