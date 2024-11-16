// Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchModal from './SearchModal';
import CartModal from './CartModal';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const isCurrentPath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">TiendaDeportiva</Link>
          
          <nav className="flex items-center space-x-4">
            {!isCurrentPath('/') && (
              <Link to="/" className="hover:text-gray-600">Principal</Link>
            )}
            {!isCurrentPath('/catalog') && (
              <Link to="/catalog" className="hover:text-gray-600">Productos</Link>
            )}
            {!isCurrentPath('/contact') && (
              <Link to="/contact" className="hover:text-gray-600">Contáctanos</Link>
            )}
            {!isCurrentPath('/about') && (
              <Link to="/about" className="hover:text-gray-600">Nosotros</Link>
            )}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              🔍
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              🛒
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        addToCart={addToCart}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </header>
  );
};

export default Header;