import React from 'react';

function Card(props) {
    return (
        <div className={`${props.type}`}>
            <p className="workflowTitle"><img className={`${props.cardName}`} src={props.icon}></img>{props.title}</p>
            <p className="workflowDetails">{props.description}</p>
        </div>
    );
};
export default Card;

