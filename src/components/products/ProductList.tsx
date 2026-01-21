import { useGetProductsQuery } from '../../redux/services/adminApi';
import ProductCard from './ProductCard'

const ProductList = () => {
    const { data: products } = useGetProductsQuery();
    return (
        <div className='flex flex-wrap gap-3'>
            {
                products?.map(product => (
                    <ProductCard image={product.image as string} name={product.name} price={product.price} onBuy={() => "Bought"} />
                ))
            }
        </div>
    )
}

export default ProductList