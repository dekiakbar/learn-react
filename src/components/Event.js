import React,{Component} from 'react';

class Event extends Component{
    constructor(props){
        super(props);
        this.state = {
            input : ''
        }
    }

    handleInput = (e) => {
        this.setState({input: e.target.value})
    }
    render(){
        return(
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-6 mx-auto">
                        <div className="jumbotron">
                            <h3>Event On Change</h3>
                            <p>Mohon isi Input : <input onChange={this.handleInput}/></p>
                            <p>Hasil : {this.state.input}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event;