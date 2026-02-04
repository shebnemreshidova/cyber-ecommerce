import { useForm } from "react-hook-form";
import Input from "../common/Input";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDebounce } from "../../hooks/useDEbounce";


type FormValues = {
  search: string;
};

const Search = () => {
  const { register, watch } = useForm<FormValues>({ defaultValues: { search: "" } });
  const searchText = watch('search');

  const navigate = useNavigate();
  const debouncedSearch  = useDebounce(searchText, 400);

  useEffect(() => {
    if (!debouncedSearch.trim()) return;
    navigate(`/products?search=${encodeURIComponent(debouncedSearch)}`)
  }, [debouncedSearch, navigate])


  return (
    <Input
      {...register("search")}
      placeholder="Search products..."
      type="text"
    />
  );
};

export default Search;
