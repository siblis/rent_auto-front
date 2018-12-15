import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { loadCars } from 'actions/cars';

import Car from 'components/Car';

class CarCont extends PureComponent {
  static propTypes = {
    cars: propTypes.array,
    loadCars: propTypes.func,
    match: propTypes.object,
    history: propTypes.object,
  }

  state = {
    car: undefined,
  }

  componentDidMount() {
    const { loadCars } = this.props;
    loadCars();
    const car = this.getCarById();
    this.setState({
      car,
    })
  }

  getCarById = () => {
    const { id } = this.props.match.params;
    return this.props.cars.filter(car => +car.id === +id)[0];
  }

  render() {
    if (this.props.cars.length > 0) {
      const car = this.getCarById();
      return (
        <Car car={car} />
      );
    } else {
      return '';
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    cars: state.cars.entities,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    ...ownProps,
    loadCars: () => dispatch(loadCars()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarCont);
