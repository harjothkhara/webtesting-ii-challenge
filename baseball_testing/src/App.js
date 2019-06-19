import React, { Component }from 'react';
import Display from './components/Display'
import Dashboard from './components/Dashboard'
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
  })
}  

foulBall = () => {
  this.setState(prevState => ({
    strikes: prevState.strike < 2 ? prevState.strikes + 1 : prevState.strikes
  }))
}

strike = () => {
  this.setState(prevState => ({
    balls: prevState.strikes === 2 ? 0 : prevState.balls,
    strikes: prevState.strikes === 2 ? 0 : prevState.strikes + 1
  }));
};

ball = () => {
  this.setState(prevState => ({
    balls: prevState.balls === 3 ? 0 : prevState.balls + 1, 
    strikes: prevState.balls === 3 ? 0 : prevState.strikes
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