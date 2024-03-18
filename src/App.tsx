import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Details from './components/details/Details';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Search from './components/search/SearchPokemon';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pokemon/:pokemonName" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
