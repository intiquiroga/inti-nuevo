import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {arregloProductos} from "../baseDatos/arregloProductos"
import { useEffect, useState} from "react";
import {useParams } from 'react-router-dom';
import { itemList } from '../itemList/itemList'; 
import { item } from '../item/item';


export const ItemListContainer = ()=> {


    const promesa = new Promise ((resolve,reject)=>{
        setTimeout (()=> {
            resolve (productos);
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
    console.log ("productos",productos);
    return (
        <div className="item-detail-container">
            <p style={{width:"100%"}}>item datail Container</p>
            <ItemDetail item={productos}/>
        </div>
    )

}