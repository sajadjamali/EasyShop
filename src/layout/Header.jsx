import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../CSS/header.css';
import CustomAvatar from "../Components/CustomAvatar";

const Header = () => {

    const [date, setDate] = useState(new Date());
    const products = useSelector(state => state.products.items);
    let count = 0;
    products.filter(p => p.number !== 0);
    for (let i = 0; i < products.length; i++) {
        count = count + products[i].number;
    }

    useEffect(() => {
        const timerID = setInterval(
            () => tick(),
            1000
        );
        return () => {
            clearInterval(timerID);
        }
    }, []);

    function tick() {
        setDate(new Date());
    }

    return (
        <div className="fixed w-full pt-6 min-[300px]:py-2 px-4 sm:px-0 z-10 flex flex-col min-[300px]:flex-row space-y-3 sm:space-y-0 justify-around items-center bg-slate-950 text-center">
            <div className="flex justify-center items-center space-x-3">
                <Link to="/cart" title="cart!😍" className="group relative rounded-md cartIcon">
                    <ShoppingCartIcon fontSize="large" className="bi bi-cart-check-fill text-pink-600" />
                    <div className="bg-blue-500 h-0.5 w-10 group-hover:hidden"></div>
                    <span className="absolute bottom-2 right-6 bg-yellow-300 rounded-full py-1/2 px-2 text-rose-800 transform translate-x-8 -translate-y-4">{count}</span>
                </Link>
                <CustomAvatar />
            </div>
            <p className="text-3xl font-bold text-white easyShop rounded-lg py-1 px-3">
                <img src="/assets/imgs/logo.png" alt="not found" className="w-40" />
            </p>
            <div className="hidden min-[500px]:block space-x-2 border-2 rounded-md py-1 px-2 text-center border-cyan-400">
                <span className="text-rose-600">
                    {date.getHours()} : {date.getMinutes()}
                </span>
                <span className="text-blue-300">
                    {date.getFullYear()}
                    {" / "}
                    {date.getDate()}
                    {" / "}
                    {date.getMonth()}
                </span>
            </div>
        </div >
    );
}

export default Header;