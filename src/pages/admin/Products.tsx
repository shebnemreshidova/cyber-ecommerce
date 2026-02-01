import Button from "../../components/common/Button";
import CreateProduct from "../../components/products/CreateProduct";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import ProductTable from "../../components/products/ProductTable";
import CreateCategory from "../../components/category/CreateCategory";
import CategoryTable from "../../components/category/CategoryTable";
const Products = () => {    
    const [isModalOpen, setIsModalOpen] = useState('');
    return (
        <div className="p-4">
           <div className="flex justify-between items-center">
             <h1 className="text-2xl mb-4">Products</h1>
               <div className="flex gap-2 items-center">
                 <Button variant="primary" onClick={() => setIsModalOpen('product')}>
                 <PlusCircle/>   Add Product
                </Button>
                <Button variant="primary" onClick={() => setIsModalOpen('category')}>
                 <PlusCircle/>   Add Category
                </Button>
               </div>
           </div>
            <ProductTable />
            <CategoryTable />
            <CreateProduct setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen==='product'} />
            <CreateCategory setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen==='category'} />
        </div>
    );
};

export default Products;
