import React, { Component } from "react";

export default class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            motif: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(
            `Voici les valeurs du formulaires : ${JSON.stringify(this.state)}`
        );
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState((state) => ({ [name]: value }));
    }

    render() {
        const { firstName, lastName, motif } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="Firstname"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    placeholder="Lastname"
                    onChange={this.handleChange}
                />
                <br />
                <textarea
                    name="motif"
                    value={motif}
                    placeholder="Motif"
                    onChange={this.handleChange}
                ></textarea>
                <br />
                <button type="submit">Envoyer</button>
            </form>
        );
    }
}
