import React, {Component} from 'react';
import './tarjetas.css';

class Tarjetas extends Component{
    constructor(props){
        super(props)
        this.state = {
            viewMore: false,
            text:'Ver más',
            selected: false,
        }
    }
    viewMore(){
        if(this.state.viewMore){
            this.setState({
                viewMore: false,
                text: 'Ver más'
            })
        } else {
            this.setState({
                viewMore: true,
                text: 'Ver menos'
            })            
        }
    }

    render(){
        return(
        <div className= 'character-card'>
            <img src={this.props.dataCrypto.image} alt="" />
            <h4>{this.props.dataCrypto.name}</h4>
            <h4 className="color-nombres" >{this.props.dataCrypto.current_price} US$</h4>
            <h4 className="color-nombres" >{this.props.dataCrypto.price_change_percentage_24h.toFixed(2)} %</h4>
            <button className="btn btn-outline-danger" onClick = { () => this.props.borrar(this.props.dataCrypto.id)} >Delete</button>
            <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Total supply: {this.props.dataCrypto.total_supply} All time High: {this.props.dataCrypto.ath} US$</p>
            <p className='more' className="btn btn-success" onClick={()=>this.viewMore()}>{this.state.text}</p>
        </div>
        );
        
    }
}

export default Tarjetas
   