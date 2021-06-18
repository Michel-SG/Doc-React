import React, { Component } from "react";

import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p>Spirival &copy; 2020</p>
                <ul>
                    <li>Mentions légales</li>
                    <li>CGU</li>
                    <li>Contact</li>
                </ul>
            </footer>
        );
    }
}
