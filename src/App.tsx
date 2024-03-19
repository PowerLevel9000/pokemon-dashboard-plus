import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Details from './components/details/Details';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Search from './components/search/SearchPokemon';
import Favorite from './components/faviroute/Favorite';
import Default404 from './components/default/DefaultPage404';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/pokemon/:pokemonName" element={<Details />} />
        <Route path="*" element={<Default404/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
