import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import { connect } from 'react-redux';

class MyMapComponent extends Component {
  render(){
    const eventLocation = this.props.singleEvent.data.location
    if(!eventLocation){
      return <Map google={this.props.google} zoom={15}/>
    } else {
      const location = eventLocation.location;
      return (
        <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{ lat: location.latitude, lng: location.longitude}}
        >
          <Marker position={{ lat:location.latitude, lng: location.longitude }}/>
        </Map>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  singleEvent: state.events.singleEvent
});

export default connect(mapStateToProps)(GoogleApiWrapper({apiKey: "AIzaSyDqWpY6TUwy3t_6dZbOIJVHuXEZ9wpqxkM"})(MyMapComponent));
