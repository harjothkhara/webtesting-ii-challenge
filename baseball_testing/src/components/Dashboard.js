import React from 'react';

const Display = props => {
    return (
        <section className="dashboard">
            <button onClick={props.baseHit}>Hit</button>
            <button onClick={props.foulBall}>Foul</button>
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.ball}>Ball</button>
        </section>
    )
};

export default Display;