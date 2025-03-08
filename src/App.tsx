import React, { useState } from 'react';
import { ChefHat, UtensilsCrossed, MapPin, History, Leaf, Award } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import DishCard from './components/DishCard';
import CategoryMenu from './components/CategoryMenu';
import { dishes } from './data/dishes';
import { categories } from './data/categories';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredDishes = activeCategory === 'all' 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory);

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1919&q=80" 
          alt="Guerrero Cuisine" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Sabor de mi Tierra</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Un viaje gastronómico por la rica tradición culinaria del estado de Guerrero, México</p>
          <a href="#introduction" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-stone-900 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
            Descubrir
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-700">La Riqueza Gastronómica de México</h2>
            <p className="text-lg mb-4">
              Ubicado en la costa del Pacífico mexicano, el estado de Guerrero es un tesoro culinario que fusiona sabores indígenas, 
              españoles y africanos. Su privilegiada ubicación geográfica, que abarca costa, sierra y valles, 
              ha permitido el desarrollo de una gastronomía diversa y exquisita.
            </p>
            <p className="text-lg mb-4">
              Desde los mariscos frescos de Acapulco hasta los guisos tradicionales de la Montaña, 
              la cocina guerrerense es un reflejo de su historia, su gente y sus tradiciones. 
              Los ingredientes locales como el chile, el maíz, los frijoles y las hierbas aromáticas 
              son la base de platillos que han perdurado por generaciones.
            </p>
            <div className="flex items-center gap-2 text-yellow-700">
              <ChefHat size={24} />
              <span className="font-semibold">Una tradición culinaria centenaria</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
              alt="Cocina tradicional de Guerrero" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Categories Menu Section */}
      <section id="categories-menu" className="py-16 bg-amber-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-700">Categorías Gastronómicas</h2>
            <p className="text-lg max-w-3xl mx-auto">
              La cocina guerrerense se divide en diversas categorías que reflejan la riqueza y variedad de su tradición culinaria.
              Explora cada una para descubrir los sabores únicos de esta región.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-yellow-700">{category.name}</h3>
                <p className="text-stone-600 mb-4">{category.description}</p>
                <a 
                  href="#dishes" 
                  onClick={() => setActiveCategory(category.id)}
                  className="inline-block text-yellow-600 hover:text-yellow-700 font-medium hover:underline"
                >
                  Ver platillos →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dishes Section */}
      <section id="dishes" className="py-16 bg-stone-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-700">Platillos Emblemáticos</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Descubre los sabores más representativos de la gastronomía guerrerense, 
              platillos que cuentan historias y preservan tradiciones ancestrales.
            </p>
          </div>
          
          <CategoryMenu 
            categories={categories} 
            activeCategory={activeCategory} 
            onSelectCategory={setActiveCategory} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Importance */}
      <section id="cultural" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-700">Importancia Cultural</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <History className="text-yellow-600" size={28} />
              <h3 className="text-2xl font-bold text-yellow-700">Herencia Histórica</h3>
            </div>
            <p className="text-lg">
              La gastronomía de Guerrero es un testimonio vivo de su historia. Cada platillo cuenta la historia 
              de los pueblos indígenas que habitaron la región, la influencia española durante la colonización 
              y los aportes africanos que llegaron con la esclavitud. Esta fusión de culturas ha creado una 
              cocina única y diversa que se ha transmitido de generación en generación.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <UtensilsCrossed className="text-yellow-600" size={28} />
              <h3 className="text-2xl font-bold text-yellow-700">Festividades y Rituales</h3>
            </div>
            <p className="text-lg">
              En Guerrero, la comida es parte fundamental de las celebraciones. Desde las fiestas patronales 
              hasta los rituales indígenas, los platillos tradicionales son protagonistas. El pozole se sirve 
              en fiestas comunitarias, mientras que el mole se prepara para ocasiones especiales como bodas y 
              bautizos. Estas tradiciones culinarias fortalecen los lazos comunitarios y preservan la identidad cultural.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="text-yellow-600" size={28} />
              <h3 className="text-2xl font-bold text-yellow-700">Ingredientes Locales</h3>
            </div>
            <p className="text-lg">
              La cocina guerrerense se distingue por el uso de ingredientes locales y de temporada. 
              Los mercados tradicionales son el corazón de esta tradición, donde se pueden encontrar 
              chiles regionales, hierbas aromáticas, frutas tropicales y productos del mar. Esta 
              conexión con la tierra y el mar no solo garantiza la frescura de los platillos, sino 
              que también apoya la economía local.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-yellow-600" size={28} />
              <h3 className="text-2xl font-bold text-yellow-700">Reconocimiento Internacional</h3>
            </div>
            <p className="text-lg">
              La gastronomía guerrerense ha ganado reconocimiento más allá de las fronteras de México. 
              Sus técnicas de preparación, sabores únicos y presentaciones tradicionales han llamado la 
              atención de chefs y expertos culinarios internacionales. Este reconocimiento ha ayudado a 
              preservar y promover estas tradiciones culinarias para las futuras generaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Map */}
      <section id="regions" className="py-16 bg-stone-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-yellow-400" size={28} />
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">Regiones Gastronómicas</h2>
              </div>
              <p className="text-lg mb-6">
                La diversidad geográfica de Guerrero ha dado lugar a distintas regiones gastronómicas, 
                cada una con sus especialidades y técnicas culinarias:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="bg-yellow-400 text-stone-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-bold text-xl text-yellow-400">Costa Grande y Costa Chica</h3>
                    <p>Especializada en mariscos y pescados frescos, con influencia afromexicana.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-yellow-400 text-stone-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-bold text-xl text-yellow-400">Acapulco</h3>
                    <p>Famosa por sus pescados a la talla, ceviches y el tradicional vuelve a la vida.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-yellow-400 text-stone-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-bold text-xl text-yellow-400">Región de La Montaña</h3>
                    <p>Con fuerte presencia indígena, destacan los guisos con maíz, frijol y chile.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-yellow-400 text-stone-800 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-bold text-xl text-yellow-400">Tierra Caliente</h3>
                    <p>Conocida por sus carnes, moles y dulces tradicionales.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1518638150340-f706e86654de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Mapa gastronómico de Guerrero" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-700">Descubre el Sabor de Guerrero</h2>
        <p className="text-lg mb-8">
          La gastronomía de Guerrero es mucho más que comida; es historia, tradición y cultura en cada bocado. 
          Te invitamos a emprender un viaje culinario por este maravilloso estado, a probar sus platillos 
          emblemáticos y a sumergirte en la riqueza de sabores que ofrece.
        </p>
        <p className="text-lg mb-8">
          Ya sea que visites Acapulco, Taxco, Zihuatanejo o cualquier rincón de Guerrero, no dejes de 
          explorar su cocina tradicional. Cada platillo te contará una historia y te permitirá conectar 
          con la esencia de esta tierra y su gente.
        </p>
        <a 
          href="#dishes" 
          className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
        >
          Explorar Platillos
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default App;