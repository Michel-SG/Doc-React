import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    handleReset = (e) => {
        this.setState((state) => ({ counter: 0 }));
    };

    handlePlus = (e) => {
        this.setState((state) => ({ counter: state.counter + 1 }));
    };

    handleMinus = (e) => {
        this.setState((state) => ({ counter: state.counter - 1 }));
    };

    render() {
        const { counter } = this.state;

        return (
            <div>
                <p>{counter}</p>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
            </div>
        );
    }
}
