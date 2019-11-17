import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getEvents} from '../redux-store/events'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './events-list.css';

class MainPage extends Component {
  componentDidMount(){
    this.props.getEvents();
  }
    render(){
      const events = this.props.events.data;
      if(events){
        return(
          <div className="col-12">
              <div className="intro-bg">
                  <p>Volunteering is caring :-)</p>
              </div>
              <div className="col-12 events-cards">
                  {/* <p>Upcoming Events</p> */}
                  {events.map(event => (
                    <Card key={event.id} border="warning" style={{ width: '18rem', marginBottom: '7px'}}>
                        <Card.Img variant="top" src={require("../porahora.jpg")} className="img-card" />
                        <Card.Body>
                            <Card.Subtitle>November 12th, 2019</Card.Subtitle>
                            <Card.Title>{event.title}</Card.Title>
                            <Card.Text>
                            Direccion del evento
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                  ))}
              </div>
          </div>
        )
      } else { return null }
    }
  }

const mapStateToProps = state => ({
  events: state.events.events,
});

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
