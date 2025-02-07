import './css/App.css'
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import Visited from './pages/Visited';
import Worldmap from './pages/Worldmap';
import Users from './pages/Users';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CountryProvider } from './contexts/CountryContext';
import { useEffect, useState } from 'react';

function App() {

  return (
    <body>
    <div>
      <div class="bg-image"></div>
    
        <div>
          <CountryProvider>
            <Navbar />

            <main class='main-content'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/visited" element={<Visited />} />
                <Route path="/worldmap" element={<Worldmap />} />
                <Route path="/users" element={<Users />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </CountryProvider>

          <Footer />
        </div>
        </div>
      </body>
      
  );
}

export default App
