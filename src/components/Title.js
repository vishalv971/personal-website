import React, { Component } from 'react';

const TITLES = [
    "Software Engineer",
    "Dota 2 Gamer",
    "Cricket and F1 Enthusiast",
    "Carnatic Rock Lover"
]

class Title extends Component {
    state = {titleIndex : 0, fadeIn: true};

    componentDidMount() {
        this.timeout = setTimeout( () => {
            this.setState({fadeIn : false});
        }, 2000);
        this.animateTitles();
    }

    componentWillUnmount(){
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () =>{
        
        this.titleInterval = setInterval( () => {
            this.setState({titleIndex: (this.state.titleIndex+1)%TITLES.length, fadeIn: true});
            this.timeout = setTimeout( () => {
                this.setState({fadeIn : false});
            }, 2000);
        }, 4000);
    }

    render(){
        const { fadeIn , titleIndex } = this.state;
        const title = TITLES[titleIndex];
        return(
            
            <div>
                <p className={fadeIn? 'title-fade-in':'title-fade-out'}>{title} </p>
            </div>
        );
    }
}

export default Title;

