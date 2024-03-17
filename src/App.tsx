import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className='text-danger'>hello from home</h1>} />
        <Route path="/search" element={<h1 className='text-info'>hello form search</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
