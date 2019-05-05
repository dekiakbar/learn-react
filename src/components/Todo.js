import React,{Component} from 'react';
import Moment from 'moment';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {todos:[]}
    }

    addTodo = (e) =>{
        e.preventDefault();

        let jam = this.refs.jam.value;
        let aktivitas = this.refs.aktivitas.value;

        this.state.todos.push({jam, aktivitas});
        this.setState({todos:  this.state.todos});
        this.refs.formulir.reset();
        this.refs.jam.focus();
    }

    removeTodo = (key) => {
        this.state.todos.splice(key,1);
        this.setState({todos : this.state.todos});
    }

    render(){
        let indonesia = require('moment/locale/id');
        Moment.updateLocale('id',indonesia);
        return(
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-6 mx-auto">
                        <div className="jumbotron">
                            <h3>Aplikasi Aktivitas Harian </h3>
                            <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
                            <form ref="formulir" className="form-inline">
                                <div className="input-group">
                                    <input className="form-control" type="text" ref="jam" placeholder="Jam Aktivitas" />
                                    <input className="form-control" type="text" ref="aktivitas" placeholder="Jenis Aktivitas" />
                                    <button className="btn btn-sm btn-outline-info" onClick={this.addTodo}>Simpan</button>
                                </div>
                            </form>
                            <hr />

                            <ul className="list-group">
                                <li className="list-group-item active">Jadwal Aplikasi Harian</li>
                                <TransitionGroup>

                                    {
                                        this.state.todos.map((data, key) =>
                                            <CSSTransition
                                            key={key}
                                            classNames="animasi"
                                            timeout={{ enter: 500, exit: 500 }}>
                                                <li key={key} className="list-group-item">
                                                    {data.jam} : {data.aktivitas} <button onClick={ ()=> this.removeTodo(key) } className="btn btn-sm btn-outline-danger">Hapus</button>
                                                </li>
                                            </CSSTransition>
                                        )
                                    }

                                </TransitionGroup>
                                
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;