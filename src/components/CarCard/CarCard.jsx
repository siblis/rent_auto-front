import './CarCard.styl';

import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Cars extends PureComponent {
  static propTypes = {
    car: propTypes.object,
    history: propTypes.object,
  }

  render() {
    return (
      <div className="car-card">
        <img 
          src={require('../../assets/images/' + this.props.car.image_uri)}
          className="car-card__image" 
          alt=""
        />
        <h3 className="car-card__title">{this.props.car.brand.name} {this.props.car.name}</h3>
        <div className="car-card__description">
          <div className="car-card__text">
            Стоимость аренды:
          </div>
          <div className="car-card__table">
            {this.props.car.range_rates.map((rate, index) =>
              index < 5 ?
              <div className="car-card__row" key={index}>
                <div>{rate.name}</div>
                <div>{this.props.car.rental.day_cost * rate.rate}</div>
              </div> : ''
            )}
          </div>
          <div className="car-card__buttons">
            <Link className="btn btn-primary car-card__button" to={`/car/${this.props.car.id}`}>Подробнее</Link>
            <Link className="btn btn-secondary car-card__button" to={{pathname: '/app', carId: this.props.car.id}}>Забронировать</Link>
          </div>
        </div>
      </div>
    );
  }
}
