import React, { Component } from 'react';
import './App.css';

//Components
import NavBar from './Components/Nav/';
import BodyApp from './Components/bodyApp/';
import Footer from './Components/Footer/';


/*const apikey=093160a2b20c47afb23c390568c357c0*/
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BodyApp />
        <Footer />
      </div>
    );
  }
}

export default App;
