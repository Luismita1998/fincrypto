import React from 'react';


function Header(){
    return(
        <header>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <h1>Winkens </h1>
        <ul className="navbar-nav ml-auto">
            <i className="fas fa-th"></i>
            <i className="fas fa-align-justify"></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </ul>
        </nav>
    </header>

    )
}

export default Header