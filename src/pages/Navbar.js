import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">mbrace</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarColor03">
                    <ul class="navbar-nav mr-auto">
                        <Link class="nav-link" to="/">Home</Link>
                        <Link class="nav-link" to="/feeling">Feeling</Link>
                        <Link class="nav-link" to="/quote">Quote</Link>
                        <Link class="nav-link" to="/about">About</Link>
                    </ul>
                    <a class="nav-link" href="#">
                        <svg width="3vw" height="3vw" viewBox="0 0 16 16" class="bi bi-person-circle mbrace-profile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                        </svg>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;