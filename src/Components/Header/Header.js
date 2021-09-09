import React from 'react';


function Header(){
    return(
        <header>
            <nav className="navbar">
        <h1>Título/ Nombre de la app</h1>
        <section>
            
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </section>
        </nav>
    </header>

    )
}

export default Header