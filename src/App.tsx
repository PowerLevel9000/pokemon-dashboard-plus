import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Details from './components/details/Details';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<h1 className='text-info'>hello form search</h1>} />
        <Route path="/pokemon/:pokemonName" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
