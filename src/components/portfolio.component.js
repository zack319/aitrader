import React, { Component } from 'react';
import axios from 'axios';

// import Untrack from './untrack.component';
import Stock from './stock.component';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {stocks: []};

        this.untrackStock = this.untrackStock.bind(this);
    }

    untrackStock(id) {
        this.setState({
            stocks: this.state.stocks.filter(el => el._id !== id)
        });
    }

    componentDidMount() {
        axios.get('http://ec2-3-90-189-122.compute-1.amazonaws.com:5000/portfolio', {
            userId: '5e5361bc97ab544798349ccf'
        })
            .then(response => {
                this.setState({stocks: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    stocksList() {
        return this.state.stocks.map((current, i) => {
            return <Stock stock={current} key={i} untrackStock={this.untrackStock}></Stock>
        })
    };

    render() {
        return (
            <div>
                <h3>Your Portfolio</h3>
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