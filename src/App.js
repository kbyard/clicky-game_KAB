import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"

import doctor01 from "./images/doctor01.jpg"
import doctor02 from "./images/doctor02.jpg"
import doctor03 from "./images/doctor03.jpg"
import doctor04 from "./images/doctor04.jpg"
import doctor05 from "./images/doctor05.jpg"
import doctor06 from "./images/doctor06.jpg"
import doctor07 from "./images/doctor07.jpg"
import doctor08 from "./images/doctor08.jpg"
import doctorWR from "./images/doctorWR.jpg"
import doctor09 from "./images/doctor09.jpg"
import doctor10 from "./images/doctor10.jpg"
import doctor11 from "./images/doctor11.jpg"
import doctor12 from "./images/doctor12.jpg"

import './App.css';

class App extends Component {

    state = {
        picked: [],
        correct: 0,
        topscore: 0,
        message: 'Allons-y! Select a Doctor to Begin!'
    };

    shuffleArray = (array) => {
        let imgArray = Img;
        for (let i = imgArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
        }
        return imgArray
    }

    pickImg = (name) => {
        console.log("Clicked!!");
        let picked = this.state.picked;
        if (picked.indexOf(name) === -1) {
            this.setState( {
                picked: picked.concat(name),
                correct: this.state.correct + 1,
                topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
                message: "Correct: Fantastic!" 
            })
            this.shuffleArray();
        }
        else {
            this.setState( {
                message: "Incorrect: Not this time... Play again?",
                correct: 0,
                picked: []
            })
        }
    }

    imgSwitch = (name) => {
        console.log("=="+name);
        switch (name) {
            case "First Doctor":
                return `${doctor01}`
            case "Second Doctor":
                return `${doctor02}`
            case "Third Doctor":
                return `${doctor03}`
            case "Fourth Doctor":
                return `${doctor04}`
            case "Fifth Doctor":
                return `${doctor05}`
            case "Sixth Doctor":
                return `${doctor06}`
            case "Seventh Doctor":
                return `${doctor07}`
            case "Eighth Doctor":
                return `${doctor08}`
            case "Ninth Doctor":
                return `${doctor09}`
            case "Tenth Doctor":
                return `${doctor10}`
            case "Eleventh Doctor":
                return `${doctor11}`
            default:
                return `${doctorWR}`
        }
    }

    render() {
        return (
            <div>
                <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
                <Header />
                <Main>
                    {this.shuffleArray(Img).map(image => (
                        <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
                    ))}
                </Main>
                <Footer />
            </div>
        );
    }

}

export default App;