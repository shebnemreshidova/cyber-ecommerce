import { useState } from 'react';
import { useGetProductsQuery } from '../../redux/services/productApi';
import ProductCard from './ProductCard'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { filters } from '../../constant';
import { SkeletonCard } from '../common/SkeletonCard';

const ProductList = () => {
    const [searchParams] = useSearchParams();
    const filter = searchParams.get('filter');

    const { data, isLoading } = useGetProductsQuery(
        {
            filter: filter || 'new-arrival',
            limit: 8
        });
    const [selectedCat, setSelectedCat] = useState(filter || 'new-arrival');
    const navigate = useNavigate();

    const handleSelect = (selected: string) => {
        setSelectedCat(selected);
        navigate(`/?filter=${selected}`)
    }

    return (
        <div className='px-4 sm:px-8 md:px-16 lg:px-20 py-8 md:py-12'>
            <div className='flex flex-wrap gap-4 sm:gap-6 py-6 md:py-8 border-b border-gray-200'>
                {filters.map((filterItem) => (
                    <button
                        key={filterItem.id}
                        onClick={() => handleSelect(filterItem.id)}
                        className={`relative text-sm sm:text-base md:text-lg font-medium transition-colors pb-2 ${
                            selectedCat === filterItem.id
                                ? 'text-blue-500'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {filterItem.label}
                        {selectedCat === filterItem.id && (
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"></div>
                        )}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 py-8 md:py-10'>
                {isLoading ? (
                    Array(8).fill(0).map((_, i) => (
                        <div key={i}>
                            <SkeletonCard />
                        </div>
                    ))
                ) : data?.products && data.products.length > 0 ? (
                    data.products.map((product) => (
                        <ProductCard key={product._id} {...product} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12">
                        <p className="text-gray-500 text-lg">No products found</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductList;