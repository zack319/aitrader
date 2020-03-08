import React, { Component } from 'react';
import axios from 'axios';

// importing icons from react-icon library
import { FaBellSlash } from 'react-icons/fa';

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
        axios.post('http://ec2-3-90-189-122.compute-1.amazonaws.com:5000/portfolio/update/'+id, {
                userId: ''
            })
            .then(response => {
                const stock = this.state;
                stock.data = {};
                stock.isTracked = false;
                this.setState({stock});
                this.props.untrackStock(id);
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
        }

        return (
            <div>
                {trackingBell}
            </div>
        )
    }
}
