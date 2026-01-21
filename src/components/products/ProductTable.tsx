

import { Edit, Trash } from "lucide-react";
import { useGetProductsQuery } from "../../redux/services/adminApi";
import Button from "../common/Button";

const ProductTable = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  if (isLoading) return <p>Loading products...</p>;

  return (
    <div className="p-4">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Order</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">
                <img
                  src={`http://localhost:5000/uploads/${product.image}`}
                  alt={product.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{product.order}</td>
              <td className="border px-4 py-2">{product.description}</td>
              <td className="border px-4 py-2 flex gap-2">
                <Button
                  variant="secondary"
                >
                  <Edit/>
                </Button>
                <Button
                  variant="danger"
                 
                ><Trash/>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
