
import { Edit, Trash } from "lucide-react";
import Button from "../common/Button";
import { useGetCategoriesQuery } from "../../redux/services/categoryApi";

const CategoryTable = () => {
  const { data: category, isLoading } = useGetCategoriesQuery();
  if (isLoading) return <p>Loading category...</p>;

  return (
    <div className="p-4">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {category?.map((cat, index) => (
            <tr key={cat._id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">
                <img
                  src={`${cat.image}`}
                  alt={cat.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border px-4 py-2">{cat.name}</td>
             
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

export default CategoryTable;
