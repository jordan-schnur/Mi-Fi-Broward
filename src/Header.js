import React, { Component } from 'react';
import NavigationLink from "./NavigationLink";
import "./Header.css"
import SocialMediaBar from "./SocialMediaBar"
import BWBC from "./Resources/Logo.png";
import MyFi from "./Resources/MyFiText.png";

class Header extends Component {
    render() {
        return (
            <div class="header">
                <div class="header-col1">
                    <img class="header-logo" src={BWBC}/>
                    <img class="header-myfi" src={MyFi}/>
                </div>
                <div class="header-col2">
                    <SocialMediaBar/>
                    <NavigationLink>HOME</NavigationLink>
                    <NavigationLink>ABOUT</NavigationLink>
                    <NavigationLink>TOPICS</NavigationLink>
                    <NavigationLink>RESOURCES</NavigationLink>
                    <NavigationLink>CONTACT</NavigationLink>

                </div>

            </div>
        )
    }
}

export default Header;
