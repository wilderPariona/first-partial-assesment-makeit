import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components';
import { Home, About } from './pages';
import { ProductDetails } from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
