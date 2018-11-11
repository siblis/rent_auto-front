import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import Component from 'components/MainPage';
import { loadCarModels } from 'actions/carModels';

class MainPageCont extends PureComponent {
  static propTypes = {
    loadCarModels: propTypes.func,
    carModels: propTypes.array,
  }

  componentDidMount() {
    const { loadCarModels } = this.props;
    loadCarModels();
  }

  render() {
    return (
      <Component carModels={this.props.carModels}/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    carModels: state.carModels.entities,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    ...ownProps,
    loadCarModels: () => dispatch(loadCarModels()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageCont);
