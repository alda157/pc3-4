import React, { useEffect, useState } from 'react';
import productsData from '../products.json';


const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    // Cargar los productos
    setProducts(productsData);
  }, []);

  // Función para obtener 5 productos aleatorios
  const getRandomProducts = (num) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random()); // Mezclar productos
    return shuffled.slice(0, num); // Obtener solo los primeros 'num' productos
  };

  const handleFilterChange = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setProducts(filtered);
  };

  const openModal = (product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  return (
    <div className="mt-8">
      <input
        type="text"
        placeholder="Buscar productos..."
        onChange={handleFilterChange}
        className="border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getRandomProducts(5).map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 bg-white">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-600">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="font-bold text-blue-700">${product.price.toFixed(2)}</p>
              <button
                className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                onClick={() => openModal(product)}
              >
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
     
     
    </div>
  );
};

export default ProductCatalog;
