import React from 'react';
//styles
import '../styles/Attendee.scss';
//images
import AttendeeIcon from '../images/Attendee.png';
import add from '../images/add.png';
import arrow from '../images/arrow.png';
import portal from '../images/portal.png';

//components
import Card from '../components/Card'

function Attendee() {

    return (

        <div className='attendees'>
            <div className='heading'>
                 <img src={AttendeeIcon}></img>
                <p className="title">Attendee</p>
            </div>
                <p className="stepTitle"><b>Step 1: </b>Base settings.</p>

                <div className="flex-container">
                    <div className="box box1">
                        <p className="boxTitle">General</p>
                        <p className="details">Define Attendee types & attributes</p>
                        </div>
                    <div className="box box2">  <p className="boxTitle">Title</p>
                        <p className="details">Description that explains the value goes here. Description that explains the value goes here.</p></div>
                        <div className="box box2">  <p className="boxTitle">Title</p>
                        <p className="details">Description that explains the value goes here. Description that explains the value goes here.</p></div>
                </div>

                        <p className="stepTitle"><b>Step 2: </b>Build registration workflows.</p>

                        <div class="grid-container">
                            <Card type="item" cardName="arrow" title="Attendee Registration" icon={arrow} description="Start by Creating a general registration workflow"></Card>
                            <Card type="item" cardName="arrow" title="Attendee Registration" icon={arrow} description="Start by Creating a general registration workflow"></Card>
                            <Card type="item" cardName="arrow" title="Attendee Registration" icon={arrow} description="Start by Creating a general registration workflow"></Card>

                            <Card type="addItem" cardName="arrow" icon={add} description="Add Registration Workflow"></Card>

                        </div>
                                <p className="stepTitle"><b>Step 3: </b>Design Post-registration experience.</p>
                            
                                    <div className="grid-container">
                                        <Card type="item" cardName="portal" title="Attendee Portal" icon={portal} description="Manage the portal that attendees will see after they've register for your event."></Card>
                                    </div>
     </div>
    );
};
export default Attendee;