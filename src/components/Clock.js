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
            <div className="btn btn-lg btn-info">
                {this.state.time.toLocaleTimeString()}
            </div>
        )
    }
}

export default Clock;