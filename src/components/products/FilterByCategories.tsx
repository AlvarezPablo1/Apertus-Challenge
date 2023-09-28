import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchProductsByCategories } from "../../redux/slice/productReducer";
import "../../css/select.css"
const FilterByCategories = () => {

  const category = useAppSelector((state) => state.product.category)
    const dispatch = useAppDispatch();

    
    useEffect(() =>{
        if(category != undefined){
            dispatch(fetchProductsByCategories(category))
        }
    }, [category])

    /*Dispara la action filterCharacter para poder filtrar por un nombre en especifico*/
    const onChange = (e: any) =>{
      dispatch(fetchProductsByCategories(e.target.value))
  }

    return <div className="select">
        <select defaultValue="default" onChange={(e) => onChange(e)}>
          <option value="default" disabled selected>seleccione una categoria</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery" selected>jewelery</option>
          <option value="women's clothing">women's clothing</option>
          <option value="electronics">electronics</option>
        </select>
    </div>
}
export default FilterByCategories