import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Sectors from './components/Sector';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App() {
return (
<div className="bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
<Header />
<main>
<Hero />
<Services />
<Sectors />
<About />
<Contact />
</main>
<Footer />
</div>
);
}