import React from "react";
import './End.css';


function End(props) {
    return <div className={'end'}>
        <h3 className={'end-title'}>Congratulations</h3>
        <p className="end-description">Your message has been sent successfuly.</p>
        <button onClick={props.home} className="end-button">Return Home</button>

    </div>
}

export default End;