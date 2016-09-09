import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    location: ''
  };

  fetchData = (evt) => {
    evt.preventDefault();  
    var location = encodeURIComponent(this.state.location);

    //https://davidwalsh.name/fetch
  }

  changeLocation = (evt) => {
    this.setState({location: evt.target.value});
  }

  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <form onSubmit={this.fetchData}>
          <label>What's the weather in 
            <input placeholder="enter a city..." 
              value={this.state.location} 
              onChange={this.changeLocation} />?
          </label>
        </form>
      </div>
    );
  }
}

export default App;
