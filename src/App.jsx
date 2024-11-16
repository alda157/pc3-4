import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/catalog';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router basename="/pc3-4"> {/* Asegúrate de que el basename esté configurado correctamente */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;