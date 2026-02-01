import { useGetCategoriesQuery } from "../../redux/services/categoryApi"

const CategoryList = () => {
    const { data: category } = useGetCategoriesQuery();
 
    return (
        <div className="flex flex-wrap items-center gap-10 my-10 bg-[#FAFAFA] p-5">
            {category?.map((item) => (
                <div className="bg-[#EDEDED] flex flex-col items-center justify-center gap-3 p-4 rounded-md" key={item._id}>
                    <img src={`${item.image}`} alt={item.name} />
                    <div className="font-medium">{item.name}</div>
                </div>

            ))}
        </div>
    )
}

export default CategoryList