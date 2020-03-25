import React from 'react';
import './Home.css';

function Home(props) {
    return <div className={'home'}>
        <h3 className={'home-title'}>Twilio Bulk SMS App Client</h3>
        <p className={'home-description'}>This is a demo app for testing the sample API from my article published on Twilio titled
            “Building a Bulk SMS Service with Twilio Programmable SMS”</p>

        <button onClick={props.next} className={'home-button'}>Get Started</button>
    </div>;
}

export default Home;