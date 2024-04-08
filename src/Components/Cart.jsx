import { useSelector, useDispatch } from "react-redux";
import { decreaseToZero } from "../redux/slices/productSlice";
import notFound from "/assets/gif/notFound.gif";
import Product from "./Product";
import Particle from './Particle'
import { toast } from "react-toastify";

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
            <div className="py-5 bg-slate-950 text-center text-white space-y-3 flex flex-col justify-center items-center md:space-y-0 md:flex-row md:space-x-10">
                <p>total number of products: <span className="text-rose-500 text-xl">{totalNumber}</span></p>
                <button onClick={handleClearCart} className="text-white ring-2 ring-sky-500 bg-rose-600 w-8/12 min-[400px]:w-5/12 sm:w-56 py-2 text-xl rounded-lg">Clear Cart</button>
                <p>total price of products: <span className="text-rose-500 text-xl">{totalPrice}$</span></p>
            </div>
            {
                cartItems.length > 0 ?
                    <section className="px-5 grid gap-x-5 gap-y-8 tm:grid-cols-2 ym:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-7">
                        {cartItems.map(p => <Product key={p.id} item={p} />)}
                    </section>
                    :
                    <div className="flex flex-col w-4/12 md:w-3/12 mx-auto items-center mt-9"><img src={notFound} alt="not found" /><p className="font-bold text-2xl text-white mt-4">cart is empty...🤦‍♂️</p></div>
            }
        </>
    );
}

export default Cart;