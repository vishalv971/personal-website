import React, {Component} from 'react';
import profile from '../assets/profile.png';
import ContactMe from './ContactMe';
import Header from './Header';
import Title from './Title';


class App extends Component {
    state = {displayBio : false};
    showAboutMe = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    render(){
        return(
            <div>   
                <div style={{display: 'block'}}>
                    <Header />
                    <br></br>
                    <hr />
                </div>
                <img src={profile} alt='Profile Image' className="profile"></img>
                <h1>Hello World!</h1>
                <p> नमस्ते (Namaste), I am Vishal Vishwanathan 👋</p>
                <Title />
                {
                    <button onClick={this.showAboutMe}>Read More</button>
                }
                <hr />
                <ContactMe />
                <hr />
            </div>
        );
    }
}

export default App;