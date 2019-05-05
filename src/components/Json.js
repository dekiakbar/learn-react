import React,{Component} from 'react';

class Json extends Component{
    constructor(props){
        super(props);
        this.state = {
            siswa : [
                {
                    nis:1,
                    nama: "Deki Akbar"
                },
                {
                    nis: 2,
                    nama: "Susanto"
                },
                {
                    nis: 3,
                    nama: "Sumitra"
                },
                {
                    nis: 4,
                    nama: "Samijan"
                },
                {
                    nis: 5,
                    nama: "Sandi"
                }
            ]
        }
    }

    render(){
        return(
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-6 mx-auto">
                        <div className="jumbotron">
                            <ul class="list-group">
                                <li class="list-group-item active">Fetch Data JSON</li>
                                {
                                    this.state.siswa.map((data, key) =>
                                        <li class="list-group-item">NIS : <strong>{data.nis}</strong> | nama : <strong>{data.nama}</strong></li>
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

export default Json;