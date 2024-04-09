import { useRef } from "react";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import { increaseProduct, decreaseProduct, decreaseToZero } from "../redux/slices/productSlice";
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

const Order = ({ product, color }) => {

    const buttonFlag = useRef(false);
    const dispatch = useDispatch();

    if (product.number == 0) {
        buttonFlag.current = false;
    }
    else {
        buttonFlag.current = true;
    }

    const handleAddTOcart = () => {
        dispatch(addToCart(product));
        dispatch(increaseProduct(product));
    }

    const handleRemoveCart = () => {
        dispatch(removeFromCart(product));
        dispatch(decreaseToZero(product));
    }

    const handleIncreaseCart = () => {
        dispatch(increaseProduct(product));
    }

    const handleDecreaseCart = () => {
        dispatch(decreaseProduct(product));
    }

    return (
        <div>
            {
                buttonFlag.current ?
                    <div className="text-center">
                        <div className="space-x-3">
                            <button onClick={handleDecreaseCart} className="text-lg bg-blue-600 rounded-lg pt-1 px-4">-</button>
                            <span style={{ color: `${color}` }} className='font-bold text-lg ring-2 ring-yellow-700 rounded-full pt-1 px-2.5'>{product.number}</span>
                            <button onClick={handleIncreaseCart} className="text-lg bg-red-600 rounded-lg pt-1 px-3">+</button>
                        </div>
                        <button onClick={handleRemoveCart} className="text-lg block w-10/12 mx-auto bg-green-600 rounded-lg mt-3 pt-1"><DeleteIcon className="text-white" /></button>
                    </div>
                    :
                    <button onClick={handleAddTOcart} className="bg-cyan-500 font-bold py-2 px-4 w-full rounded-lg">Add to cart</button>
            }
        </div>
    )
}

export default Order;