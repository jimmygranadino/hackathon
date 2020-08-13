import React, { useState } from 'react';
import Axios from 'axios';

const Quote = (props) => {
    let [ quote, setQuote ] = useState(props)
    return (
        <div>
            <p></p>
            <div class="row justify-content-lg-center mx-0" id="fade">
                <div class="col-12 mbrace-bg-5">
                </div>
            </div>
            <div class="row justify-content-center pb-5 my-5" id="fade">
                <div class="col-9 px-auto">
                    <h1 class="display-3">{props.quote}</h1>
                    <p className="lead text-right">-- {props.author}</p>
                </div>
            </div>
        </div>
    )
}

export default Quote;