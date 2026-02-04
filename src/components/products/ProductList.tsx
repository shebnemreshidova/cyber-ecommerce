import { useState } from 'react';
import { useGetProductsQuery } from '../../redux/services/productApi';
import ProductCard from './ProductCard'
import { useNavigate, useSearchParams } from 'react-router-dom';

const ProductList = () => {
    const [searchParams] = useSearchParams();
    const filter = searchParams.get('filter');

    const { data } = useGetProductsQuery(
        {
            filter: filter || undefined,
            limit: 8
        });
    const [selectedCat, setSelectedCat] = useState('new-arrival');
    const navigate = useNavigate();
    const handleSelect = (selected: string) => {
        setSelectedCat(selected);
        navigate(`/?filter=${selected}`)
    }

    return (
        <div>
            <div className='flex gap-3 py-5 items-center'>
                <div className={`${selectedCat === 'new-arrival' ? ' !text-[#00ed64] border-b border-black-500' : ''} text-[#8B8B8B] cursor-pointer`} onClick={() => handleSelect('new-arrival')}>New Arrival</div>
                <div className={`${selectedCat === 'bestseller' ? ' !text-[#00ed64] border-b border-black-500' : ''} text-[#8B8B8B] cursor-pointer`} onClick={() => handleSelect('bestseller')}>Bestseller</div>
                <div className={`${selectedCat === 'featured-products' ? ' !text-[#00ed64] border-b border-black-500' : ''} text-[#8B8B8B] cursor-pointer`} onClick={() => handleSelect('featured-products')}>Featured Products</div>
            </div>
            <div className='flex flex-wrap gap-3'>
                {
                    data?.products?.map(product => (
                        <ProductCard key={product._id} {...product} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList