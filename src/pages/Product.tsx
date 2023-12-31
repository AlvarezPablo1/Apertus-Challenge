import Loading from "../components/Loading";
import ProductContainer from "../components/products/ProductContainer"
import FilterByCategories from "../components/products/FilterByCategories";
import { useAppSelector } from "../redux/hooks"

const Product = () => {
  const {products, isLoading} = useAppSelector((state) => state.product)

  console.log(products);
  
  return (
  <>
    <div style={{marginBottom: "4rem"}}>
      <FilterByCategories/>
    </div>
    <div>
      {isLoading ? 
      (<div style={{textAlign: "center"}}>
        <Loading/>
        </div>
      ):
      (
        <ProductContainer products={products}/>
      )}
    </div>
  </>
  )
}
export default Product