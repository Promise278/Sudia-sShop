import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Hero from './components/Hero';
import { products } from './utils/product';

function App() {

  return (
   <div>
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Hero products={products} />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
