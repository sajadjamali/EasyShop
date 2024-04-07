import Header from "../layout/Header";
import { useSelector, useDispatch } from "react-redux";
import { decreaseToZero } from "../../slices/productSlice";
import notFound from "../assets/gif/notFound.gif";
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
            <Header />
            <section className="bg-slate-300 py-5">
                <div className="text-center font-bold space-y-3 justify-center md:space-x-12 md:space-y-0 md:flex">
                    <div>total number of products: <span className="text-rose-700 text-xl">{totalNumber}</span></div>
                    <div>total price of products: <span className="text-rose-700 text-xl">{totalPrice}$</span></div>
                </div>
                <button onClick={handleClearCart} className="m-auto block mt-5 text-white ring-4 ring-red-500 bg-sky-600 w-10/12 min-[450px]:w-6/12 md:w-2/12 py-3 font-bold text-xl rounded-lg">Clear Cart</button>
            </section>
            {
                cartItems.length > 0 ?
                    <section className="px-5 grid gap-x-5 gap-y-8 tm:grid-cols-2 ym:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-7">
                        {cartItems.map(p => <Product key={p.id} item={p} />)}
                    </section>
                    :
                    <div className="flex flex-col items-center mt-9"><img src={notFound} alt="not found" /><p className="font-bold text-2xl text-white mt-4">cart is empty...🤦‍♂️</p></div>
            }
            <Particle />
        </>
    );
}

export default Cart;