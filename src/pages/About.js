import React from 'react';
import Jimmy from '../assets/jimmy.jpg'
import Mike from '../assets/mike.jpg'
import Ann from '../assets/ann.png'
import Eliott from '../assets/eliott.jpg'
import Jessie from '../assets/jessie.png'
import Kevin from '../assets/kevin.jpg'
import Nick from '../assets/nick.png'

const About = () => {
    return (
        <>
            <div class="row justify-content-lg-center mx-0" id="fade">
                <div class="col-12 mbrace-bg-3">
                </div>
            </div>
            <div class="row justify-content-center my-5" id="fade">
                <h1 className="mbrace-font mbrace-center px-auto">Our Team</h1>
            </div>
            <div class="row justify-content-center my-5" id="fade">
                <div class="col-3 mx-auto">
                    <div class="card border-light mb-3">
                        <div class="card-body">
                        <img src={Ann} alt="Ann profile" />
                        </div>
                        <div class="card-header">
                            <p class="card-text"><strong>Ann Lee</strong><br/>UX Design</p>
                        </div>
                    </div>
                    <div class="card border-light mb-3">
                        <div class="card-body">
                        <img src={Kevin} alt="Kevin profile" />
                        </div>
                        <div class="card-header">
                            <p class="card-text"><strong>Kevin Kim</strong><br/>UX Design</p>
                        </div>
                    </div>
                </div>
                <div class="col-3 mx-auto">
                    <div class="card border-light mb-3">
                        <div class="card-body">
                            <img src={Mike} alt="Mike profile" />
                        </div>
                        <div class="card-header">
                            <p class="card-text"><strong>Mike Dalton</strong><br/>UX Design</p>
                        </div>
                    </div>
                    <div class="card border-light mb-3">
                        <div class="card-body">
                            <img src={Jessie} alt="Jessie profile" />
                        </div>
                        <div class="card-header">
                            <p class="card-text"><strong>Jessie Kim</strong><br/>UX Design</p>
                        </div>
                    </div>
                    <div class="card border-light mb-3">
                        <div class="card-body">
                            <img src={Jimmy} alt="Jimmy profile" />
                        </div>
                        <div class="card-header">
                            <p class="card-text"><strong>Jimmy Granadino</strong><br/>Frontend Lead</p>
                        </div>
                    </div>
                </div>
                <div class="col-3 mx-auto">
                    <div class="card border-light mb-3">
                        <div class="card-body">
                        <img src={Eliott} alt="Eliott profile" />
                        </div>
                        <div class="card-header">
                            <p class="card-text"><strong>Eliott Davidson</strong><br/>Backend Dev</p>
                        </div>
                    </div>
                    <div class="card border-light mb-3">
                        <div class="card-body">
                            <img src={Nick} alt="Nick profile" />
                        </div>
                        <div class="card-header">
                            <p class="card-text"><strong>Nicholas Foxen</strong><br/>Routing Lead</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;