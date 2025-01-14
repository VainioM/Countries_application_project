import './css/App.css'
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import Visited from './pages/Visited';
import Worldmap from './pages/worldmap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/visited" element={<Visited />}/>
          <Route path="/worldmap" element={<Worldmap />}/>
        </Routes>
      </main>
      <Footer/>
      </div>
  );
}

export default App
