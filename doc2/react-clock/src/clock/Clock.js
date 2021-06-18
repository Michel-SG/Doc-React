import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.id = setInterval(
            () => this.setState((state) => ({ date: new Date() })),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    render() {
        const { date } = this.state;
        return (
            <div>
                <p>{date.toLocaleTimeString()}</p>
            </div>
        );
    }
}
