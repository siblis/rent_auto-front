import './Contacts.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import propTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

export default class Contacts extends PureComponent {
  static propTypes = {
    center: propTypes.object,
    zoom: propTypes.number,
  }
  
  static defaultProps = {
    center: {
      lat: 56.846594,
      lng: 60.641537,
    },
    zoom: 16,
  };

  render() {
    return (
      <section className="contacts">
        <Container>
          <div className="contacts__wrapper">
            <h1>Контакты</h1>
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAeMuPn5RUXqsuy0lnX0kR3Wh_89XPMhZA"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </Container>
      </section>
    );
  }
}
