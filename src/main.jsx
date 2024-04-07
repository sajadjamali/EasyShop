import React from 'react'
import ReactDOM from 'react-dom/client'
import Particle from './Components/Particle.jsx'
import Footer from './layout/Footer.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store/index.js'
import Aos from './Components/Aos.jsx'
import './CSS/index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Router from './router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
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
      <Aos />
      <Router />
      <Footer />
      <Particle />
    </Provider>
  </React.StrictMode>,
)