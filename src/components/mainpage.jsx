import React, {Component} from 'react';
import EventsList from './events-list';
import './mainpage.css';

export default class MainPage extends Component {
  render(){
    return(
      <div className="col-12">
          <div className="intro-bg">
              <p>Volunteering is caring :-)</p>
          </div>
          <div>
            <h1>Upcoming Events</h1>
          </div>
          <EventsList />
      </div>
    )
  }
};
