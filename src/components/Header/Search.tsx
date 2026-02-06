import { useForm } from "react-hook-form";
import Input from "../common/Input";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";

type FormValues = {
  search: string;
};

const Search = () => {
  const { register, watch } = useForm<FormValues>({ defaultValues: { search: "" } });
  const searchText = watch('search');
  const navigate = useNavigate();
  const debouncedSearch = useDebounce(searchText, 400);

  useEffect(() => {
    if (!debouncedSearch.trim()) return;
    navigate(`/products?search=${encodeURIComponent(debouncedSearch)}`)
  }, [debouncedSearch, navigate])

  return (
    <div className='relative w-full'>
      <div className='relative'>
        <Input
          {...register("search")}
          placeholder="Search products..."
          type="text"
          className='border border-gray-300 
          rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
        />
      </div>
    </div>
  );
};

export default Search;