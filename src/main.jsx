import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './Components/Cart.jsx'
import ProductDetails from './Components/ProductDetails.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import { Provider } from 'react-redux'
import { store } from '../store/index.js'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/cart",
    element: <Cart/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/details/:productID",
    element: <ProductDetails/>,
    errorElement: <ErrorPage/>  
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
    </Provider>
  </React.StrictMode>,
)
