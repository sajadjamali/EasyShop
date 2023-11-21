import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { RandomReveal } from "react-random-reveal";

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

    return (
        <>
            <div className="text-center bg-white pt-5 cart">
                <Link to="/cart" title="cart!😍" className="relative">
                    <ShoppingCartIcon style={{ fontSize: "2.4em" }} className="bi bi-cart-check-fill text-violet-900" />
                    <span className="absolute bottom-2 right-6 font-bold bg-yellow-300 rounded-full py-1 px-3 transform translate-x-10 -translate-y-1">{count}</span>
                </Link>
            </div>
            <div className="flex flex-col py-4 space-y-4 font-bold text-center bg-rose-500 sm:flex-row sm:space-y-0 justify-evenly items-center">
                <p className="text-3xl font-bold text-white easyShop rounded-lg sm:order-2 py-1 px-3">
                    <RandomReveal isPlaying duration={1} characters="Easy Shop" />
                </p>
                <div className="lg:text-xl sm:order-3">
                    {date.toLocaleTimeString()}
                    {"  "}
                    {date.getFullYear()}
                    {" /  "}
                    {date.getDate()}
                    {" /  "}
                    {date.getMonth()}
                </div>
                <div className="font-bold text-3xl space-x-3 sm:order-1">
                    <a href="https://www.instagram.com/"><InstagramIcon style={{ fontSize: "1.3em" }} className="text-pink-950" /></a>
                    <a href="https://telegram.org/"><TelegramIcon style={{ fontSize: "1.3em" }} className="text-blue-800" /></a>
                    <a href="https://telegram.org/"><TwitterIcon style={{ fontSize: "1.3em" }} className="text-blue-800" /></a>
                </div>
            </div>
        </>
    );
}

export default Header;