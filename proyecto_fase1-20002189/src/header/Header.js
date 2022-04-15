import React from "react";

import './Header.css';

const Header = () =>{
    return(
        <header className="menuSuperior">
            <input type="search" placeholder="Buscar Producto" className="busqueda"></input>
            <button className="buscar">Buscar</button>
        </header>
    );
}

export default Header;