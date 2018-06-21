import React, { Component } from 'react';
import "./Footer.css"
class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <h2>STAY CONNECTED</h2>
                <input placeholder="YOUR EMAIL ADDRESS" ></input>

                <div class="footer-social-media-icons">
                    Icons go here
                </div>
            </div>)
    }
}

export default Footer;