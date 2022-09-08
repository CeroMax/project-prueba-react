
import {useEffect ,useState } from "react";
import { productosFerreteria } from "../baseDatos/baseDatos";
import './ItemsListContainer.css';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

export const ItemsListContainer = ()=>{
    
    const {tipoHerramientas} = useParams();

    const [productos,setProductos] = useState([]);

    const promesa = new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve(productosFerreteria);
        }, 1000);
    })

    useEffect (()=>{
        promesa.then(resultado =>{
            
            if (tipoHerramientas === undefined){
                setProductos(resultado)
            }else{
                const listaFiltro = resultado.filter(item=>item.categoria === tipoHerramientas);
                setProductos(listaFiltro)
            }
        })
    })

    return(
        <div className="item-list-container">
            <p>Productos ferreteria</p>
            <ItemList items={productos}/>
        </div>
    )
}