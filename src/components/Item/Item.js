
import './Item.css';

export const Item = ({item})=>{
    return(
        <div className="vistaProductos">
            <img src={item.foto} alt={item.titulo}/>
            <h4>{item.titulo}</h4>
            <p> {item.precio}</p>
            <button className='botonDescripcion'>Descripcion</button>
        </div>
    )
}