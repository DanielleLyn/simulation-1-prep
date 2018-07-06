import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super(); 
      this.state={
        superheroes: []
      }
  }
  // Axios Get (Read)
  componentDidMount(){
    axios.get('/api/heroes').then(response => {
      this.setState({
        superheroes: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.superheroes.map(hero => {
          return (
            <div key={hero.id}>
              <h1>Name: {hero.name}</h1>
              <p> Street Name: {hero.street_name}</p>
              <p>Age: {hero.age}</p>
              <p>Powers: {hero.powers} </p>
              < img className="heroPic"src={hero.picture_url} alt="Picture of Heroes" />
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;