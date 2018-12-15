import './Cars.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import propTypes from 'prop-types';

import CarCard from 'components/CarCard';

export default class Cars extends PureComponent {
  static propTypes = {
    cars: propTypes.array,
  }

  render() {
    return (
      <section className="cars">
        <Container>
          <div className="cars__wrapper">
            {this.props.cars
              .sort((a, b) => a.id - b.id)
              .map(car => 
              <CarCard key={+car.id} car={car} />
            )}
          </div>
        </Container>
      </section>
    );
  }
}
