// SearchModal.jsx
import React, { useState } from 'react';
import productsData from '../products.json';

const SearchModal = ({ isOpen, onClose, addToCart }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-20">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Buscar Productos</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <input
          type="text"
          placeholder="Buscar productos..."
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          autoFocus
        />
        
        <div className="mt-4 max-h-96 overflow-y-auto">
          {searchResults.map((product) => (
            <div key={product.id} className="flex items-center p-2 border-b hover:bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;