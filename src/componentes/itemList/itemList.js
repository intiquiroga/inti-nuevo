import { useEffect } from "react"
import { item } from "../item/item";

export const itemList = ({items})=>{
    console.log(props)
    //const{items} =props ;

   return(
       <div>
           <div style={{color:"black"}}>item list</div>
           {
              items.map(producto=>(
                  <Item key={producto.id} item= {producto}/>
              ))
            }
       </div>
    )
}
 