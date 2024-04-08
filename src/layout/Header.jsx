import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { RandomReveal } from "react-random-reveal";
import '../CSS/header.css';

const Header = () => {

    const [date, setDate] = useState(new Date());
    const items = useSelector(state => state.products.items);
    let count = 0;
    items.filter(p => p.number !== 0);
    for (let i = 0; i < items.length; i++) {
        count = count + items[i].number;
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
    // w-full fixed top-0
    return (
        <div className="py-7 z-10 flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-around items-center bg-slate-950 text-center">
            <Link to="/cart" title="cart!😍" className="group relative rounded-md cartIcon">
                <ShoppingCartIcon fontSize="large" className="bi bi-cart-check-fill text-pink-600" />
                <div className="bg-blue-500 h-0.5 w-10 group-hover:hidden"></div>
                <span className="absolute bottom-2 right-6 font-bold bg-yellow-300 rounded-full py-1 px-3 text-rose-800 transform translate-x-10 -translate-y-2">{count}</span>
            </Link>
            <p className="text-3xl font-bold text-white easyShop rounded-lg py-1 px-3">
                <RandomReveal isPlaying duration={2} characters="Easy Shop" />
            </p>
            <div className="space-x-2 border-2 rounded-md p-1 border-cyan-400">
                <span className="text-rose-600">
                    {date.getHours()} : {date.getMinutes()}
                </span>
                <span className="text-blue-500">
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