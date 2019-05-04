import React,{Component} from 'react';
import 'bootstrap/scss/bootstrap.scss';
import '../assets/sass/style.scss';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <Link to="/clock">Clock</Link>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;