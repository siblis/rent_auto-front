import './Car.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import propTypes from 'prop-types';

export default class Car extends PureComponent {
  static propTypes = {
    car: propTypes.object,
  }

  render() {
    return (
      <section className="car">
        <Container>
          <div className="car__wrapper">
          <div className="car__block">
            <img 
              src={require('../../assets/images/' + this.props.car.image_uri)}
              className="car-card__image" 
              alt=""
            />
            <div className="car__full-desc">
              <h3 className="car-card__title">{this.props.car.brand.name} {this.props.car.name}</h3></div>
            
            </div>
          
          </div>
        </Container>
      </section>
    );
  }
}
