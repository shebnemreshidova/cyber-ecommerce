import CategoryList from "../components/category/CategoryList"
import FooterBanner from "../components/home/FooterBanner"
import HeroSection from "../components/home/HeroSection"
import ProductList from "../components/products/ProductList"

export const Home = () => {
  return (
    <div>
      <HeroSection/>
      <CategoryList/>
      <ProductList/>
      <FooterBanner/>
    </div>
  )
}
