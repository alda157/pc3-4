import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import products from '../products.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Catalog = () => {
  const sections = [
    { title: 'Ropa y Equipación de Fútbol', key: 'ropa' },
    { title: 'Calzado Deportivo', key: 'calzado' },
    { title: 'Balones de Fútbol', key: 'balones' },
    { title: 'Accesorios de Juego y Entrenamiento', key: 'accesorios' },
    { title: 'Equipamiento para Porteros', key: 'equipamientoPorteros' },
    { title: 'Vitaminas y Suplementos', key: 'suplementos' },
    { title: 'Tecnología y Gadgets Deportivos', key: 'tecnologia' },
    { title: 'Productos de Rehabilitación y Bienestar', key: 'rehabilitacion' },
    { title: 'Decoración y Coleccionables', key: 'decoracion' },
    { title: 'Equipos de Entrenamiento en Casa', key: 'entrenamiento' },
  ];

  const categorizedProducts = sections.reduce((acc, section) => {
    acc[section.key] = products.filter(product => product.category === section.key);
    return acc;
  }, {});

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, [categorizedProducts]);

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 cursor-pointer z-10`}
        style={{ ...style, ...arrowStyles }}
        onClick={onClick}
      >
        &#x3E;
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 cursor-pointer z-10`}
        style={{ ...style, ...arrowStyles }}
        onClick={onClick}
      >
        &#x3C;
      </div>
    );
  };

  const arrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="bg-gray-50">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl font-bold mt-10 text-gray-800">Catálogo</h1>
        <p className="mt-4 text-lg text-gray-600">Descubre nuestros productos destacados para el fútbol.</p>

        {sections.map(section => {
          const productsInCategory = categorizedProducts[section.key];
          const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: Math.min(3, productsInCategory.length),
            slidesToScroll: 1,
            autoplay: productsInCategory.length > 3,
            autoplaySpeed: 3000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: Math.min(2, productsInCategory.length),
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          };

          return (
            <div key={section.key} className="mt-10 w-full max-w-6xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{section.title}</h2>
              <div className="overflow-hidden rounded-lg shadow-lg bg-white">
                {productsInCategory.length > 0 ? (
                  productsInCategory.length <= 3 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {productsInCategory.map(product => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  ) : (
                    <Slider {...settings}>
                      {productsInCategory.map(product => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </Slider>
                  )
                ) : (
                  <p className="p-4 text-center text-gray-500">No hay productos disponibles en esta categoría</p>
                )}
              </div>
              {productsInCategory.length > 0 && (
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  Ver Más
                </button>
              )}
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

const ProductCard = ({ product }) => (
  <div className="flex-shrink-0 p-4 w-full">
    <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 h-full">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover mb-4 rounded-md"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/path-to-default-image.jpg'; // Asegúrate de tener una imagen por defecto
        }}
      />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-500 mb-2">{product.description}</p>
      <p className="text-xl font-bold text-green-600">${product.price.toFixed(2)}</p>
      <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        Agregar al Carrito
      </button>
    </div>
  </div>
);

export default Catalog;