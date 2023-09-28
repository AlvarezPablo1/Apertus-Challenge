import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { fetchProducts } from "./redux/slice/productReducer";
import Product from "./pages/Product";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() =>{
    dispatch(fetchProducts())
  })

  return (
    <>
      <Product/>
    </>
  )
}

export default App
