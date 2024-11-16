
import React from 'react';
import { addToCart } from '../Header';

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ProductCard;