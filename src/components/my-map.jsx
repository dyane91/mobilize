import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import { connect } from 'react-redux';

class MyMapComponent extends Component {
  render(){
    if(!this.props.singleEvent.data.location){
      return <Map google={this.props.google} zoom={15}/>
    } else {
      const location = this.props.singleEvent.data.location.location;
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
