import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Catalog from '../components/ProductsCatalog';
import { Link } from 'react-router-dom';

const Home = () => {
  const [featuredProduct, setFeaturedProduct] = useState(null);

  useEffect(() => {
    // Simula la carga de un producto destacado
    const mockFeaturedProduct = {
      name: "Botas de Fútbol Pro X",
      image: "https://e-ad.americatv.com.pe/futbol-mundial-cristiano-ronaldo-y-sus-nuevos-botines-que-lucira-derbi-n157190-640x360-125716.jpg",
      description: "Las botas más avanzadas para el jugador moderno.",
      price: 199.99
    };
    setFeaturedProduct(mockFeaturedProduct);
  }, []);

  return (
    <Layout>
      <div className="bg-gradient-to-r from-green-400 to-blue-500">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-6xl font-extrabold text-white mb-8 text-center animate-pulse">
            Eleva tu Juego
          </h1>
          <p className="text-2xl text-white text-center mb-12">
            Equipamiento profesional para futbolistas apasionados
          </p>
          <div className="flex justify-center">
            <Link to="/catalog" className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold py-3 px-6 rounded-full text-xl transition duration-300 transform hover:scale-110">
              Explora Nuestra Colección
            </Link>
          </div>
        </div>
      </div>

      {featuredProduct && (
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Producto Destacado</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src={featuredProduct.image} alt={featuredProduct.name} className="rounded-lg shadow-2xl transition duration-300 transform hover:scale-105" />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-3xl font-semibold mb-4">{featuredProduct.name}</h3>
                <p className="text-xl text-gray-600 mb-6">{featuredProduct.description}</p>
                <p className="text-2xl font-bold text-green-600 mb-8">${featuredProduct.price.toFixed(2)}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 transform hover:scale-110">
                  Comprar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Categorías Populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Botas', 'Balones', 'Equipamiento'].map((category) => (
              <div key={category} className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105">
                <img src={`https://www.runningcorrer.com.ar/wprunning/wp-content/uploads/2017/09/MercurialSuperfly-CR7-Nike-Botin-2.webp`} alt={category} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{category}</h3>
                  <Link to={`/catalog?category=${category.toLowerCase()}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                    Ver Productos →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Calidad Premium", icon: "🏆" },
              { title: "Envío Rápido", icon: "🚚" },
              { title: "Atención 24/7", icon: "🌟" }
            ].map((feature) => (
              <div key={feature.title} className="bg-blue-700 rounded-lg p-6 transition duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Productos en Oferta</h2>
          <Catalog />
        </div>
      </div>
    </Layout>
  );
};

export default Home;