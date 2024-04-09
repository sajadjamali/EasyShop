import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Particle from "../Components/Particle";
import Aos from '../Components/Aos.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
    return (
        <>
            <div className="h-screen flex flex-col">
                <Header />
                <div className="mt-[107px]">
                    <Outlet />
                </div>
                <Footer />
            </div>
            <Particle />
            <Aos />
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
};

export default MainLayout;