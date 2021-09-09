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
        </div>
        );
        
    }
}

export default Tarjetas
   