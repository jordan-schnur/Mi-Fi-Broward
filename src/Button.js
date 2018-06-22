import React, { Component } from 'react';
import "./Button.css";

class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href="#" className={this.props.className + " button"} onClick={this.props.onClick}>
                <span>{this.props.children}</span>
            </a>
        )
    }
}

export default Button;