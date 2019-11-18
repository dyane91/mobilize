import React, {Component} from 'react';
import MyMapComponent from './my-map';
import {connect} from 'react-redux';
import {getSingleEvent} from '../redux-store/events';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {FiMapPin, FiCalendar} from 'react-icons/fi';
import './single-event.css';

class SingleEvent extends Component {
    componentDidMount() {
      this.props.getSingleEvent(this.props.match.params.id);
    }
    render() {
      const event = this.props.singleEvent.data;
        return event && Object.keys(event.length > 0) ? (
            <div className="col-12 mt-4">
                <div className="row h-100">
                    <div className="col-7">
                        <h5 className="event-date">{new Date(event.timeslots[0].start_date*1000).toDateString("en-US")}</h5>
                        <h1 className="event-title">{event.title}</h1>
                        <p>Owned by {event.sponsor.name}</p>
                        <img src={!event.featured_image_url ? require("../no-image.jpg") : event.featured_image_url} alt="crowd people"/>
                        <div className="about-event my-3">
                          <h3>Description:</h3>
                          <p>{event.description}</p>
                        </div>
                    </div>
                    <div className="col-5 event-card mt-5" >
                      <div>
                        <Card style={{width:"18rem", height: "15rem"}}>
                            <Card.Text className="date-card mt-3 ml-2"><FiCalendar/>  {new Date(event.timeslots[0].start_date*1000).toDateString("en-US")}</Card.Text>
                            <Card.Text className="ml-2"><FiMapPin/> Address:{event.location ? <p>{event.location.venue} <br/> {event.location.address_lines} <br/>
                            {event.location.region} {event.location.region}</p> : <p>Virtual event</p>}</Card.Text>
                            <MyMapComponent/>
                        </Card>
                      </div>
                      <div style={{marginTop: "160px"}}>
                        <Button className="rsvp-bttn" variant="danger" size="lg" onClick={()=>alert("Thanks for volunteering! This is just a test :-)")}>
                          RSVP
                        </Button>
                      </div>
                    </div>
                </div>
            </div>
        ) : (<div>No Loading</div>)
    }
}

const mapStateToProps = (state) => ({
  singleEvent: state.events.singleEvent
});

const mapDispatchToProps = dispatch => ({
  getSingleEvent: (id) => dispatch(getSingleEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);
