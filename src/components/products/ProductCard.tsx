import { Product } from "../../types/products-types";
import "../../css/productCard.css"
import { useState } from "react";

interface ProductsProps {
  product: Product;
}

const ProductCard = ({ product }: ProductsProps) => {

  const [drop, setDrop] = useState(false)

  return (
    <div className={drop? "drop": "productListContainer"}>
      <section className="productDetail">
      <h5>{product.title}</h5>
      <img src={product.image} alt={product.title} />
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p>{product.price}$</p>
      </section>
      <section className="deleteBtn">
        <button onClick={()=>setDrop(!drop)}>Eliminar</button>
      </section>
    </div>
  );
};
export default ProductCard;
