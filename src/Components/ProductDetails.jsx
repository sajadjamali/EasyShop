import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

const ProductDetails = () => {

    const { productID } = useParams();

    const products = useSelector(state => state.products.items);
    const item = products.find(p => p.id == productID);

    return (
        <div className="py-5">
            <Link to="/" className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-rose-500">Home</Link>
            {item ?
                <section className="flex flex-col items-center justify-center px-4 pt-8 xl:flex-row xl:space-x-20">
                    <img src={item.image} className="h-96 xl:w-4/12 rounded-md" alt="not found" />
                    <div className="text-justify divide-y-[1px] p-5 text-white space-y-6 xl:w-6/12 bg-slate-950 rounded-md mt-5">
                        <p className="text-rose-700 text-center text-xl">{item.title}</p>
                        {/* <hr className="bg-white h-[1px]" /> */}
                        <div className="flex justify-center items-center">
                            <StarIcon fontSize="medium" className="text-yellow-500" />
                            <p><span className="text-sky-500">Category:</span> {item.category}</p>
                        </div>
                        {/* <hr className="bg-white h-[1px]" /> */}
                        <div className="flex justify-center items-center">
                            <StarIcon fontSize="medium" className="text-yellow-500" />
                            <p className="text-center"><span className="text-sky-500">Price:</span> {item.price}$</p>
                        </div>
                        {/* <hr className="bg-white h-[1px]" /> */}
                        <div className="flex justify-center items-center">
                            <StarIcon fontSize="medium" className="text-yellow-500" />
                            <p className="text-center"><span className="text-sky-500">Rate:</span> {item.rating.rate}</p>
                        </div>
                        {/* <hr className="bg-white h-[1px]" /> */}
                        <div className="flex justify-center items-center">
                            <StarIcon fontSize="medium" className="text-yellow-500" />
                            <p className="text-center"><span className="text-sky-500">Count:</span> {item.rating.count}</p>
                        </div>
                        {/* <hr className="bg-white h-[1px]" /> */}
                        <div className="flex justify-center items-center">
                            <p className="font-normal"><span className="text-sky-500 leading-9">
                                <StarIcon fontSize="medium" className="text-yellow-500" />
                                Description:</span> {item.description}</p>
                        </div>

                    </div>
                </section>
                : <Spinner />}
        </div>
    );
}

export default ProductDetails;