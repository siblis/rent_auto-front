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
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    phoneNumber: '',
    additional: [],
    passportGetDate: '',
    birthdayDate: '',
    licenseGetDate: '',
    licenseExpireDate: '',
  }
  
  componentDidMount() {
    const { loadBrands } = this.props;
    loadBrands();
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
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

  handleToStepTwoButton = () => {
    if (this.state.startTime === '' || 
    this.state.endTime === '' ||
    this.state.startDate === '' ||
    this.state.endDate === '' ||
    this.state.brand === {}) {
      alert('Заполните пожалуйста все поля!');
      return;
    }
    this.setState({
      step: 2,
    });
  }

  handleToStepThreeButton = () => {
    if (this.state.firstName === '' || 
    this.state.lastName === '' ||
    this.state.email === '' ||
    this.state.phoneNumber === '') {
      alert('Заполните пожалуйста все поля!');
      return;
    }
    this.setState({
      step: 3,
    });
  }

  handlePassportGetDateInput = passportGetDate => {
    this.setState({
      passportGetDate,
    });
  }

  handleBirthdayDateInput = birthdayDate => {
    this.setState({
      birthdayDate,
    });
  }

  handleLicenseExpireDateInput = licenseExpireDate => {
    this.setState({
      licenseExpireDate,
    })
  }

  handleLicenseGetDateInput = licenseGetDate => {
    this.setState({
      licenseGetDate,
    })
  }

  handleBackButton = () => {
    this.setState({
      step: this.state.step - 1,
    })
  }

  handleSubmitButton = () => {
    // TO DO validate
    const startDate = moment(this.state.startDate).add({
      hours: this.state.startTime.format('h'),
      minutes: this.state.startTime.format('m')
    }).toISOString();
    const endDate = moment(this.state.endDate).add({
      hours: this.state.endTime.format('h'),
      minutes: this.state.endTime.format('m')
    }).toISOString();
    const { brand, price, firstName, lastName, middleName, email, phoneNumber, additional, birthdayDate, passportGetDate } = this.state;
    const application = {
      begin_time: startDate,
      end_time: endDate,
      model_name: brand,
      price,
      first_name: firstName,
      last_name: lastName,
      middleName,
      email,
      phone: phoneNumber,
      additional,
      birthdate: birthdayDate,
      doc_issued_date: passportGetDate,
    }
    let request = 'requests?';
    for (let field in application) {
      request += `&${field}=${application[field]}`;
    }
    app.post(request);
    alert('Ваша заявка принята на рассмотрение! (но это не точно)');
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
          handleToStepTwoButton={this.handleToStepTwoButton}
        />
      );
    }
    if (this.state.step === 2) {
      return (
        <MainPageStepTwo
          handleInput={this.handleInput}
          handleToStepThreeButton={this.handleToStepThreeButton}
        />
      );
    }
    if (this.state.step === 3) {
      return (
        <MainPageStepThree
          passportGetDate={this.state.passportGetDate !== '' ? moment(this.state.passportGetDate).format('DD MM YYYY') : 'Когда выдан'}
          birthdayDate={this.state.birthdayDate !== '' ? moment(this.state.birthdayDate).format('DD MM YYYY') : 'Дата рождения'}
          licenseExpireDate={this.state.licenseExpireDate !== '' ? moment(this.state.licenseExpireDate).format('DD MM YYYY') : 'Срок действия'}
          licenseGetDate={this.state.licenseGetDate !== '' ? moment(this.state.licenseGetDate).format('DD MM YYYY') : 'Когда выдано'}
          handleInput={this.handleInput}
          handlePassportGetDateInput={this.handlePassportGetDateInput}
          handleBirthdayDateInput={this.handleBirthdayDateInput}
          handleLicenseGetDateInput={this.handleLicenseGetDateInput}
          handleLicenseExpireDateInput={this.handleLicenseExpireDateInput}
          handleBackButton={this.handleBackButton}
          handleSubmitButton={this.handleSubmitButton}
        />
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
