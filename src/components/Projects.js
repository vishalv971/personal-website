import React, { Component } from 'react';
import PROJECT_DESC from '../data/projects';

class Projects extends Component {
    render(){
        return(
            <div className='row'>
                <div className='project'>
                    <div>
                        <div>
                            <video width={480} height={270} controls>
                                <source src={PROJECT_DESC[0].video} type='video/mp4'></source>
                            </video>
                        </div>
                        <div>
                            <h3>{PROJECT_DESC[0].name}</h3>
                            <p>Stack: {PROJECT_DESC[0].stack}</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src={PROJECT_DESC[2].image} width={480} height={270}/>
                        </div>
                        <div>
                            <h3>{PROJECT_DESC[2].name}</h3>
                            <p>Stack: {PROJECT_DESC[2].stack}</p>
                            <p>View <a href='https://github.com/vishalv971/LogisticCropManagement'>here</a></p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <video width={480} height={270} controls>
                                <source src={PROJECT_DESC[1].video} type='video/mp4'></source>
                            </video>
                        </div>
                        <div>
                            <h3>{PROJECT_DESC[1].name}</h3>
                            <p>Stack: {PROJECT_DESC[1].stack}</p>
                        </div>
                    </div>

                    
                </div>
                <br />
                <p>Check out some more of my work <a href='https://github.com/vishalv971'>here!</a></p>
            </div>
        );
    }
}

export default Projects;