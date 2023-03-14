import React from 'react';
//styles
import '../styles/Navbar.scss';
//images
import navLogo from '../images/navLogo.png';
import summitIcon from '../images/summitIcon.png';


function Navbar() {
    return (

        <div className="navbar">
            <div className="leftColumn">
                <div className="top">
                    <a href="#"><img className="navlogo" src={navLogo} ></img></a>
                    <a  href="#"><img className="summitIcon" src={summitIcon} width="32" height="32"></img></a>
                </div>

                <div className="bottom">
                    <a className="user" href="#">FL</a>
                </div>
            </div>


            <div className="rightColumn">
                    <div className="navFrame">
                        <span className="rainFocusSummit">RainFocus Summit</span>

                         <h2 className="locationDate">Lehi, UT • December 15th</h2>
                            <div className="eventSearch">                
                                <input className='search' placeholder="Search"></input>
                            </div>

                                    <div className='toggleOff'>
                                        <div className='dot'></div>
                                            Guide
                                    </div>

                                    <div className='toggleOn'>
                                        <div className='dot'></div>
                                            Attendees
                                    </div>

                                    <div className='sub-menu'>
                                            <p>Attendees</p>
                                            <p>Attendee types</p>
                                            <p>Packages</p>
                                            <p>Reg codes</p>
                                            <p>Discounts</p>
                                    </div>

                                    <div className='toggleOff'>
                                        <div className='dot'></div>
                                            Content
                                    </div>


                                    <div className='toggleOff'>
                                        <div className='dot'></div>
                                            Exhibitors
                                    </div>            
                </div>
            </div>
        </div>
    );
};
export default Navbar;