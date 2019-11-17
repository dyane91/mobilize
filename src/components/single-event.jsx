import React, {Component} from 'react';
import MyMapComponent from './my-map';
import {connect} from 'react-redux';
import {getSingleEvent} from '../redux-store/events';
import Card from 'react-bootstrap/Card';

class SingleEvent extends Component {
    componentDidMount() {
      console.log('COMPONENT DID MOUNT');
      this.props.getSingleEvent(this.props.match.params.id);
    }
    render() {
      const event = this.props.singleEvent.data;
        return event && Object.keys(event.length > 0) ? (
            <div className="col-12">
                <div className="row h-100">
                    <div className="col-6">
                        <p>{new Date(event.timeslots[0].start_date*1000).toDateString("en-US")}</p>
                        <p>{event.title}</p>
                        <p>Hosted by {event.sponsor.name}</p>
                        <img src={require("../porahora.jpg")} alt="place"/>
                        <p>{event.summary}</p>
                    </div>
                    <div className="col-6" style={{width:"50%"}}>
                        <Card>
                            <Card.Text>{new Date(event.timeslots[0].start_date*1000).toDateString("en-US")}</Card.Text>
                            <Card.Text>{event.location ? <p>{event.location.venue} <br/> {event.location.address_lines} <br/>
                            {event.location.region} {event.location.region}</p> : <p>Virtual event</p>}</Card.Text>
                            <Card.Body>
                                <MyMapComponent
                                    isMarkerShown
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDqWpY6TUwy3t_6dZbOIJVHuXEZ9wpqxkM"
                                    loadingElement={<div style={{ height: `100%`}} />}
                                    containerElement={<div style={{ height: `400px` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                />
                            </Card.Body>
                        </Card>
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
