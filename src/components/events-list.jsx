import React, {Component} from 'react';
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
              <div>
                <p>Upcoming Events</p>
              </div>
              <div className="col-12 events-cards">
                  {events.map(event => (
                    <Card key={event.id} border="warning" style={{ width: '18rem', marginBottom: '7px'}}>
                        <Card.Img className="img-card" variant="top" src={!event.featured_image_url ? require("../no-image.jpg") : event.featured_image_url} />
                        <Card.Body>
                        <Card.Subtitle className="event-date">{new Date(event.timeslots[0].start_date*1000).toDateString("en-US")}</Card.Subtitle>
                            <Card.Title className="event-title">{event.title}</Card.Title>
                            <Card.Text>
                            {!event.location ? "Its location is virtual" : event.location.locality + ", " + event.location.region + ", " + event.location.country}
                            </Card.Text>
                            {/* <Link to={`/${event.id}`} >
                              <Button variant="primary">Go somewhere</Button>
                            </Link> */}
                            <Link key={event.id} to={`/event/${event.id}`} >Go somewhere</Link>
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
