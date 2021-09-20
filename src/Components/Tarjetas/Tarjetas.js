import React from 'react';
import './tarjetas.css';

function Tarjetas(props){
    let fontColor = props.dataCrypto.price_change_percentage_24h.toFixed(2) > 0 ? "verde" : "rojo"
    return(
        <div className= 'character-card'>
            <img src={props.dataCrypto.image} alt="" />
            <h4>{props.dataCrypto.name}</h4>
            <h4 className="color-nombres" >{props.dataCrypto.current_price} US$</h4>
            <h4 className={fontColor} >{props.dataCrypto.price_change_percentage_24h.toFixed(2)} %</h4>
            <button id="espacio" className="btn btn-outline-danger" onClick = { () => props.borrar(props.dataCrypto.id)}>Delete</button>
            <button className="btn btn-success" name={props.dataCrypto.id} onClick = { () => props.infoChart(props.dataCrypto.id)} >INFO</button>
        </div>
        );
}


export default Tarjetas