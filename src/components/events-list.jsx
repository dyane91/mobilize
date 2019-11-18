import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getEvents} from '../redux-store/events'
import Card from 'react-bootstrap/Card';
import './events-list.css';

class EventsList extends Component {
  componentDidMount(){
    this.props.getEvents();
  }
  render(){
    const events = this.props.events.data;
    console.log("EN EVENT-LIST:", events);
    if(events){
      return(
      <div className="col-12 events-cards">
        {events.map(event => (
          <Card key={event.id} style={{ width: '18rem', marginBottom: '7px'}} bg="light">
              <Card.Img className="img-card" variant="top" src={!event.featured_image_url ? require("../no-image.jpg") : event.featured_image_url} />
              <Card.Body>
              <Card.Subtitle className="event-date">
                {/* some events don't have timeslots */}
                {event && event.timeslots.length ? new Date(event.timeslots[0].start_date*1000).toDateString("en-US") : <p>No date available</p>}</Card.Subtitle>
                <Card.Title className="event-title">{event.title}</Card.Title>
                <Card.Text>
                {!event.location ? "Its location is virtual" : event.location.locality + ", " + event.location.region + ", " + event.location.country}
                </Card.Text>
                <Link key={event.id} to={`/event/${event.id}`} className="more-event">More Info</Link>
              </Card.Body>
          </Card>
        ))}
      </div>
      )} else {
        return <div>{null}</div>
      }
  }
}

const mapStateToProps = state => ({
  events: state.events.events,
});

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
