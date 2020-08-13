import React, { useState } from 'react';
import Axios from 'axios';

const Quote = (props) => {
    let [ quote, setQuote ] = useState(props)
    return (
        <div>
            {JSON.stringify(props)}
        </div>
    )
}

export default Quote;