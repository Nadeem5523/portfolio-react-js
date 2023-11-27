import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
// import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';




import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter> 
   
  <Nav />

   
      <Routes> 
    <Route path="/" element={<Home></Home>} />
    <Route path="/About" element={<About></About>} />
    <Route path="/Service" element={<Service></Service>} />
    <Route path="/Portfolio" element={<Portfolio></Portfolio>} />
    <Route path="/Contact" element={<Contact></Contact>} />
    </Routes> 
      </BrowserRouter> 
    {/* <Footer /> */}
   
    {/* <Home />
    <About />
    <Service />
    <Portfolio />
    <Contact /> */}
  </React.StrictMode>
);
reportWebVitals();
