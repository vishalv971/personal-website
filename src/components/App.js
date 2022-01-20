import React, { Component } from "react";
import profile from "../assets/profile.jpeg";
import ContactMe from "./ContactMe";
import Header from "./Header";
import Projects from "./Projects";
import Title from "./Title";

class App extends Component {
  state = { displayBio: false };
  showAboutMe = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <div style={{ display: "block" }}>
          <Header />
          <br></br>
          <hr />
        </div>
        <img
          src={profile}
          alt="Profile Image"
          style={{
            width: 300,
            height: 300,
            borderRadius: 150,
            objectFit: "cover",
          }}
        ></img>
        <h1>Hello World!</h1>
        <p> नमस्ते (Namaste), I am Vishal Vishwanathan 👋</p>
        <Title />
        {this.state.displayBio ? (
          <div>
            <p>
              I am a full stack engineer 👨‍💻 with a degree in Computer Science &
              Engineering
            </p>
            <p>
              Love building, scaling and engineering products and help solve
              problems that the world is riddled with through tech!
            </p>
            <p>Here's some of my languages and frameworks I love coding on</p>
            <div style={{ display: "inline" }}>
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/java.svg"
                alt="social_media_icon"
                width={38}
                height={38}
                style={{ display: "inline-block", margin: 10 }}
              ></img>
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/python.svg"
                alt="social_media_icon"
                width={38}
                height={38}
                style={{ display: "inline-block", margin: 10 }}
              ></img>
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/javascript.svg"
                alt="social_media_icon"
                width={38}
                height={38}
                style={{ display: "inline-block", margin: 10 }}
              ></img>
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/html5.svg"
                alt="social_media_icon"
                width={38}
                height={38}
                style={{ display: "inline-block", margin: 10 }}
              ></img>
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/css3.svg"
                alt="social_media_icon"
                width={38}
                height={38}
                style={{ display: "inline-block", margin: 10 }}
              ></img>
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/react.svg"
                alt="social_media_icon"
                width={38}
                height={38}
                style={{ display: "inline-block", margin: 10 }}
              ></img>
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/ionic.svg"
                alt="social_media_icon"
                width={38}
                height={38}
                style={{ display: "inline-block", margin: 10 }}
              ></img>
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/node-dot-js.svg"
                alt="social_media_icon"
                width={38}
                height={38}
                style={{ display: "inline-block", margin: 10 }}
              ></img>
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/bootstrap.svg"
                alt="social_media_icon"
                width={38}
                height={38}
                style={{ display: "inline-block", margin: 10 }}
              ></img>
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/docker.svg"
                alt="social_media_icon"
                width={38}
                height={38}
                style={{ display: "inline-block", margin: 10 }}
              ></img>
            </div>
            <br />
            <button onClick={this.showAboutMe}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.showAboutMe}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <ContactMe />
        <hr />
      </div>
    );
  }
}

export default App;
