import React, {Component} from 'react';


class Info extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataId: '',
            dataDesc: '',
            dataNombre: '',
            dataImg: '',
            dataMkt: ''
        }
    }
    render(){
        return(
            <React.Fragment>
               <p>{this.props.dataInfo}</p>
               <p>{this.props.dataDesc}</p>
               <p>{this.props.dataNombre}</p>
               <img src={this.props.dataImg} alt="" />
               <p>{this.props.dataMkt}</p>

            </React.Fragment>
        )
    }

}

export default Info;