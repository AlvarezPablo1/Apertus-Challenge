import axios from "axios"
import { InitialState } from "../redux/slice/productReducer"
import { PRODUCT_API, PRODUCT_BY_CATEGORY_API } from "./api"


const mapProduct = (productToMap : any) => {
  return productToMap.map((product : any) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    category: product.category,
    image: product.image
  }))
}

export const fetchProducts = async (url: string) => {
  const response = await axios(url)  
    .then((response) => response.data)
    
  const data: InitialState = {
    isLoading: false,
    products: mapProduct(response),
  }
  
  return data
}

export const fetchProductsByCategories= async(url: string) =>{
  const response = await axios(url)
    .then((response) => response.data)

    const data: InitialState={
      isLoading: false,
      products: mapProduct(response)
    }

    return data
}


export const getProducts = async () => {
  return fetchProducts(PRODUCT_API)
}

export const getProductsByCategories =async (category: string) => {
  return fetchProductsByCategories(`${PRODUCT_BY_CATEGORY_API}${category}`)
}