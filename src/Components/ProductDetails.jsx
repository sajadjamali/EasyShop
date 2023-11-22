import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import Header from "./Header";
import StarIcon from '@mui/icons-material/Star';

const ProductDetails = () => {

    const { productID } = useParams();

    const products = useSelector(state => state.products.items);
    const item = products.find(p => p.id == productID);

    return (
        <div className=" bg-indigo-200 h-full xl:h-screen pb-10">
            <Header />
            {item ?
                <section className="flex flex-col items-center justify-center px-4 pt-8 xl:flex-row">
                    <img src={item.image} className="h-96 xl:w-4/12 rounded-md" alt="not found" />
                    <div className="text-justify space-y-6 xl:w-6/12 bg-indigo-200 mt-5 font-bold">
                        <p className="text-rose-900 text-center text-xl">{item.title}</p>
                        <hr style={{ height: "2px" }} className="bg-red-800" />
                        <div className="flex justify-center items-center">
                            <StarIcon fontSize="medium" className="text-yellow-800" />
                            <p><span className="text-purple-950">Category:</span> {item.category}</p>
                        </div>
                        <hr style={{ height: "2px" }} className="bg-red-800" />
                        <div className="flex justify-center items-center">
                            <StarIcon fontSize="medium" className="text-yellow-800" />
                            <p className="text-center"><span className="text-purple-950">Price:</span> {item.price}$</p>
                        </div>
                        <hr style={{ height: "2px" }} className="bg-red-800" />
                        <div className="flex justify-center items-center">
                            <StarIcon fontSize="medium" className="text-yellow-800" />
                            <p className="text-center"><span className="text-purple-950">Rate:</span> {item.rating.rate}</p>
                        </div>
                        <hr style={{ height: "2px" }} className="bg-red-800" />
                        <div className="flex justify-center items-center">
                            <StarIcon fontSize="medium" className="text-yellow-800" />
                            <p className="text-center"><span className="text-purple-950">Count:</span> {item.rating.count}</p>
                        </div>
                        <hr style={{ height: "2px" }} className="bg-red-800" />
                        <div className="flex justify-center items-center">
                            <p className="font-normal"><span className="text-purple-950 font-bold">
                                <StarIcon fontSize="medium" className="text-yellow-800" />
                                Description:</span> {item.description}</p>
                        </div>

                    </div>
                </section>
                : <Spinner />}
        </div>
    );
}

export default ProductDetails;