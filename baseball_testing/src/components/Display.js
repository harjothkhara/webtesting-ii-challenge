import React from 'react';

const Display = props => {
    return (
    <section className="mainscore">
        <div className="score">
            <h2>Strikes</h2>
            <p>{props.strikes}</p>
        </div>
        <div className="score">
            <h2>Balls</h2>
            <p>{props.balls}</p>
        </div>
    </section>
    );
};

export default Display;