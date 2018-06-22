import React, { Component } from 'react';
import "./HomePage.css";
import YT from 'react-youtube';
import Sound from 'react-sound';
import Button from "../Button";
import BuildImg from "../Resources/Build.jpg";
import GrowImg from "../Resources/Grow.jpg";
import PreserveImg from "../Resources/Preserve.jpg";
import GrowAudio from "../Resources/grow.wav";
import BuildAudio from "../Resources/build.wav";
import IntroAudio from "../Resources/intro.wav";
import PreserveAudio from "../Resources/preserve.wav";

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.growstyle = {
            backgroundImage: "url(" + GrowImg + ")"
        }
        this.buildstyle = {
            backgroundImage: "url(" + BuildImg + ")"
        }
        this.preservestyle = {
            backgroundImage: "url(" + PreserveImg + ")"
        }
        this.state = {currentSound: <Sound url={IntroAudio}/>}
    }

    onStateChange(e) {
        console.log("Hello");
        console.log(e.target.getCurrentTime());
    }

    introFinished = (e) => {
        document.getElementById("build").classList.remove("hidden");
    }

    buildFinished = (e) => {
        let all = document.getElementById("build").getElementsByTagName("a");
        for (var i=0, max=all.length; i < max; i++) {
            all[i].classList.remove("hidden");
        }
        document.getElementById("grow").classList.remove("hidden");
    }

    growFinished = (e) => {
        let all = document.getElementById("grow").getElementsByTagName("a");
        for (var i=0, max=all.length; i < max; i++) {
            all[i].classList.remove("hidden");
        }
        document.getElementById("preserve").classList.remove("hidden");
    }

    preserveFinished = (e) => {
        let all = document.getElementById("preserve").getElementsByTagName("a");
        for (var i=0, max=all.length; i < max; i++) {
            all[i].classList.remove("hidden");
        }
    }

    playPreserve = (e) => {

        this.setState({
            currentSound: <Sound url={PreserveAudio} playStatus={Sound.status.PLAYING} volume={50} onFinishedPlaying={this.preserveFinished}/>
        })
        document.getElementById("grow-subtitles").classList.add("hidden");
        document.getElementById("preserve-subtitles").classList.remove("page-hidden");
        document.getElementById("preserve-play").classList.add("hidden");
    }

    playGrow = (e) => {

        this.setState({
            currentSound: <Sound url={GrowAudio} playStatus={Sound.status.PLAYING} volume={50} onFinishedPlaying={this.growFinished}/>
        })
        document.getElementById("build-subtitles").classList.add("hidden");
        document.getElementById("grow-subtitles").classList.remove("page-hidden");
        document.getElementById("grow-play").classList.add("hidden");
    }



    playBuild = (e) => {

        this.setState({
            currentSound: <Sound url={BuildAudio} playStatus={Sound.status.PLAYING} volume={50} onFinishedPlaying={this.buildFinished}/>
        })
        document.getElementById("intro-subtitles").classList.add("hidden");
        document.getElementById("build-subtitles").classList.remove("page-hidden");
        document.getElementById("build-play").classList.add("hidden");
    }

    changePage = (e) => {
        e.preventDefault();
        this.page2 = document.getElementById("page2");
        this.page1 = document.getElementById("page1");
        this.page2.classList.add("page-active");
        this.page2.classList.remove("page-right");
        this.page1.classList.add("page-left");
        this.page1.classList.remove("page-active");
        setTimeout((e) => {
            this.setState({
                currentSound: <Sound url={IntroAudio} playStatus={Sound.status.PLAYING} volume={50} onFinishedPlaying={this.introFinished}/>
            })
            document.getElementById("subtitles").classList.remove("hidden");
            document.getElementById("intro-subtitles").classList.remove("page-hidden");
        },1500)
        return null;
    }

    render() {
        const ytopts = {
            height: '720',
            width: '1080'
        }
        return (
            <React.Fragment>
            <div class="content page-active" id="page1">
                <YT videoId="UfLeT3McizE"
                    className="home-video"
                    onStateChange={this.onStateChange}
                    opts={ytopts}/>
                <div class="home-row2">
                    <Button onClick={(e) => this.changePage(e)}>Guided Tour</Button>
                    <Button>Self Navigate</Button>
                </div>
            </div>
            <div className="page2 page-right" id="page2">
                {this.state.currentSound}
                <div class="page-subtitles hidden" id="subtitles">
                    <span class="page-hidden" id="intro-subtitles">
                        Wealth Building is a 3-part journey:  BUILD, GROW, PRESERVE.
                        Who knows, maybe you’ve already started and didn’t know it.
                        Visit each part below to see where you are
                    </span>
                    <span className="page-hidden" id="build-subtitles">
                        BUILD is all about setting goals.
                        I begin by evaluating my financial needs like housing, education, transportation, and childcare. Here, I gain the knowledge and skills to make my goals a reality.
                        I’ve set my goals, created a plan and now I’m ready to
                        BUILD my strong financial future.

                    </span>
                    <span className="page-hidden" id="grow-subtitles">
                           GROWTH is where I get the know-how and experience to make solid choices.
                            I am confident because I am stable and have the means to sustain and adapt.  I’m no longer intimidated by my finances.

                            I have a better understanding of how savings, credit, and taxes can help me GROW my wealth, not just build it.
                            I learn techniques to acquire assets through investments and personal development.

                            I know where I’m going on this journey.
                            My eyes are on the road ahead.

                    </span>
                    <span className="page-hidden" id="preserve-subtitles">
                       I’ve made the journey through BUILDing and GROWing my wealth. Now is the time to PRESERVE!
                        I’ve learned about estate planning, retirement plans, insurance, taxes, and long-term care.
                        Essentially, I work to protect my assets for retirement.   I worked hard to build this wealth and now I have the ability to leave a legacy for my family or others.

                    </span>
                </div>
                <div class="page-infobox build hidden" id="build">
                    <div class="page-headerimage-outer " >
                        <div class="page-header-image-inner" style={this.buildstyle}>
                            <span id="build-play" onClick={(e) => this.playBuild(e)} class="right-triangle"></span>
                        </div>
                    </div>

                    <span class="info-title">Build</span>
                    <Button className="hidden" onClick={(e) => this.changePage(e)}>Credit</Button>
                    <Button className="hidden">Housing</Button>
                    <Button className="hidden">Income</Button>
                </div>
                <div class="page-infobox grow hidden" id="grow">
                    <div className="page-headerimage-outer">
                        <div className="page-header-image-inner" style={this.growstyle}>
                            <span id="grow-play"
                                  onClick={(e) => this.playGrow(e)}
                                  class="right-triangle"></span>
                        </div>
                    </div>
                    <span className="info-title">Grow</span>
                    <Button className="hidden">Saving</Button>
                    <Button className="hidden">Investing</Button>
                    <Button className="hidden">Taxes</Button>
                </div>
                <div class="page-infobox preserve hidden" id="preserve">
                    <div className="page-headerimage-outer">
                        <div className="page-header-image-inner" style={this.preservestyle}>
                            <span id="preserve-play"
                                  onClick={(e) => this.playPreserve(e)}
                                  class="right-triangle"></span>
                        </div>
                    </div>
                    <span className="info-title">Preserve</span>
                    <Button className="hidden">Estate Planning</Button>
                    <Button className="hidden">Insurance</Button>
                    <Button className="hidden">Trusts</Button>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default HomePage;