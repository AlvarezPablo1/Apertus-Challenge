import { Product} from "../../types/products-types"
import ProductCard from "./ProductCard"
import "../../css/productContainer.css"


interface ProductsContainerProps{
  products: Product[]
}

const ProductContainer = ({products}: ProductsContainerProps) => {
  return (
    <div className="productContainer">
      {
            products.map((product) =>(
                <ProductCard key={product.id} product={product}/>
            ))
        }
    </div>
  )
}
export default ProductContainer