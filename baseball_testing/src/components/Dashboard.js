import React from 'react';
//provide a button that the person in charge can press every time there is a strike, ball, foul or hit
//changes recorded on this component should update the information shown by the Display component.

const Dashboard = props => {
    return (
        <section className="dashboard">
            <button onClick={props.baseHit}>Hit</button>  
            <button onClick={props.foulBall}>Foul</button>
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.ball}>Ball</button>
        </section>
    )
};

export default Dashboard;