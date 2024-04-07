import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Cart from '../Components/Cart';
import ProductDetails from '../Components/ProductDetails';
import ErrorPage from '../Components/ErrorPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:productID" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
