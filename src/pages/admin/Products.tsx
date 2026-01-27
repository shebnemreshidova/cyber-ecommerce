import Button from "../../components/common/Button";
import CreateProduct from "../../components/products/CreateProduct";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import ProductTable from "../../components/products/ProductTable";
const Products = () => {    
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="p-4">
           <div className="flex justify-between items-center">
             <h1 className="text-2xl mb-4">Products</h1>
                <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                 <PlusCircle/>   Add Product
                </Button>
           </div>
            <ProductTable />
            <CreateProduct setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </div>
    );
};

export default Products;
