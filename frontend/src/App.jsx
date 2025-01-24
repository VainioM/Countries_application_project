import './css/App.css'
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import Visited from './pages/Visited';
import Worldmap from './pages/Worldmap';
import Users from './pages/Users';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CountryProvider } from './contexts/CountryContext';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div class="bg-image">
      <div class='blur'></div>
    <div>
      <CountryProvider>
      <Navbar />

      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/visited" element={<Visited />}/>
          <Route path="/worldmap" element={<Worldmap />}/>
          <Route path="/users" element={<Users />}/>
        </Routes>
      </main>
      </CountryProvider>
      
      <Footer/>
      </div>
      </div>
  );
}

export default App
