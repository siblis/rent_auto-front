import './Car.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
                className="car__image" 
                alt=""
              />
              <div className="car__full-desc">
                <h3 className="car__title">{this.props.car.full_name}</h3>
                <div className="car__text">{this.props.car.note}</div>
              </div>
            </div>
            <div className="car__info">
              <div className="car__description">
                <div className="car__subtitle">
                  Стоимость аренды:
                </div>
                <div className="car__table">
                  {this.props.car.range_rates.map((rate, index) => 
                    <div className="car__row" key={index}>
                      <div>{rate.name}</div>
                      <div>{this.props.car.rental.day_cost * rate.rate}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="car__buttons">
                <Link className="btn btn-primary car__button" to={'/cars'}>Назад</Link>
                <Link className="btn btn-secondary car__button" to={{pathname: '/app', carId: this.props.car.id}}>Забронировать</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}
