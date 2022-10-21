
import "./navBar.css";
import { CartWidget } from "../cartWidget/cartWidget";
import {Link, NavLink} from "react-router-dom";
export const navBar = () => {

    return (
        <div>
            <div style={{backgroundColor:"white",display:"flex",justifyContent:"space-between"}}>
                <img className='imagenlogo' src="" alt="Logo de Pagina"/>
            </div>
            <div>
            <ul style={{display:"flex",columnGap:"20px",justifyContent:"flex-end",color:"white",listStyle:"none",fontFamily:"fantasy",marginRight:"10px"}}>
                 <li><Link to="/">Mates</Link></li>
                 <li><Link to="/">Termos</Link></li>
                 <li><Link to="/"></Link>Quienes Somos</li>
                 <li><Link to="/"></Link>Contacto</li>
            </ul>
            <CartWidget></CartWidget>
            </div>
        </div>

    )
}