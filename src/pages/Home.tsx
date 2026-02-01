import CategoryList from "../components/category/CategoryList"
import ProductList from "../components/products/ProductList"

export const Home = () => {
  return (
    <div className="px-10">
      <CategoryList/>
      <ProductList/>
    </div>
  )
}
