import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateProduct from './pages/CreateProduct';
import Products from './pages/Products';
import EditProduct from './pages/EditProduct';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/create" element={<CreateProduct />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
