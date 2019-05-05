import React,{Component} from 'react';
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
          time: new Date()
        });
    }
    
    render(){
        return(
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-6 mx-auto">
                        <div className="jumbotron text-center">
                            <p><strong>Update State</strong></p>
                            <div className="btn btn-lg btn-info">
                                {this.state.time.toLocaleTimeString()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clock;