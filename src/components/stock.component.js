import React, { Component } from 'react';

import Untrack from './untrack.component';

// importing icons from react-icon library
import { IconContext } from "react-icons";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import socketIOClient from "socket.io-client";

export default class Stock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stock: {},
            endpoint: "http://ec2-3-90-189-122.compute-1.amazonaws.com:5000",
            increase: null
        };
    }

    componentDidMount() {
        this.setState({
            stock: this.props.stock
        });
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("changeData", data => {
            if (this.state.stock.indice == data.indice) {
                console.log(data.value);
                console.log(this.state.stock.value);
                console.log(this.state.stock.value < data.value);
                if (data.value < this.state.stock.value) {
                    this.setState({
                        increase: false
                    });
                } else {
                    this.setState({
                        increase: true
                    });
                }
                this.setState({
                    stock: data
                });
            } else if (this.state.stock._id == data._id) {
                if (this.state.stock.value > data.value) {
                    this.setState({
                        increase: false
                    });
                } else {
                    this.setState({
                        increase: true
                    });
                }
                this.setState({
                    stock: data
                });
            }
        });
    }

    render() {
        return(
            <tr>
                <td>{this.state.stock.name}</td>
                <td>{this.state.stock.indice}</td>
                <td>{this.state.stock.value}</td>
                <td>
                    <IconContext.Provider value={{ color: this.state.increase && this.state.increase != null ? "green" : "gray" }}>
                        <FaArrowUp />
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: !this.state.increase && this.state.increase != null ? "red" : "gray" }}>
                        <FaArrowDown />
                    </IconContext.Provider>
                </td>
                <td>
                    <Untrack data={this.state.stock} untrackStock={this.props.untrackStock}/>
                </td>
            </tr>
        );
    }
}
