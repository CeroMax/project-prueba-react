
/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';*/

import logonuevo2 from '../../assets/fotos/logonuevo2-min.png';
import './estilosNavBar.css';
import {CartWidget} from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom';


function NavBar (){
    return(
        <>
            <section className='NavBar-Texto'>
                <img className='Alinear' src={logonuevo2} alt="" />
                <h1 className='Titulo'>Ferreteria Industrial "Florida"</h1>
            </section>
            <nav className='Menu'>
                <div >
                    <NavLink className='Margenes Titulo' to="/herramientas">Inicio</NavLink>
                    <NavLink className='Margenes Titulo' to="herramientas/herramientas electricas">Herramientas Electricas</NavLink>
                    <NavLink className='Margenes Titulo' to="herramientas/herramientas mano">Herramientas Mano</NavLink>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/contacto">Contacto</NavLink>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"} to="/nosotros">Nosotros</NavLink>
                
                </div>
                <div className='EstiloCarro'>
                    <CartWidget />
                </div>
            </nav>
        </>
    );
}

export default NavBar;