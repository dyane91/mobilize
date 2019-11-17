import React, {Component} from 'react';
import { MyMapComponent } from './my-map';
import Card from 'react-bootstrap/Card';

export class SingleEvent extends Component {
    render(){
        return (
            <div className="col-12">
                <div className="row h-100">
                    <div className="col-6">
                        <p>Tuesday, November 12th 2019</p>
                        <p>Name Event</p>
                        <p>Hosted by *****</p>
                        <img src={require("../porahora.jpg")} alt="place"/>
                        <p>Enim incididunt reprehenderit irure ut eiusmod. Elit aute ex aliquip ad cupidatat magna exercitation esse aute cupidatat exercitation veniam nostrud. Ad dolore consectetur tempor do velit est in consectetur. Eiusmod aute magna culpa occaecat aliqua exercitation. Laborum reprehenderit cupidatat duis voluptate eiusmod ut adipisicing excepteur adipisicing irure excepteur culpa id reprehenderit. Ipsum sint elit nulla veniam ipsum deserunt occaecat. Laboris excepteur nostrud elit esse eu consectetur sit proident laboris ut.</p>
                    </div>
                    <div className="col-6" style={{width:"50%"}}>
                        <Card>
                            <Card.Text>Fecha</Card.Text>
                            <Card.Text>Address</Card.Text>
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
        )
    }
}
