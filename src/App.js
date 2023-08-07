import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import './index.css'
import Footer from './components/Footer';
import ProductMenu from './pages/ProductMenu';

function App() {
  return (
  <>
 <Navbar/>
<Home/>
 <ProductMenu/>

  <Footer/>
  
  </>
 
  );
}

export default App;
