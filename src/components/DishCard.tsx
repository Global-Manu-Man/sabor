import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Dish } from '../types';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <img 
        src={dish.image} 
        alt={dish.name} 
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-yellow-700">{dish.name}</h3>
        <p className="text-stone-600 mb-4">{dish.shortDescription}</p>
        
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
          <div className="pt-4 border-t border-gray-200">
            <h4 className="font-semibold text-yellow-700 mb-2">Ingredientes principales:</h4>
            <ul className="list-disc list-inside mb-4 text-stone-600">
              {dish.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            
            <h4 className="font-semibold text-yellow-700 mb-2">Historia:</h4>
            <p className="text-stone-600 mb-4">{dish.history}</p>
            
            <h4 className="font-semibold text-yellow-700 mb-2">Relevancia cultural:</h4>
            <p className="text-stone-600">{dish.culturalRelevance}</p>
          </div>
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-1 text-yellow-600 hover:text-yellow-700 font-medium"
        >
          {isExpanded ? (
            <>
              Mostrar menos <ChevronUp size={18} />
            </>
          ) : (
            <>
              Leer más <ChevronDown size={18} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default DishCard;