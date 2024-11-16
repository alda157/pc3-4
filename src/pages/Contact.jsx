// src/pages/Contact.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-col items-center justify-center flex-grow bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-12 px-4">
          <h1 className="text-5xl font-bold mb-8 text-center tracking-wider">Contáctanos</h1>

          <p className="text-lg max-w-2xl mb-12 text-center">
            ¿Tienes alguna pregunta o necesitas más información? Completa el formulario y nos pondremos en contacto contigo a la brevedad.
          </p>

          <form className="w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg animate__animated animate__fadeInUp">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder=" "
                className="peer bg-transparent border-b-2 border-white focus:border-indigo-500 outline-none w-full text-white py-2 placeholder-transparent transition-all duration-300"
                required
              />
              <label className="absolute left-0 top-2 text-white text-sm transform -translate-y-3 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transition-all duration-300">
                Nombre
              </label>
            </div>

            <div className="relative mb-6">
              <input
                type="email"
                placeholder=" "
                className="peer bg-transparent border-b-2 border-white focus:border-indigo-500 outline-none w-full text-white py-2 placeholder-transparent transition-all duration-300"
                required
              />
              <label className="absolute left-0 top-2 text-white text-sm transform -translate-y-3 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transition-all duration-300">
                Correo Electrónico
              </label>
            </div>

            <div className="relative mb-6">
              <textarea
                placeholder=" "
                className="peer bg-transparent border-b-2 border-white focus:border-indigo-500 outline-none w-full text-white py-2 h-32 placeholder-transparent transition-all duration-300"
                required
              ></textarea>
              <label className="absolute left-0 top-2 text-white text-sm transform -translate-y-3 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 transition-all duration-300">
                Mensaje
              </label>
            </div>

            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Enviar Mensaje
            </button>
          </form>

          <div className="mt-12 flex space-x-6">
            <a href="#" className="text-white hover:text-indigo-300 transition duration-300">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-indigo-300 transition duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-indigo-300 transition duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
};

export default Contact;
