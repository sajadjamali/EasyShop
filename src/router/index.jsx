import MainLayout from '../layout/MainLayout';
import Home from '../Components/Home';
import Cart from '../Components/Cart';
import ProductDetails from '../Components/ProductDetails';
import ErrorPage from '../Components/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/details/:productID",
        element: <ProductDetails />,
      }
    ]
  }
]);