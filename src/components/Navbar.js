import React,{Component} from 'react';
import 'bootstrap/scss/bootstrap.scss';
import '../assets/sass/style.scss';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return (
            <div>
                <nav className="navbar-expand-lg navbar-dark bg-dark static-top">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/clock">Clock</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hello">Hello</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/state">State</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;