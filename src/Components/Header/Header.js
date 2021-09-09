import React from 'react';
import './Header.css';

function Header(){
    return(
        <header>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <nav className="nav nav-pills nav-justified">
                <a className="nav-item nav-link active" href="#">Winkens </a>
                <a className="nav-item nav-link" href="#">Inicia</a>
                <a className="nav-item nav-link" href="#">Servicios</a>
                <a className="nav-item nav-link" href="#">Contacto</a>
                <a className="nav-item nav-link disabled" href="#">Hola!</a>
                    <img src="https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
            </nav>
            <form className="search" action="">
                    <input type="text" name="search" id="" placeholder="Search"/>
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
        </nav>
    </header>

    )
}

export default Header