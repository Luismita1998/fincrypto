import React, {Component} from 'react';
import './tarjetas.css';

class Tarjetas extends Component{
    constructor(props){
        super(props)
        this.state = {
            text:'Ver más',
            selected: false
        }
    }

    render(){
        if(this.props.dataCrypto.price_change_percentage_24h.toFixed(2)> 0){
            return(
                <div className= 'character-card'>
                    <img src={this.props.dataCrypto.image} alt="" />
                    <h4>{this.props.dataCrypto.name}</h4>
                    <h4 className="color-nombres" >{this.props.dataCrypto.current_price} US$</h4>
                    <h4 className="color-nombres verde" >{this.props.dataCrypto.price_change_percentage_24h.toFixed(2)} %</h4>
                    <button className="btn btn-outline-danger" onClick = { () => this.props.borrar(this.props.dataCrypto.id)} >Delete</button>
                    <button className="btn btn-success" name={this.props.dataCrypto.id} onClick = { () => this.props.infoChart(this.props.dataCrypto.id)} >INFO</button>
                </div>
                );
        }else{
            return(
                <div className= 'character-card'>
                    <img src={this.props.dataCrypto.image} alt="" />
                    <h4>{this.props.dataCrypto.name}</h4>
                    <h4 className="color-nombres" >{this.props.dataCrypto.current_price} US$</h4>
                    <h4 className="color-nombres rojo" >{this.props.dataCrypto.price_change_percentage_24h.toFixed(2)} %</h4>
                    <button className="btn btn-outline-danger" onClick = { () => this.props.borrar(this.props.dataCrypto.id)} >Delete</button>
                    <button className="btn btn-success" name={this.props.dataCrypto.id} onClick = { () => this.props.infoChart(this.props.dataCrypto.id)} >INFO</button>
                </div>
                );
        }

        
    }
}

export default Tarjetas
   