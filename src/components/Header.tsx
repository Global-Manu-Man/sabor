import React, { useState } from 'react';
import { UtensilsCrossed, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="text-yellow-600" size={28} />
            <span className="font-bold text-2xl text-yellow-700">Sabor de mi Tierra</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#introduction" className="text-stone-700 hover:text-yellow-600 font-medium transition-colors duration-200">Introducción</a>
            <a href="#dishes" className="text-stone-700 hover:text-yellow-600 font-medium transition-colors duration-200">Platillos</a>
            <a href="#categories-menu" className="text-stone-700 hover:text-yellow-600 font-medium transition-colors duration-200">Categorías</a>
            <a href="#cultural" className="text-stone-700 hover:text-yellow-600 font-medium transition-colors duration-200">Cultura</a>
            <a href="#regions" className="text-stone-700 hover:text-yellow-600 font-medium transition-colors duration-200">Regiones</a>
            <a href="#conclusion" className="bg-yellow-500 hover:bg-yellow-600 text-stone-900 font-bold py-2 px-4 rounded-full transition duration-300">Explorar</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-stone-700 hover:text-yellow-600 focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#introduction" 
              className="text-stone-700 hover:text-yellow-600 font-medium py-2 px-4 hover:bg-amber-50 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              Introducción
            </a>
            <a 
              href="#dishes" 
              className="text-stone-700 hover:text-yellow-600 font-medium py-2 px-4 hover:bg-amber-50 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              Platillos
            </a>
            <a 
              href="#categories-menu" 
              className="text-stone-700 hover:text-yellow-600 font-medium py-2 px-4 hover:bg-amber-50 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              Categorías
            </a>
            <a 
              href="#cultural" 
              className="text-stone-700 hover:text-yellow-600 font-medium py-2 px-4 hover:bg-amber-50 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              Cultura
            </a>
            <a 
              href="#regions" 
              className="text-stone-700 hover:text-yellow-600 font-medium py-2 px-4 hover:bg-amber-50 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
            >
              Regiones
            </a>
            <a 
              href="#conclusion" 
              className="bg-yellow-500 hover:bg-yellow-600 text-stone-900 font-bold py-2 px-4 rounded-lg text-center transition duration-300"
              onClick={toggleMenu}
            >
              Explorar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;