import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Footer from './Layout/Footer/Footer';
import Navbar from './Layout/Navbar/Navbar';
import Products from './Pages/Products/Products';
import ProductDetail from './Pages/Products/Product_detail/ProductDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Products />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
