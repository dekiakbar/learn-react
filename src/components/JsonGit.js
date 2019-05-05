import React,{Component} from 'react';

class JsonGit extends Component{
    constructor(props){
        super(props);
        this.state={
            data : []
        }
    }

    componentDidMount(){
        fetch("https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json")
        .then(response => response.json())
        .then((data) => {
            this.setState({data:data});
        })
    }

    render(){
        return(
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-6 mx-auto">
                        <div className="jumbotron">
                            <ul className="list-group">
                                <li className="list-group-item active">Fetch Data JSON Github</li>
                                {
                                    this.state.data.map((data, key) =>
                                        <li key={key} className="list-group-item">{data.id}. Nama : <strong>{data.nama}</strong> | Harga : Rp. <strong>{data.harga}K</strong> <img className="img-thumbnail" src={data.fotoUrl} alt={data.nama} /></li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JsonGit;