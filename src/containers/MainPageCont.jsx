import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import MainPageStepOne from 'components/MainPageStepOne';
import MainPageStepTwo from 'components/MainPageStepTwo';
import MainPageStepThree from 'components/MainPageStepThree';
import { loadBrands } from 'actions/brands';
import app from '../app';

class MainPageCont extends PureComponent {
  static propTypes = {
    loadBrands: propTypes.func,
    brands: propTypes.array,
  }

  state = {
    step: 1,
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    brand: {},
    price: null,
  }
  
  componentDidMount() {
    const { loadBrands } = this.props;
    loadBrands();
  }

  handleStartDateInput = startDate => {
    this.setState({
      startDate,
    }, () => this.calculatePrice());
  }

  handleEndDateInput = endDate => {
    this.setState({
      endDate,
    }, () => this.calculatePrice());
  }

  handleStartTimeInput = startTime => {
    this.setState({
      startTime,
    }, () => this.calculatePrice());
  }

  handleEndTimeInput = endTime => {
    this.setState({
      endTime,
    }, () => this.calculatePrice());
  }

  handleBrandInput = e => {
    let selectedBrand;
    for (let brand of this.props.brands) {
      if (brand.id == e.target.id) {
        selectedBrand = brand;
        break;
      }
    }
    this.setState({
      brand: selectedBrand,
    }, () => this.calculatePrice());
  }

  calculatePrice = () => {
    if (this.state.startTime !== '' && this.state.endTime !== '' && this.state.startDate !== '' &&
      this.state.endDate !== '' && this.state.brand !== {}) {
      const startDate = moment(this.state.startDate).add({
        hours: this.state.startTime.format('h'),
        minutes: this.state.startTime.format('m')
      }).toISOString();
      const endDate = moment(this.state.endDate).add({
        hours: this.state.endTime.format('h'),
        minutes: this.state.endTime.format('m')
      }).toISOString();
      const request = `rent_values?start_time=${startDate}&end_time=${endDate}&model=${this.state.brand.id}`
      app.get(request).then(res => {
        this.setState({
          price: res.data
        })
      })
    }
  }

  handleNextButton = () => {
    // TO DO validate
    this.setState({
      step: 2,
    });
  }

  render() {
    if (this.state.step === 1) {
      return (
        <MainPageStepOne 
          startDate={this.state.startDate !== '' ? moment(this.state.startDate).format('DD MM YYYY') : ''}
          endDate={this.state.endDate !== '' ? moment(this.state.endDate).format('DD MM YYYY') : ''}
          startTime={this.state.startTime}
          endTime={this.state.endTime}
          brands={this.props.brands}
          brand={this.state.brand}
          price={this.state.price}
          handleStartDateInput={this.handleStartDateInput}
          handleEndDateInput={this.handleEndDateInput}
          handleStartTimeInput={this.handleStartTimeInput}
          handleEndTimeInput={this.handleEndTimeInput}
          handleBrandInput={this.handleBrandInput}
          handleNextButton={this.handleNextButton}
        />
      );
    }
    if (this.state.step === 2) {
      return (
        <MainPageStepTwo />
      );
    }
    if (this.state.step === 3) {
      return (
        <MainPageStepThree />
      );
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    brands: state.brands.entities,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    ...ownProps,
    loadBrands: () => dispatch(loadBrands()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageCont);
