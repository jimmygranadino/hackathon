import React, { useState } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'
const Feeling = (props) => {
    let [quote, setQuote] = useState();
    let submitNegative = (e) => {
        e.preventDefault()
        Axios.post(`${process.env.REACT_APP_SERVER_URL}/quotes`, {sentiment: "negative"})
            .then(quote => {
                console.log("Here is a negative quote", quote.data)
                setQuote(quote.data);
            })
            .catch(err => console.log(err))
    }
    let submitNeutral = (e) => {
        e.preventDefault();
        Axios.post(`${process.env.REACT_APP_SERVER_URL}/quotes`, {sentiment: ""})
            .then(quote => {
                console.log("Here is a random quote", quote.data)
                setQuote(quote.data);
            })
            .catch(err => console.log(err))
    }    
    let submitPositive = (e) => {
        e.preventDefault();
        Axios.post(`${process.env.REACT_APP_SERVER_URL}/quotes`, {sentiment: "positive"})
            .then(quote => {
                console.log("Here is a positive quote", quote.data)
                setQuote(quote.data);
            })
            .catch(err => console.log(err))
    }
    if (quote) {
        props.setQuote(quote.quote)
        props.setAuthor(quote.author)
        console.log("Trying to redirect using quote " + quote.quote + " by " + quote.author);
        return <Redirect to={`quote`} />
    }
    return (
        <>
            <div class="row justify-content-lg-center mx-0" id="fade">
                <div class="col-12 mbrace-bg-1">
                </div>
            </div>
            <div class="row justify-content-center my-5" id="fade">
                <div class="col-9 px-auto">
                    <h1 className="mbrace-font mbrace-center px-auto">Today, I am feeling...</h1>
                </div>
            </div>
            <div class="row justify-content-lg-center text-center pb-5" id="fade">
                <div class="col-4"  onClick={submitNegative}>
                    <svg width="14vw" height="14vw" viewBox="0 0 16 16" class="bi bi-emoji-frown mbrace-emoji-s" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fill-rule="evenodd" d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z"/>
                    <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                    </svg>
                </div>
                <div class="col-4" onClick={submitNeutral}>
                    <svg width="14vw" height="14vw" viewBox="0 0 16 16" class="bi bi-emoji-neutral mbrace-emoji-n" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fill-rule="evenodd" d="M4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
                    <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                    </svg>
                </div>
                <div class="col-4" onClick={submitPositive}>
                    <svg width="14vw" height="14vw" viewBox="0 0 16 16" class="bi bi-emoji-smile mbrace-emoji-h" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
                    <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Feeling;