import React, {Component} from 'react';
// aclaramos que queremos traer el objeto {Component}

// estos componentes statefull te permiten modificar la informacion interna a partir de eventos externos
// creamos el componente FiltrarCrypto y usa como referente al objeto {Component}
class FiltrarCrypto extends Component{
    constructor(props){
        super(props)
        this.state ={
            filtrarPor : ''
        }
    }
    //Aquí debemos crear el método que evite enviar el formulario
    noEnviar(evento){
        evento.preventDefault()
    }
    //Aquí creamos el método para controlar los cambios en el formulario
    controlarCambios(evento){
        this.setState({
            filtrarPor: evento.target.value
        }, () => this.props.filtrarCrypto(this.state.filtrarPor))
    }
    render(){
        return( 
            <React.Fragment>
                {       
                  <form onSubmit = {(e) => this.noEnviar(e) }>
                        <label for='nombre'>Busca tu moneda favorita</label>
                        <span> </span>
                        <input type='text' name='nombre'  id='nombre' onChange= {(e) => this.controlarCambios(e) } value={ this.state.filtrarPor } />
                  </form>   
                }
            </React.Fragment>
        )
    }

}


export default FiltrarCrypto