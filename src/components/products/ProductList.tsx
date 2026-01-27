import { useGetProductsQuery } from '../../redux/services/productApi';
import ProductCard from './ProductCard'

const ProductList = () => {
    const { data: products,isLoading,error } = useGetProductsQuery();
    return (
        <div className='flex flex-wrap gap-3'>
            {
                products?.map(product => (
                    <ProductCard key={product._id} {...product} />
                ))
            }
        </div>
    )
}

export default ProductList