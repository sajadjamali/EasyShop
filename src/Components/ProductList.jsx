import Product from "./Product";

const ProductList = ({ products }) => {
    return (
        <section className="px-4 mb-10 sm:px-10 grid gap-x-5 gap-y-8 items-center grid-cols-1 xm:grid-cols-2 ym:grid-cols-3 lg:grid-cols-4 mx-auto lg:w-10/12 mt-16">
            {products.map(p => (
                <Product key={p.id} item={p} />
            ))}
        </section>
    )
}

export default ProductList;