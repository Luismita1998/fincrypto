import React, {Component} from 'react';
import '../Header/Header.css';

function Footer(){    


    return( 
            <React.Fragment>
                <footer>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Winkens</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Luis Maria</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Enrico</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Valentino</a>
                        </li>
                    </ul>
                </footer>
            </React.Fragment>
        )
    }


export default Footer