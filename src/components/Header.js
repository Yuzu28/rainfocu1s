import React from 'react';
//styles
import '../styles/Header.scss';
//images
import summitLogo from '../images/summitLogo.png';

function Header() {
    return (

        <div className="header">
            <div className='sectionTitle'>
                <img src={summitLogo}></img>
                    <div className='title'>
                        <h1>RainFocus Summit</h1>
                            <div className="dateLocation">
                                 <p>December 15</p>
                                 <p>Lehi, Utah</p>
                            </div>
                    </div>
                        <button className='editButton'>Edit event</button>
            
            </div>
                    <div className='pageDetails'>
                        <h2>Event setup guide</h2>
                        <p>See the available list of modules below. We suggest you start with the attendee module.</p>
                    </div>
        
        </div>
    );
};
export default Header;