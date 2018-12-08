import React, { PureComponent, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import AppStepOne from 'components/AppStepOne';
import AppStepTwo from 'components/AppStepTwo';
import AppStepThree from 'components/AppStepThree';
import FAQ from 'components/FAQ';
import { loadBrands } from 'actions/brands';
import { loadAdditions } from 'actions/additions';
import app from '../app';

class AppCont extends PureComponent {
  static propTypes = {
    loadBrands: propTypes.func,
    loadAdditions: propTypes.func,
    brands: propTypes.array,
    additions: propTypes.array,
    location: propTypes.object,
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
    selectedAdditions: [],
    passportOwnerName: '',
    passportSeries: '',
    passportIssuedBy: '',
    passportRegAddress: '',
    passportGetDate: '',
    birthdayDate: '',
    licenseSeries: '',
    licenseIssuedBy: '',
    licenseCategory: '',
    licenseGetDate: '',
    licenseExpireDate: '',
    stepThreeModal: false,
  }
  
  componentDidMount() {
    const { loadBrands, loadAdditions } = this.props;
    const { calculateBrand, setStep } = this;
    loadBrands();
    loadAdditions();
    calculateBrand();
    setStep();
  }

  calculateBrand = () => {
    if (this.props.location.carId) {
      const { carId } = this.props.location;
      const brand = this.props.brands.filter(brand => brand.id === carId)[0];
      if (brand) {
        this.setState({
          brand,
        });
      }
    }
  }

  setStep = () => {
    if (this.props.location.step) {
      const { step } = this.props.location;
      this.setState({
        step,
      });
    }
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
        validStartDate: this.state.startDate !== '' && moment(this.state.startDate).hour(23).minute(59).isAfter(),
        validEndDate: this.state.endDate !== '' && this.state.startDate !== '' && moment(this.state.startDate).hour(0).minute(0).isBefore(this.state.endDate),
        validStartTime: this.state.startTime !== '' && this.state.endTime !== '' && moment(this.state.startDate).hour(this.state.startTime.format('HH')).minute(this.state.startTime.format('mm')).isAfter(),
        validEndTime: this.state.endTime !== '' && this.state.startTime !== '' && 
          moment(this.state.endDate).hour(this.state.endTime.format('HH')).minute(this.state.endTime.format('mm'))
            .isAfter(moment(this.state.startDate).hour(this.state.startTime.format('HH')).minute(this.state.startTime.format('mm'))),
        validBrand: this.state.brand !== undefined,
      })
    }
  }

  validateStepTwo = () => {
    if (this.state.stepTwoLazyValidation) {
      this.setState({
        validFirstName: this.state.firstName !== '' && /^[А-ЯЁA-Z][а-яёa-z]+$/.test(this.state.firstName),
        validLastName: this.state.lastName !== '' && /^[А-ЯЁA-Z][а-яёa-z]+$/.test(this.state.lastName),
        validEmail: this.state.email !== ''  && /^[a-zA-Z]+([_.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,4})+$/.test(this.state.email),
        validPhoneNumber: this.state.phoneNumber !== '' && /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(this.state.phoneNumber),
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

  calculatePrice = async () => {
    if (this.state.startDate !== '' && this.state.endDate !== '' && this.state.startTime !== '' && this.state.endTime !== '' && this.state.brand !== undefined) {
      await this.setState({
        stepOneLazyValidation: true,
      });
    }
    await this.validateStepOne();
    if (this.state.validStartDate && this.state.validEndDate && this.state.validStartTime && this.state.validEndTime && this.state.brand && this.state.stepOneLazyValidation) {
      const startDate = moment(this.state.startDate).hour(this.state.startTime.format('HH')).minute(this.state.startTime.format('mm')).toISOString();
      const endDate = moment(this.state.endDate).hour(this.state.endTime.format('HH')).minute(this.state.endTime.format('mm')).toISOString();
      const request = `rent_values?start_time=${startDate}&end_time=${endDate}&model=${this.state.brand.id}`
      app.get(request).then(res => {
        this.setState({
          price: res.data
        })
      })
    } else {
      this.setState({
        price: null,
      })
    }
  }

  handleToStepTwoButton = () => {
    this.setState({
      stepOneLazyValidation: true,
    }, async () => {
      await this.validateStepOne();
      if (this.state.validStartDate && this.state.validEndDate && this.state.validStartTime && this.state.validEndTime && this.state.brand && this.state.stepOneLazyValidation) {
        this.setState({
          step: 2,
        });
      }
    });
  }

  handleAdditionsSelect = event => {
    this.setState({
      selectedAdditions: event,
    })
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

  stepThreeModalToggle = () => {
    this.setState({
      stepThreeModal: !this.state.stepThreeModal
    });
  }

  handleModalCloseButton = () => {
    this.setState({
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
      selectedAdditions: [],
      passportOwnerName: '',
      passportSeries: '',
      passportIssuedBy: '',
      passportRegAddress: '',
      passportGetDate: '',
      birthdayDate: '',
      licenseSeries: '',
      licenseIssuedBy: '',
      licenseCategory: '',
      licenseGetDate: '',
      licenseExpireDate: '',
      stepThreeModal: false,
      loading: true,
    });
  }

  getAdditionsArray = () => {
    const additionsArray = [];
    this.state.selectedAdditions.forEach(addition => {
      additionsArray.push(addition.id);
    });
    return additionsArray;
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
      birthdayDate, passportSeries, passportIssuedBy, passportGetDate, 
      passportRegAddress, licenseSeries, licenseIssuedBy, licenseGetDate, licenseExpireDate, 
      licenseCategory, personalDataCheckbox, selectedAdditions } = this.state;
    const additions = [];
    selectedAdditions.forEach(item => {
      additions.push(item.value);
    });
    const serversideAdditions = this.getAdditionsArray();
    const application = {
      begin_time: startDate,
      end_time: endDate,
      model: brand.id,
      last_name: lastName,
      first_name: firstName,
      patronymic: middleName,
      birthdate: birthdayDate !== '' ? birthdayDate.toISOString() : '',
      email,
      phone: phoneNumber,
      doc_number: passportSeries,
      doc_issued_by: passportIssuedBy,
      doc_issued_date: passportGetDate !== '' ? passportGetDate.toISOString() : '',
      doc_registration: passportRegAddress,
      lic_number: licenseSeries,
      lic_date: licenseGetDate !== '' ? licenseGetDate.toISOString() : '',
      lic_issued_by: licenseIssuedBy,
      lic_valid_to: licenseExpireDate !== '' ? licenseExpireDate.toISOString() : '',
      license_category: licenseCategory,
      personal_data_agreement: personalDataCheckbox,
      note: '',  // Threre is no such field in the application
      price,
      additions: serversideAdditions,
    }
    app.post('requests', application);
    this.stepThreeModalToggle();
  }

  render() {
    if (this.state.step === 1) {
      return (
        <Fragment>
          <AppStepOne
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
          <AppStepTwo
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            middleName={this.state.middleName}
            additions={this.props.additions}
            personalDataCheckbox={this.state.personalDataCheckbox}
            validFirstName={this.state.validFirstName}
            validLastName={this.state.validLastName}
            validEmail={this.state.validEmail}
            validPhoneNumber={this.state.validPhoneNumber}
            validPersonalDataCheckbox={this.state.validPersonalDataCheckbox}
            handleInputStepTwo={this.handleInputStepTwo}
            handleAdditionsSelect={this.handleAdditionsSelect}
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
          <AppStepThree
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            middleName={this.state.middleName}
            passportOwnerName={this.state.passportOwnerName}
            passportSeries={this.state.passportSeries}
            passportIssuedBy={this.state.passportIssuedBy}
            passportRegAddress={this.state.passportRegAddress}
            licenseSeries={this.state.licenseSeries}
            licenseIssuedBy={this.state.licenseIssuedBy}
            licenseCategory={this.state.licenseCategory}
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
            stepThreeModal={this.state.stepThreeModal}
            stepThreeModalToggle={this.stepThreeModalToggle}
            handleModalCloseButton={this.handleModalCloseButton}
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
    additions: state.additions.entities,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    ...ownProps,
    loadBrands: () => dispatch(loadBrands()),
    loadAdditions: () => dispatch(loadAdditions()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppCont);
