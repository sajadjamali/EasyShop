import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import Header from "./Header";

const ProductDetails = () => {

    const { productID } = useParams();
    // const products = useSelector(state => state.products.all);

    const products = useSelector(state => state.products.items);
    const item = products.find(p => p.id == productID);

    return (
        <>
        <Header/>
        {item ?
        <section className="flex flex-col items-center justify-center mt-5 px-4 xl:flex-row">
            <img src={item.image} className="h-96 shadow-2xl xl:w-4/12 shadow-gray-500" alt="not found" />
            <div className="mt-10 px-10 text-justify space-y-6 xl:w-8/12 xl:mt-0 font-bold">
                <p className="text-rose-900 text-center text-xl">{item.title}</p>
                <p className="text-center"><span className="text-blue-800">Category:</span> {item.category}</p>
                <p className="text-center"><span className="text-blue-800">Price:</span> {item.price}$</p>
                <p className="text-center"><span className="text-blue-800">Rate:</span> {item.rating.rate}</p>
                <p className="text-center"><span className="text-blue-800">Count:</span> {item.rating.count}</p>
                <p className="font-normal"><span className="text-blue-800 font-bold">Description:</span> {item.description}</p>
            </div>
        </section>
        : <Spinner/>}
        </> 
    );
}

export default ProductDetails;