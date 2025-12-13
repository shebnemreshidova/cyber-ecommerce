import { CiSearch } from "react-icons/ci";

const HeaderSearch = () => {
  return (
    <div className="bg-gray-200 flex items-center justify-between p-3 rounded-sm">
        <CiSearch size={22}/>
        <input placeholder="Search" className="outline-none ps-2 h-full" />
    </div>
  )
}

export default HeaderSearch