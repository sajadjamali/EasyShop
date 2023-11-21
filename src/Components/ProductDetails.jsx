import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import Header from "./Header";

const ProductDetails = () => {

    const { productID } = useParams();

    const products = useSelector(state => state.products.items);
    const item = products.find(p => p.id == productID);

    return (
        <div className=" bg-indigo-300 h-full xl:h-screen pb-10">
            <Header />
            {item ?
                <section className="flex flex-col items-center justify-center px-4 pt-8 xl:flex-row">
                    <img src={item.image} className="h-96 me-5 xl:w-4/12 rounded-md" alt="not found" />
                    <div className="text-justify space-y-6 bg-indigo-300 mt-5 font-bold">
                        <p className="text-rose-900 text-center text-xl">{item.title}</p>
                        <hr className="bg-red-800 h-1" />
                        <p className="text-center"><span className="text-purple-950">Category:</span> {item.category}</p>
                        <hr className="bg-red-800 h-1" />
                        <p className="text-center"><span className="text-purple-950">Price:</span> {item.price}$</p>
                        <hr className="bg-red-800 h-1" />
                        <p className="text-center"><span className="text-purple-950">Rate:</span> {item.rating.rate}</p>
                        <hr className="bg-red-800 h-1" />
                        <p className="text-center"><span className="text-purple-950">Count:</span> {item.rating.count}</p>
                        <hr className="bg-red-800 h-1" />
                        <p className="font-normal"><span className="text-purple-950 font-bold">Description:</span> {item.description}</p>
                    </div>
                </section>
                : <Spinner />}
        </div>
    );
}

export default ProductDetails;