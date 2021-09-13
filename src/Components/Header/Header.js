import React, {Component} from 'react';
import Cryptos from '../Cryptos/Cryptos';
import './Header.css';

class Header extends Component{
    constructor(props){
        super(props)
        this.state ={
            filtrarPor : ''
        }
    }
    //Aquí debemos crear el método que evite enviar el formulario
    evitarEnviar(evento){
        evento.preventDefault()
    }
    //Aquí creamos el método para controlar los cambios en el formulario
    controlarCambios(evento){
        this.setState({
            filtrarPor : evento.target.value
        }, () => this.props.controlarCambios(this.state.filtrarPor))
    }
    render(){
        return( 
            <React.Fragment>
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
                        <form onSubmit = {(e) => this.evitarEnviar(e) }>
                            <label for='nombre'>Buscar cryptomoneda</label>
                            <input  type='text' name='nombre'  id='nombre' onChange= {(e) => this.controlarCambios(e) } value={this.state.filtrarPor } />
                        </form>
                        </nav>
                </header>
            </React.Fragment>
        )
    }

}


export default Header