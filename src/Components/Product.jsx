import { Link } from "react-router-dom";
import { splitWords } from "../utils";
import Order from "./Order";

const Product = ({ item }) => {
    return (
        <article id="product" data-aos="flip-right" className="m-auto w-full h-full rounded-xl border-2 border-gray-200 bg-white p-2">
            <img src={item.image} className="h-40 m-auto" alt="not found" />
            <p className="font-bold text-center mt-3 text-violet-900">{splitWords(item.title, 2)}</p>
            <p className="text-center mt-2"><span className="text-rose-500 font-bold">Category: </span>{item.category}</p>
            <p className="font-bold text-center mt-2"><span className="text-rose-500 font-bold">Price: </span>{item.price}$</p>
            <div className="text-center my-4">
                <Link to={`/details/${item.id}`} className="bg-lime-600 py-2 px-3 rounded-xl block font-bold">Details</Link>
            </div>
            <Order product={item} color="text-black" />
        </article>
    );
}

export default Product;