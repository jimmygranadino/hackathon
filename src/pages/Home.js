import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div class="row justify-content-lg-center mx-0" id="fade">
                <div class="col-12 mbrace-bg-2">
                </div>
            </div>
            <div class="row justify-content-center pb-5 my-5" id="fade">
                <div class="col-9 px-auto">
                    <p class="lead">Our vision is to create a vibrant community that encourages one another because we believe that words are powerful.</p>
                    <hr class="my-4" />
                    <p>Haven't had a vibe check since quaratine took effect?</p>
                    <p class="lead">
                        <Link class="btn btn-lg mbrace-bg-org mbrace-btn" to="/feeling" role="button">
                            Get Started&nbsp;&nbsp;
                            <svg width="2.5vw" height="2.5vw" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                            <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home;