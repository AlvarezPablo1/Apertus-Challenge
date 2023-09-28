import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Product } from "../../types/products-types"
import { getProducts, getProductsByCategories } from "../../services/products-query"

export interface InitialState{
  isLoading: boolean
  products: Product[]
  category?: string
}

const initialState: InitialState = {
  isLoading: true,
  products: [],
  category:""
}

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async() => {
    const response = await getProducts()
    return response
  }
)

export const fetchProductsByCategories = createAsyncThunk(
  "product/fetchProductsByCategories",
  async(category:string)=>{
    const response= await getProductsByCategories(category)
    return response
  }
)

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers:{},
  extraReducers:(builder) =>{
      builder
      .addCase(fetchProducts.pending, (state) =>{
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.products = action.payload.products;
      })

      .addCase(fetchProductsByCategories.pending, (state) =>{
        state.isLoading = true
      })  
      .addCase(fetchProductsByCategories.fulfilled, (state, action) =>{
        state.isLoading = false
        state.products = action.payload.products
      })
    }
})


export default productSlice.reducer