import './Contacts.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import propTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 56.846594, lng: 60.641537 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 56.846594, lng: 60.641537 }} />}
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
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GOOGLE_MAP_API_KEY}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `450px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <address className="contacts__address">
              <p>Адрес: г. Екатеринбург, ул. Гагарина 6/3</p>
              <p>Телефон: +7 (343) 201-2-401</p>
              <p>Сотовый: 89002012652</p>
              <p>Почта: info@tachka96.ru</p>
            </address>
            {/*
            <div className="contacts__order-call">
              <Input className="contacts__phone-input" type="phone" placeholder='Номер телефона'></Input>
              <Button className="contacts__order-btn">Заказать звонок</Button>
            </div>
            */}
          </div>
        </Container>
      </section>
    );
  }
}
