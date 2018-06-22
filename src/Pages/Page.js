import React, { Component } from 'react';


class Page extends Component {
    title = "Untitled Page";

    constructor(props) {
        super(props);
        Page.id++;
    }

    componentDidMount() {
        document.title = this.title;
    }

    render() {
        return <h1>Hello World!</h1>
    }
}

Page.id = 0;

export default Page;