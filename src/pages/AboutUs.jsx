import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  const position = [40.7128, -74.0060]; // Ajusta las coordenadas a la ubicación deseada

  return (
    <div className="bg-gray-50">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen py-10 px-4">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 text-center">Acerca de Nosotros</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl text-center">
          En nuestra tienda deportiva, nos dedicamos a ofrecer el mejor equipamiento para tus actividades de fútbol. Desde nuestros inicios, hemos estado inspirados por la pasión y el compromiso de los jugadores, buscando constantemente formas de llevar a las personas al siguiente nivel con nuestros accesorios de calidad.
        </p>
        
        <div className="mt-8 w-full md:w-2/3 lg:w-1/2 h-96 rounded-lg shadow-lg overflow-hidden">
          <iframe 
            title="Mapa de nuestra tienda"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124866.1337687154!2d-76.97258391449735!3d-12.038930462656047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c3d12afa9c23%3A0x8a9da7f852624412!2sAte!5e0!3m2!1ses-419!2spe!4v1715304441559!5m2!1ses-419!2spe" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>

        <section className="mt-10 w-full max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestra Historia</h2>
          <p className="text-lg text-gray-700 mb-6">
            Desde nuestros humildes comienzos, nos hemos esforzado por ser más que una simple tienda de deportes. Nuestro enfoque ha sido siempre el de crear una comunidad en torno a la pasión por el fútbol, donde cada jugador pueda encontrar el equipo que le ayude a alcanzar sus metas.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            A lo largo de los años, hemos escuchado las historias de nuestros clientes, sus luchas y victorias, y hemos aprendido de cada una de ellas. Cada accesorio que ofrecemos es una extensión de nuestro compromiso por mejorar el rendimiento y la experiencia de cada jugador en el campo.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Hoy en día, estamos orgullosos de ser parte del viaje de tantos atletas. Con una selección de productos que incluye equipamiento de alta calidad y la última tecnología, seguimos impulsando a los jugadores a superarse en cada juego.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
