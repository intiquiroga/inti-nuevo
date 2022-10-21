import {useState,useEffect} from "react";
import {baseDatos} from "../baseDatos/arregloProductos"
import { itemDetail } from "../itemDetail/itemDetail";
import { itemList } from "../itemList/itemList";
import { ItemListContainer } from "../itemListContainer/itemListContainer";
import { item } from "../item/item";

export const itemDetailContainer = ()=> {


    const promesa = new Promise ((resolve,reject)=>{
        setTimeout (()=> {
            resolve ();
      },2000);
    })

    useEffect (()=> {
        const getProducto = async () => {
        const productos = await promesa ;
            console.log ('productos' , productos);
            console.log("producto",producto)
            setItemProduct (producto);
        }
        getProducto ();
    },[id])
  
    return (
        <div className="item-detail-container">
            <p style={{width:"100%"}}>item datail Container</p>
            <ItemDetail item={itemProduct}/>
        </div>
    )
}