import React from 'react';
import Chart from '../Chart/Chart';
import NumberFormat from 'react-number-format';

function Info(props){
    if(props.dataMkt != ""){
        return(
            <React.Fragment>
               <div> 
               <h1>{props.dataNombre} ({props.dataTick})</h1>
               </div>
               <div className="d-flex flex-wrap justify-content-around">
               <img className="fotito" src={props.dataImg} alt=""/>
               <div class="d-flex flex-column bd-highlight mb-3">
               <div class="p-2 bd-highlight"><h2>Price:<NumberFormat
                    value={props.dataMkt}
                    className="foo"
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    renderText={(value, props) => <div {...props}>{value}</div>}
                /></h2></div>
                <div class="p-2 bd-highlight"><h2>Market cap:<NumberFormat
                    value={props.dataCap}
                    className="foo"
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    renderText={(value, props) => <div {...props}>{value}</div>}
                /></h2></div>
                <div class="p-2 bd-highlight"><h2> Circulating:<NumberFormat
                    value={props.dataCir}
                    className="foo"
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={''}
                    renderText={(value, props) => <div {...props}>{value}</div>}
                /></h2></div>
                <div class="p-2 bd-highlight"><h2>Supply:<NumberFormat
                    value={props.dataMax}
                    className="foo"
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={''}
                    renderText={(value, props) => <div {...props}>{value}</div>}
                /></h2></div>
                </div> 
               <Chart precioChart={props.precio}/>
               <p>{props.dataDesc}</p>
               </div>
            </React.Fragment>
        )
    }else{
        return(
            <React.Fragment>

            </React.Fragment>
        )
    }


}
    

export default Info;