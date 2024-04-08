import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";
import Order from "./Order";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = () => {

    const [productInfo, setProductInfo] = useState([]);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { productID } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const item = await axios.get(`https://fakestoreapi.com/products/${productID}`);
                const newProductInfo = [
                    { title: 'Category', value: item.data.category },
                    { title: 'Price', value: item.data.price },
                    { title: 'Rate', value: item.data.rating.rate },
                    { title: 'Count', value: item.data.rating.count }
                ];
                setProductInfo(newProductInfo);
                setProduct(item.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchProduct();
    }, []);

    if (loading) return <Spinner />;
    if (error) return <p className="text-white text-xl text-center mt-20">Fetch failed</p>;

    return (
        <div className="py-10">
            <Link to="/" className="bg-blue-600 block w-32 mx-auto text-white text-center py-1 rounded-md hover:bg-rose-500">Home</Link>
            <section className="flex flex-col items-center justify-center px-4 pt-6 xl:flex-row xl:space-x-20">
                <img src={product.image} className="h-96 mt-6 w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 rounded-md" alt="not found" />
                <div className="text-justify p-5 text-white space-y-6 mx-auto w-11/12 md:w-8/12 xl:w-6/12 bg-slate-950 rounded-md mt-5">
                    <p className="text-rose-600 text-center text-xl">{product.title}</p>
                    <div className="mx-auto space-y-5">
                        {
                            productInfo.map(p => (
                                <div key={p.title}>
                                    <div className="flex w-52 mx-auto items-center">
                                        <StarIcon fontSize="medium" className="text-yellow-500 me-1" />
                                        <p><span className="text-sky-500">{p.title}:</span> {p.value}</p>
                                    </div>
                                    <hr className="bg-white mt-2 h-[1px]" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="font-normal"><span className="text-sky-500 leading-9">
                            <StarIcon fontSize="medium" className="text-yellow-500 me-1" />
                            Description:</span> {product.description}</p>
                    </div>
                </div>
            </section>
            <div className="mt-6 w-10/12 sm:w-6/12 md:w-4/12 lg:w-2/12 mx-auto">
                {
                    product && <Order product={product} color="white" />
                }
            </div>
        </div>
    );
}

export default ProductDetails;