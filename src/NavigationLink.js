import React, { Component } from 'react';
import "./NavigationLink.css";

class NavigationLink extends Component {
    render() {
        return <a href="#" class="navigation-link"><div class="navigation-link-text">{this.props.children}</div></a>
    }
}

export default NavigationLink;