import React, {Component} from 'react';
import './tarjetas.css';

class Tarjetas extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
        <div className= 'character-card'>
            <img src={this.props.dataCrypto.image} alt="" />
            <h4>{this.props.dataCrypto.name}</h4>
            <h4 className="color-nombres" >{this.props.dataCrypto.current_price} US$</h4>
            <h4 className="color-nombres" >{this.props.dataCrypto.price_change_percentage_24h.toFixed(2)} %</h4>
            <button onClick = { () => this.props.borrar(this.props.dataCrypto.id)} >Borrar</button>
        </div>
        );
        
    }
}

export default Tarjetas
   