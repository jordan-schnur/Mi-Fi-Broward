import React, { Component } from 'react';
import "./HomePage.css";
import YT from 'react-youtube';

class HomePage extends Component {

    onStateChange(e) {
        console.log("Hello");
        console.log(e.target.getCurrentTime());
    }

    test() {
        alert("THIS IS HELL");
    }

    render() {
        return (
            <div class="content-outer">
                <YT videoId="UfLeT3McizE" className="home-video" onStateChange={this.onStateChange}/>
                <br/>
                <button onClick={this.test}>Click Me For Hell!</button>
            </div>
        )
    }
}

export default HomePage;