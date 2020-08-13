import React from 'react';
import DigiVent from '../assets/rsc-event1.png'

const Resources = () => {
    return (
        <>
            <div class="row justify-content-lg-center mx-0" id="fade">
                <div class="col-12 mbrace-bg-4">
                </div>
            </div>
            <div class="row my-5" id="fade">
                <h1 className="display-5 pl-5">How to Cope With Anxiety</h1>
                <p className="px-5">Chia deep v lyft etsy before they sold out enim, squid commodo vice. Waistcoat lorem migas laboris single-origin coffee ipsum actually tumblr scenester exercitation taxidermy schlitz meditation activated charcoal try-hard. IPhone banjo butcher you probably haven't heard of them distillery. Vinyl four loko tbh, fashion axe in raw denim locavore. Tousled palo santo blog, lyft poke freegan messenger bag banjo reprehenderit.</p>
            </div>
            <div className="row justify-content-lg-center text-center mbrace-bg-org py-4 mx-0" id="fade">
                    <div className="row text-center mx-auto">
                        <h1 className="display-5 px-auto"> Coping Methods for Anxiety</h1>
                    </div>
            </div>
            <div class="row justify-content-lg-center text-center mbrace-bg-org pb-5 mx-0" id="fade">
                <div className="col-3 mbrace-div-bdr py-4 my-4 mx-auto text-left">
                    <h6>1. Make Lifestyle Changes</h6><br />
                    <small><p>Limit coffe and alcohol, sugar and starches.</p>
                        <p>Exercise to improve your mood</p>
                        <p>Do something you love</p>
                        <p>Make time for relaxation and rest</p></small>
                </div>
                <div className="col-3 mbrace-div-bdr py-4 my-4 mx-auto text-left">
                    <h6>2. Use Mental Tactics</h6><br />
                        <small><p>Make time for relaxation</p>
                        <p>Exercise to improve your mood</p>
                        <p>Do something you love</p>
                        <p>Limit coffe and alcohol, sugar and starches.</p></small>
                </div>
                <div className="col-3 mbrace-div-bdr py-4 my-4 mx-auto text-left">
                <h6>3. Seek Medical Treatment</h6><br />
                        <small><p>Exercise to improve your mood</p>
                        <p>Do something you love</p>
                        <p>Make time for relaxation</p>
                        <p>Limit coffe and alcohol, sugar and starches.</p></small>
                </div>
            </div>
            <div class="row justify-content-lg-center mx-0" id="fade">
                <div className="col-6 mx-auto mbrace-bg-prp">
                <h1 className="display-5 mx-5 pt-5 pb-3 px-auto">Read Our Blog on Mental Health</h1>
                <p className="text-left pb-5 px-5">90's direct trade actually DIY microdosing, fixie hexagon. Brooklyn bicycle rights tumblr mumblecore chillwave franzen organic pickled. Vinyl jean shorts pickled air plant +1 tilde.
                <a class="btn btn-lg mt-5 mb-5 mbrace-bg-org mbrace-btn" href="/" role="button">
                            Get Started&nbsp;&nbsp;
                            <svg width="2.5vw" height="2.5vw" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                            <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                    </a>
                </p>
                </div>
                <div className="col-6 my-auto">
                    <h1 className="display-5 pt-5 mx-3">Tough times never last but tough people do.</h1>
                    <p className="text-right pt-3 px-5">- Robert H. Schiuller</p>
                </div>
            </div>
            <div className="row justify-content-lg-center mbrace-bg-blu px-5 mx-0" id="fade">
                <div className="col-12 mx-0">
                    <h1 className="display-5 py-5 text-center">
                        Connect to Our Community
                    </h1>
                </div>
                <div className="col-2 mbrace-rsc-1 py-4 my-4 mx-auto"></div>
                <div className="col-2 mbrace-rsc-2 py-4 my-4 mx-auto"></div>
                <div className="col-2 mbrace-rsc-3 py-4 my-4 mx-auto"></div>
            </div>
            <div class="row justify-content-lg-center mbrace-bg-blu mx-0" id="fade">
                <div className="col-12 mx-0">
                        <h1 className="display-5 py-5 text-center">
                            Upcoming Virtual Events
                        </h1>
                </div>
            </div>
            <div class="row justify-content-lg-center mbrace-bg-blu pb-5 mx-0" id="fade">
                <div className="col-4 py-auto mx-0">
                        <small>As my son Steve says, just 'smoosh' it in there. It's not a real word, but people seem to know what it means. The only thing worse than yellow snow is green snow.</small>
                        <p></p>
                        <small>Remember our Golden Rule: A thin paint sticks to a thick paint. People look at me like I'm a little strange, when I go around talking to squirrels and rabbits and stuff. That's ok. Thaaaat's just ok.</small>
                </div>
                <div className="col-6 py-auto mx-0">
                        <p className="lead">
                            <img src={DigiVent} alt="virtual event" />
                        </p>
                </div>
            </div>
        </>

    )
}

export default Resources;