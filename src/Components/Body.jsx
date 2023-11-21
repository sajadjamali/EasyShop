import { useSelector, useDispatch } from "react-redux";
import { changeInputValue, changeSelectValue } from "../../slices/filterValueSlice";
import { useState, useRef, useEffect } from "react";
import Spinner from "./Spinner";
import ProductList from "./ProductList";
import notFound from "../assets/gif/notFound.gif";
import HoverRating from "./HoverRating";
import Carsoaul from "./Carsoaul";

const Body = () => {

    const dispatch = useDispatch();
    const selectRef = useRef();
    const inputRef = useRef();
    const products = useSelector(state => state.products);
    const filterValue = useSelector(state => state.filterValue);
    const [renderedProducts, setRenderedProducts] = useState([]);
    const [count, setCount] = useState(0);
    if (products.items.length > 0 && renderedProducts.length === 0 && count < 2) {
        setCount(count => count + 1);
    }

    useEffect(() => {
        handle();
    }, [products.items]);

    const handle = () => {
        let temp = [];
        const inputText = inputRef.current.value.toLowerCase();
        const category = selectRef.current.value;
        dispatch(changeInputValue(inputText));
        dispatch(changeSelectValue(category));
        if (category === "All") {
            temp = products.items;
        } else if (category === "Electronics") {
            temp = products.items.filter(p => p.category === "electronics");
        } else if (category === "Jewelery") {
            temp = products.items.filter(p => p.category === "jewelery");
        } else if (category === "Men's Clothing") {
            temp = products.items.filter(p => p.category === "men's clothing");
        } else {
            temp = products.items.filter(p => p.category === "women's clothing");
        }
        temp = temp.filter(p => p.title.toLowerCase().startsWith(inputText));
        setRenderedProducts(temp);
    }

    return (
        <>
            <Carsoaul />
            <section className="my-7 mx-auto text-center">
                <input value={filterValue.inputValue} ref={inputRef} onChange={handle} type="text" placeholder="Search in products..." className="border-t-2 border-b-2 border-s-2 border-gray-500 h-12 rounded-s-lg w-8/12 md:w-7/12 lg:w-5/12 focus:outline-none ring-4 placeholder:text-center" />
                <select defaultValue={filterValue.selectValue} value={filterValue.seletValue} ref={selectRef} onChange={handle} className="border-t-2 border-r-2 border-b-2 border-gray-500 h-12 rounded-e-lg bg-white border-s text-center w-3/12 ring-4">
                    <option value="All">All</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Jewelery">Jewelery</option>
                    <option value="Men's Clothing">Men's Clothing</option>
                    <option value="Women's Clothing">Women's Clothing</option>
                </select>
            </section>
            <HoverRating />
            {renderedProducts.length > 0 ? <ProductList products={renderedProducts} /> : (count < 2 ? <Spinner /> : <div className="flex flex-col items-center mt-9"><img src={notFound} alt="not found" /><p className="font-bold text-2xl text-white mt-4">not found...🤦‍♂️</p></div>)}
        </>
    );
}

export default Body;