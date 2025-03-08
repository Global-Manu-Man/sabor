import React from 'react';
import { UtensilsCrossed, Heart, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="text-yellow-400" size={28} />
              <span className="font-bold text-2xl text-yellow-400">Sabor de mi Tierra</span>
            </div>
            <p className="text-gray-400 mb-6">
              Descubre la riqueza gastronómica del estado de Guerrero, México. Un patrimonio culinario que merece ser conocido y preservado.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/share/18d4PHUv2M/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Síguenos en Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/sabordemitierra2250/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Síguenos en Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Contáctanos por WhatsApp"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="lucide lucide-whatsapp"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Navegación</h3>
            <nav className="flex flex-col gap-2">
              <a href="#introduction" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Introducción</a>
              <a href="#dishes" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Platillos</a>
              <a href="#categories-menu" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Categorías</a>
              <a href="#cultural" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Cultura</a>
              <a href="#regions" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Regiones</a>
              <a href="#conclusion" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Conclusión</a>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Contacto</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="text-yellow-400 mt-1" size={20} />
                <a 
                  href="https://goo.gl/maps/1XR5zcQySH8GPWQP6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  <div>
                    <p>2250 East Springville Avenue</p>
                    <p>Porterville, California</p>
                  </div>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-yellow-400" size={20} />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-yellow-400" size={20} />
                <a href="mailto:sabordemitierra2250@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  sabordemitierra2250@gmail.com
                </a>
              </div>
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.563211285406!2d-118.9671065!3d36.055364499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80eab96fcdc2d401%3A0x50bb23c7720c4fdb!2s2250%20E%20Springville%20Ave%2C%20Porterville%2C%20CA%2093257!5e0!3m2!1ses-419!2smx!4v1741404447074!5m2!1ses-419!2smx"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del restaurante"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="flex items-center justify-center gap-1 text-gray-400">
            Hecho con <Heart size={16} className="text-red-500" fill="currentColor" /> para los amantes de la gastronomía mexicana
          </p>
          <p className="text-gray-400 mt-2">© 2024 Sabor de mi Tierra. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;