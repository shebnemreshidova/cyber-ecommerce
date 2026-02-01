import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../redux/services/categoryApi"

const CategoryList = () => {
    const { data: category } = useGetCategoriesQuery();
    const navigate = useNavigate();
  
    return (
        <div className="flex flex-wrap items-center gap-10 my-10 bg-[#FAFAFA] p-5">
            {category?.map((item) => (
                <div onClick={() => navigate(`/products?category=${item.name}`)} className="bg-[#EDEDED] flex flex-col items-center justify-center gap-3 p-4 rounded-md" key={item._id}>
                    <img src={`${item.image}`} alt={item.name} />
                    <div className="font-medium">{item.name}</div>
                </div>

            ))}
        </div>
    )
}

export default CategoryList