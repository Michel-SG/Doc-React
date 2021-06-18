import React, { Component } from "react";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";

import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <header>
                <Logo />
                <Navigation />
            </header>
        );
    }
}
