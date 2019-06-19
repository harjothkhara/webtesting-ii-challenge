import React from 'react';
//displays the count of balls and strikes for the at-bat. strikes and balls on state.
//should be updated when the user records activity on the Dashboard component.OnClick on dashboard triggers setState function which updates state.

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