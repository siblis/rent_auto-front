import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { loadCars } from 'actions/cars';

import Cars from 'components/Cars';

class CarsCont extends PureComponent {
  static propTypes = {
    cars: propTypes.array,
    loadCars: propTypes.func,
  }

  componentDidMount() {
    const { loadCars } = this.props;
    loadCars();
  }

  render() {
    return (
      <Cars cars={this.props.cars} />
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(CarsCont);
