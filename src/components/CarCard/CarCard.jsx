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
        <Link to={`/car/${this.props.car.id}`}>
          <img 
            src={this.props.car.link || require('../../assets/images/no-image.png')}
            className="car-card__image" 
            alt=""
          />
        </Link>
        <Link to={`/car/${this.props.car.id}`}>
          <h3 className="car-card__title">{this.props.car.brand.name} {this.props.car.name} {this.props.car.model_class.name} {this.props.car.style}</h3>
        </Link>
        <div className="car-card__description">
          <div className="car-card__text">
            Стоимость аренды:
          </div>
          <div className="car-card__table">
            {this.props.car.range_rates.map((rate, index) =>
              index < 5 ?
              <div className="car-card__row" key={index}>
                <div>{rate.name}</div>
                <div>{(this.props.car.rental.day_cost * rate.rate).toFixed(0)}</div>
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
