import './css/App.css'
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import Visited from './pages/Visited';
import Worldmap from './pages/worldmap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CountryProvider } from './contexts/CountryContext';

function App() {

  return (
    <div>
      <CountryProvider>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/visited" element={<Visited />}/>
          <Route path="/worldmap" element={<Worldmap />}/>
        </Routes>
      </main>
      </CountryProvider>
      <Footer/>
      </div>
  );
}

export default App
