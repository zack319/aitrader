import React, { Component } from 'react';
import axios from 'axios';

// importing icons from react-icon library
import { FaBell, FaBellSlash } from 'react-icons/fa';

export default class Fetch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isTracked: false,
            data: {}
        };
    }

    componentDidMount() {
        if (this.props.data.userId !== "") {
            this.setState({ isTracked: true });
        } else {
            this.setState({ isTracked: false });
        }
    }

    untrackStock(id) {
        axios.post('http://ec2-3-217-82-10.compute-1.amazonaws.com:5000/stocks/update/'+id, {
                userId: ''
            })
            .then(response => {
                const stock = this.state;
                stock.data = response.data.stock;
                if (stock.data.userId === "") {
                    stock.isTracked = false;
                }
                this.setState({stock});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    trackStock(id) {
        axios.post('http://ec2-3-217-82-10.compute-1.amazonaws.com:5000/stocks/update/'+id, {
                userId: '5e5361bc97ab544798349ccf'
            })
            .then(response => {
                const stock = this.state;
                stock.data = response.data.stock;
                if (stock.data.userId !== "") {
                    stock.isTracked = true;
                }
                this.setState({stock});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const isTracked = this.state.isTracked;
        let trackingBell;

        if (isTracked) {
            trackingBell = <FaBellSlash onClick={ () => this.untrackStock(this.props.data._id) } />;
        } else {
            trackingBell = <FaBell onClick={ () => this.trackStock(this.props.data._id) } />;
        }

        return (
            <div>
                {trackingBell}
            </div>
        )
    }
}
