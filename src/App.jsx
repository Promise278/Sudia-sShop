import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Hero from './components/Hero';
import { products } from './utils/product';
import Productpage from './components/projects/productpage';


function App() {

  return (
   <div>
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Hero products={products} />} />
        <Route path="/productpage/:id" element={<Productpage products={products} />} />
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
