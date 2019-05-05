import React,{Component} from 'react';
class Hello extends Component{
    constructor(props){
        super(props);
        this.state= {
            nama:'Deki',
            salam:'My Name Is'
        }
    }
    render(){
        return(
            <div className="row justify-content-center align-self-center">
                <div className="col-md-10 col-sm-12 col-lg-8 text-center">
                    <button className="btn btn-lg btn-info">{this.state.salam} : <strong>{this.state.nama}</strong> </button>
                </div>
            </div>
        )
    }
}

export default Hello;