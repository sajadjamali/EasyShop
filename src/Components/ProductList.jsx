import Product from "./Product";
import { memo } from "react";

const ProductList = ({ products }) => {
    return (
        <section className="px-5 grid gap-x-5 gap-y-8 tm:grid-cols-2 ym:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5">
            {products.map((p, index) => (
                <Product key={p.id} item={p} />
            ))}
        </section>
    )
}

export default ProductList;