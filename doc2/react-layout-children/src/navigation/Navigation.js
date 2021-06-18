import React, { Component } from "react";

import "./Navigation.css";

export default class Navigation extends Component {
    render() {
        return (
            <ul className="hlist navigation">
                <li className="item">
                    <a>Accueil</a>
                </li>
                <li className="item">
                    <a>CV</a>
                </li>
                <li className="item">
                    <a>À&nbsp;propos</a>
                </li>
            </ul>
        );
    }
}
