import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './../../index.css';

//Components 
import Home from './Home';
import MoviePage from './Peliculas'; 
import SeriesPage from './Series'; 
import Blog from './Blog'; 

export default class BodyApp extends Component {
  render() {
    return (
      <div className='bodyapp'>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/peliculas" component={MoviePage} />
          <Route exact path="/series" component={SeriesPage} />
          <Route exact path="/blog" component= {Blog} />
      </Switch>
      </div>
      )
  }
};
