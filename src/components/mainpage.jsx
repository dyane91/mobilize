import React, {Component} from 'react';
import EventsList from './events-list';
import './mainpage.css';

export default class MainPage extends Component {
  render(){
    return(
      <div className="col-12">
          <div className="row intro-bg">
              <p>If you want to feel like you're changing the political landscape by doing more than just voting, volunteer for a political campaign. Working for any kind of campaign—mayoral, congressional, presidential—is a way for anybody to directly help create governmental change.</p>
          </div>
          <div className="list-div">
            <h1>List of Events</h1>
          </div>
          <EventsList />
      </div>
    )
  }
};
