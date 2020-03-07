import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Home</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/">Stock List</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}