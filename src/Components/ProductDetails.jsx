import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import Header from "./Header";

const ProductDetails = () => {

    const { productID } = useParams();

    const products = useSelector(state => state.products.items);
    const item = products.find(p => p.id == productID);

    return (
        <>
            <Header />
            {item ?
                <section className="flex flex-col h-screen items-center justify-center px-4 pt-10 bg-indigo-400 xl:pt-0 xl:flex-row">
                    <img src={item.image} className="h-96 shadow-2xl xl:w-4/12 rounded-md shadow-gray-500" alt="not found" />
                    <div className="mt-10 px-10 text-justify space-y-6 xl:w-8/12 xl:mt-0 font-bold">
                        <p className="text-rose-900 text-center text-xl">{item.title}</p>
                        <hr className="bg-red-800 h-1"/>
                        <p className="text-center"><span className="text-purple-900">Category:</span> {item.category}</p>
                        <hr className="bg-red-800 h-1"/>
                        <p className="text-center"><span className="text-purple-900">Price:</span> {item.price}$</p>
                        <hr className="bg-red-800 h-1"/>
                        <p className="text-center"><span className="text-purple-900">Rate:</span> {item.rating.rate}</p>
                        <hr className="bg-red-800 h-1"/>
                        <p className="text-center"><span className="text-purple-900">Count:</span> {item.rating.count}</p>
                        <hr className="bg-red-800 h-1"/>
                        <p className="font-normal"><span className="text-purple-900 font-bold">Description:</span> {item.description}</p>
                    </div>
                </section>
                : <Spinner />}
        </>
    );
}

export default ProductDetails;