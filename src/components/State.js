import React,{Component} from 'react';

class State extends Component{

    constructor(props){
        super(props);
        this.state={salam : 'Halo'};
    }

    ubahSalam = () => {
        this.setState({salam : 'Halo dari state'});
    }

    render(){
        return(
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-6 mx-auto">
                        <div className="jumbotron">
                            <p>Ubah State dengan on Click</p>
                            <p>Salam : {this.state.salam}</p>
                            <button className="btn btn-sm btn-info" onClick={this.ubahSalam}>Ubah Salam</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default State;