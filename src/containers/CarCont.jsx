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
    if (car) {
      this.setState({
        car,
      })
    } else {
      this.props.history.push("/cars");
    }
  }

  getCarById = () => {
    const { id } = this.props.match.params;
    return this.props.cars.find(car => +car.id === +id);
  }

  render() {
    if (this.state.car) {
      return (
        <Car car={this.state.car} />
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
