import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

import Fetch from './fetch.component';

// importing icons from react-icon library
import { IconContext } from "react-icons";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Stock = props => (
    <tr>
        <td>{props.stock.name}</td>
        <td>{props.stock.indice}</td>
        <td>{props.stock.value}</td>
        <td>
            <IconContext.Provider value={{ color: "green" }}>
                <FaArrowUp />
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "red" }}>
                <FaArrowDown />
            </IconContext.Provider>
        </td>
        <td>
            <Fetch data={props.stock}/>
        </td>
    </tr>
);

export default class StocksList extends Component {

    constructor(props) {
        super(props);
        this.state = {stocks: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/stocks')
            .then(response => {
                this.setState({stocks: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    stocksList() {
        return this.state.stocks.map((current, i) => {
            return <Stock stock={current} key={i}></Stock>
        })
    };

    render() {
        return (
            <div>
                <h3>Stock List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Stock Name</th>
                            <th>Indice</th>
                            <th>Value</th>
                            <th></th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.stocksList() }
                    </tbody>
                </table>
            </div>
        )
    }
}