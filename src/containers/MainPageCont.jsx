import React, { PureComponent, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import MainPageStepOne from 'components/MainPageStepOne';
import MainPageStepTwo from 'components/MainPageStepTwo';
import MainPageStepThree from 'components/MainPageStepThree';
import FAQ from 'components/FAQ';
import { loadBrands } from 'actions/brands';
import app from '../app';

class MainPageCont extends PureComponent {
  static propTypes = {
    loadBrands: propTypes.func,
    brands: propTypes.array,
  }

  state = {
    step: 1,
    stepOneLazyValidation: false,
    stepTwoLazyValidation: false,
    stepThreeLazyValidation: false,
    startDate: '',
    validStartDate: true,
    endDate: '',
    validEndDate: true,
    startTime: '',
    validStartTime: true,
    endTime: '',
    validEndTime: true,
    brand: undefined,
    validBrand: true,
    price: null,
    firstName: '',
    validFirstName: true,
    lastName: '',
    validLastName: true,
    middleName: '',
    email: '',
    validEmail: true,
    phoneNumber: '',
    validPhoneNumber: true,
    personalDataCheckbox: false,
    validPersonalDataCheckbox: true,
    additional: [],
    passportSeries: '',
    passportGetDate: '',
    birthdayDate: '',
    licenseGetDate: '',
    licenseExpireDate: '',
  }
  
  componentDidMount() {
    const { loadBrands } = this.props;
    loadBrands();
  }

  handleInputStepTwo = event => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => {
      this.validateStepTwo();
    });
  }

  handleInputStepThree = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleStartDateInput = startDate => {
    this.setState({
      startDate,
    }, () => {
      this.validateStepOne();
      this.calculatePrice();
    });
  }

  handleEndDateInput = endDate => {
    this.setState({
      endDate,
    }, () => {
      this.validateStepOne();
      this.calculatePrice();
    });
  }

  handleStartTimeInput = startTime => {
    this.setState({
      startTime,
    }, () => {
      this.validateStepOne();
      this.calculatePrice();
    });
  }

  handleEndTimeInput = endTime => {
    this.setState({
      endTime,
    }, () => {
      this.validateStepOne();
      this.calculatePrice();
    });
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
    }, () => {
      this.validateStepOne();
      this.calculatePrice();
    });
  }

  handlePersonalDataCheckbox = () => {
    this.setState({
      personalDataCheckbox: !this.state.personalDataCheckbox,
    }, () => {
      this.validateStepTwo();
    });
  }

  validateStepOne = () => {
    if (this.state.stepOneLazyValidation) {
      this.setState({
        validStartDate: this.state.startDate !== '',
        validEndDate: this.state.endDate !== '',
        validStartTime: this.state.startTime !== '',
        validEndTime: this.state.endTime !== '',
        validBrand: this.state.brand !== undefined,
      })
    }
    if (this.state.startTime !== '' && this.state.endTime !== '' && this.state.startDate !== '' &&
    this.state.endDate !== '' && this.state.brand !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  validateStepTwo = () => {
    if (this.state.stepTwoLazyValidation) {
      this.setState({
        validFirstName: this.state.firstName !== '',
        validLastName: this.state.lastName !== '',
        validEmail: this.state.email !== '',
        validPhoneNumber: this.state.phoneNumber !== '',
        validPersonalDataCheckbox: this.state.personalDataCheckbox,
      })
    }
    if (this.state.firstName !== '' && this.state.lastName !== '' &&
    this.state.email !== '' && this.state.phoneNumber !== '' && this.state.personalDataCheckbox) {
      return true;
    } else {
      return false;
    }
  }

  calculatePrice = () => {
    if (this.validateStepOne()) {
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
    this.setState({
      stepOneLazyValidation: true,
    }, () => {
      if (this.validateStepOne()) {
        this.setState({
          step: 2,
        });
      }
    });
  }

  handleToStepThreeButton = () => {
    this.setState({
      stepTwoLazyValidation: true,
    }, () => {
      if (this.validateStepTwo()) {
        this.setState({
          step: 3,
        });
      }
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
    const startDate = moment(this.state.startDate).add({
      hours: this.state.startTime.format('h'),
      minutes: this.state.startTime.format('m')
    }).toISOString();
    const endDate = moment(this.state.endDate).add({
      hours: this.state.endTime.format('h'),
      minutes: this.state.endTime.format('m')
    }).toISOString();
    const { brand, price, firstName, lastName, middleName, email, phoneNumber, 
      additional, birthdayDate, passportGetDate, licenseGetDate, licenseExpireDate } = this.state;
    const application = {
      begin_time: startDate,
      end_time: endDate,
      model_name: brand,
      last_name: lastName,
      first_name: firstName,
      patronymic: middleName,
      birthdate: birthdayDate,
      email,
      phone: phoneNumber,
      doc_number: null,  // TO DO
      doc_issued_by: '',  // TO DO
      doc_issued_date: passportGetDate,
      doc_registration: '',  // TO DO
      lic_number: null,  // TO DO
      lic_date: licenseGetDate,
      lic_issued_by: '',  // TO DO
      lic_valid_to: licenseExpireDate,
      note: '',  // TO DO
      price,
      additional,
    }
    app.post('requests', application);
    alert('Ваша заявка принята на рассмотрение!');
  }

  render() {
    if (this.state.step === 1) {
      return (
        <Fragment>
          <MainPageStepOne
            startDate={this.state.startDate !== '' ? moment(this.state.startDate).format('DD MM YYYY') : ''}
            endDate={this.state.endDate !== '' ? moment(this.state.endDate).format('DD MM YYYY') : ''}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            brands={this.props.brands}
            brand={this.state.brand}
            price={this.state.price}
            handleStartDateInput={this.handleStartDateInput}
            validStartDate={this.state.validStartDate}
            validEndDate={this.state.validEndDate}
            validStartTime={this.state.validStartTime}
            validEndTime={this.state.validEndTime}
            validBrand={this.state.validBrand}
            handleEndDateInput={this.handleEndDateInput}
            handleStartTimeInput={this.handleStartTimeInput}
            handleEndTimeInput={this.handleEndTimeInput}
            handleBrandInput={this.handleBrandInput}
            handleToStepTwoButton={this.handleToStepTwoButton}
          />
          <FAQ />
        </Fragment>
      );
    }
    if (this.state.step === 2) {
      return (
        <Fragment>
          <MainPageStepTwo
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            middleName={this.state.middleName}
            personalDataCheckbox={this.state.personalDataCheckbox}
            validFirstName={this.state.validFirstName}
            validLastName={this.state.validLastName}
            validEmail={this.state.validEmail}
            validPhoneNumber={this.state.validPhoneNumber}
            validPersonalDataCheckbox={this.state.validPersonalDataCheckbox}
            handleInputStepTwo={this.handleInputStepTwo}
            handlePersonalDataCheckbox={this.handlePersonalDataCheckbox}
            handleToStepThreeButton={this.handleToStepThreeButton}
          />
          <FAQ />
        </Fragment>
      );
    }
    if (this.state.step === 3) {
      return (
        <Fragment>
          <MainPageStepThree
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            middleName={this.state.middleName}
            passportSeries={this.state.passportSeries}
            passportGetDate={this.state.passportGetDate !== '' ? moment(this.state.passportGetDate).format('DD MM YYYY') : 'Когда выдан'}
            birthdayDate={this.state.birthdayDate !== '' ? moment(this.state.birthdayDate).format('DD MM YYYY') : 'Дата рождения'}
            licenseExpireDate={this.state.licenseExpireDate !== '' ? moment(this.state.licenseExpireDate).format('DD MM YYYY') : 'Срок действия'}
            licenseGetDate={this.state.licenseGetDate !== '' ? moment(this.state.licenseGetDate).format('DD MM YYYY') : 'Когда выдано'}
            handleInputStepThree={this.handleInputStepThree}
            handlePassportGetDateInput={this.handlePassportGetDateInput}
            handleBirthdayDateInput={this.handleBirthdayDateInput}
            handleLicenseGetDateInput={this.handleLicenseGetDateInput}
            handleLicenseExpireDateInput={this.handleLicenseExpireDateInput}
            handleBackButton={this.handleBackButton}
            handleSubmitButton={this.handleSubmitButton}
          />
          <FAQ />
        </Fragment>
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
