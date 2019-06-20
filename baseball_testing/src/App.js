import React, { Component } from 'react';
//components we need to render:
import Display from './components/Display'
import Dashboard from './components/Dashboard'
//styling
import './App.css';

class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  };

// balls and strikes reset to 0 when a hit is recorded.
baseHit = () => {
  this.setState({
    balls: 0,
    strikes: 0
  });
};  
// increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
foulBall = () => {
  this.setState(prevState => ({
    strikes: prevState.strikes < 2 ? prevState.strikes + 1 : prevState.strikes // if strike count is less then 2 and a foulball occurs then we will increment the strike count by one, if not it remains the same at 2.
  }));
}

strike = () => {
  this.setState(prevState => ({
    balls: prevState.strikes === 2 ? 0 : prevState.balls, // strike count increments by 1 and ball count remains the same
    strikes: prevState.strikes === 2 ? 0 : prevState.strikes + 1 //if prior to setState the strike count is equal to 2 then upon the next click action occurring (or strike) the strike count will reset to 0, otherwise, if will increment by one 
  }));
};

ball = () => {
  this.setState(prevState => ({
    balls: prevState.balls === 3 ? 0 : prevState.balls + 1,  //if prior to setState the ball count is equal to 3 then upon the next click action occurring (next ball) the ball count will reset to 0, otherwise the ballcount will increment by 1.
    strikes: prevState.balls === 3 ? 0 : prevState.strikes  // ball count increments by one and strike count remains the same.
  }));
};

render() {
  return (
    <div className="App">
      <Display strikes={this.state.strikes} balls={this.state.balls} />
      <Dashboard 
        baseHit={this.baseHit}
        foulBall={this.foulBall}
        strike={this.strike} 
        ball={this.ball}
        />
    </div>
  );
 }
}

export default App;