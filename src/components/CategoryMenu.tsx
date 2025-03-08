import React from 'react';
import { Category } from '../types';

interface CategoryMenuProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ 
  categories, 
  activeCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            activeCategory === 'all'
              ? 'bg-yellow-600 text-white font-bold shadow-md'
              : 'bg-amber-100 text-stone-700 hover:bg-amber-200'
          }`}
        >
          Todos
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-yellow-600 text-white font-bold shadow-md'
                : 'bg-amber-100 text-stone-700 hover:bg-amber-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;