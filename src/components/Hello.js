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
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-6 mx-auto">
                        <div className="jumbotron text-center">
                            <p><strong>State</strong></p>
                            <button className="btn btn-lg btn-info">{this.state.salam} : <strong>{this.state.nama}</strong> </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hello;