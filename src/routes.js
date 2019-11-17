import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import { HomePage } from './components/homepage';
import SingleEvent from './components/single-event';

export default class Routes extends Component {
  render (){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/event/:id" component={SingleEvent}/>
        </Switch>
      </div>
    )
  }
}

