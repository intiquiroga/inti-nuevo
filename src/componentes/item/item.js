import {link} from "react-router-dom";

export const item = ({item})=> {
    return (
        <div className="tarjeta-producto">
            <img src="" alt={item.title} />
            <h4>{item.title}</h4>
            <p>$ {item.price}</p>
            <Link to= {`/item/${item.id}`}>
            <button className="boton-ver"> Ver mas</button>
            </Link>
        </div>
    )
}