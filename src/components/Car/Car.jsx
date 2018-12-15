import './Car.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import textParser from '../../utils/textParser';

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
              <div className="car__img-wrapper">
                <img 
                  src={this.props.car.link || require('../../assets/images/no-image.png')}
                  className="car__image"
                  alt=""
                />
              </div>
              <div className="car__full-desc">
                <h3 className="car__title">{this.props.car.full_name}</h3>
                <div className="car__text">{textParser(this.props.car.note).map((paragraph, index) => 
                  <p key={index}>{paragraph}</p>
                )}</div>
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
