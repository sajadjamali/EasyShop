import { useRef } from "react";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../slices/cartSlice";
import { increaseProduct, decreaseProduct, decreaseToZero } from "../../slices/productSlice";
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

const Product = ({ item }) => {

    const buttonFlag = useRef(false);
    const dispatch = useDispatch();

    if (item.number == 0) {
        buttonFlag.current = false;
    }
    else {
        buttonFlag.current = true;
    }

    const handleAddTOcart = () => {
        dispatch(addToCart(item));
        dispatch(increaseProduct(item));
    }

    const handleRemoveCart = () => {
        dispatch(removeFromCart(item));
        dispatch(decreaseToZero(item));
    }

    const handleIncreaseCart = () => {
        dispatch(increaseProduct(item));
    }

    const handleDecreaseCart = () => {
        dispatch(decreaseProduct(item));
    }

    return (
        <>
            <article className="w-11/12 xm:w-8/12 tm:w-full m-auto rounded-xl border-2 border-gray-200 bg-white p-2 hover:scale-105">
                <img src={item.image} className="h-40 m-auto" alt="not found" />
                <p className="font-bold text-center mt-3 text-violet-900">{splitWords(item.title, 2)}</p>
                <p className="text-center mt-2"><span className="text-rose-500 font-bold">Category: </span>{item.category}</p>
                <p className="font-bold text-center mt-2"><span className="text-rose-500 font-bold">Price: </span>{item.price}$</p>
                <div className="text-center my-4">
                    <Link to={`/details/${item.id}`} className="bg-lime-600 py-2 px-3 rounded-xl block font-bold">Details</Link>
                </div>

                {
                    buttonFlag.current ?
                        <div className="space-x-4 text-center">
                            <button onClick={handleDecreaseCart} className="text-xl bg-blue-600 rounded-lg pt-1 px-4">-</button>
                            <span className="font-bold text-xl">{item.number}</span>
                            <button onClick={handleIncreaseCart} className="text-xl bg-red-600 rounded-lg pt-1 px-3">+</button>
                            <button onClick={handleRemoveCart} className="text-xl block w-10/12 bg-green-600 rounded-lg mt-3 pt-1"><DeleteIcon className="text-white" /></button>
                        </div>
                        :
                        <button onClick={handleAddTOcart} className="font-bold bg-cyan-500 py-2 px-4 w-full rounded-lg">Add to cart</button>
                }
            </article>
        </>
    );
}

export default Product;

const splitWords = (text, numWords) => {
    const words = text.split(' ')
    let part = '';
    words.forEach((word, idx) => {
        if (idx < numWords) {
            part += ' ' + word
        }
    })
    return part.trim();
}
