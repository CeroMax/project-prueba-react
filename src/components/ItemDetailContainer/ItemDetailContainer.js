
import './ItemDetailContainer.css';
import {useEffect ,useState } from "react";
import { productosFerreteria } from "../baseDatos/baseDatos";
import {ItemDetail} from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = ()=>{

    const {productid} = useParams();
    console.log(productid)

    const [item, setItem] = useState({});

    const getItem = ()=>{
        return new Promise((resolve, reject)=>{
            resolve(productosFerreteria[productid])
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem();
            console.log('producto', producto)
            setItem(producto);
        }
        getProducto();
    },[])

    console.log('item:', item)
    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>Producto seleccionado</p>
            <ItemDetail item={item}/>
        </div>
    )
}
