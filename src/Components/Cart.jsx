import { useSelector, useDispatch } from "react-redux";
import { decreaseToZero } from "../redux/slices/productSlice";
import notFound from "/assets/gif/notFound.gif";
import Product from "./Product";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);
    const cartItems = products.filter(p => p.number !== 0);
    let totalNumber = 0;
    let totalPrice = 0;
    cartItems.map(p => totalNumber += p.number);
    cartItems.map(p => totalPrice += p.price * p.number);
    totalPrice = Math.round(totalPrice);

    const handleClearCart = () => {
        cartItems.map(p => dispatch(decreaseToZero(p)));
        toast.dismiss();
        toast.info("cart cleared👍");
    }

    return (
        <>
            <div className="py-5 border-t-[1px] border-gray-50 bg-slate-950 text-center text-white space-y-3 flex flex-col justify-center items-center md:space-y-0 md:flex-row md:space-x-5 lg:space-x-10">
                <Link to="/" className="bg-blue-600 px-3 py-1 rounded-md hover:bg-rose-700">Home</Link>
                <p>total number of products: <span className="text-rose-500 text-lg">{totalNumber}</span></p>
                <button style={{ transition: 'transform 0.2s' }} onClick={handleClearCart} className="text-white ring-2 ring-sky-500 bg-rose-600 w-44 py-2 text-lg rounded-lg hover:scale-105">Clear Cart</button>
                <p>total price of products: <span className="text-rose-500 text-lg">{totalPrice}$</span></p>
            </div>
            {
                cartItems.length > 0 ?
                    <section className="px-5 grid gap-x-5 gap-y-8 tm:grid-cols-2 ym:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-7">
                        {cartItems.map(p => <Product key={p.id} item={p} />)}
                    </section>
                    :
                    <div className="flex flex-col w-6/12 md:w-3/12 mx-auto items-center md:text-lg mt-10"><img src={notFound} alt="not found" /><p className="text-center text-white mt-4">cart is empty...🤦‍♂️</p></div>
            }
        </>
    );
}

export default Cart;