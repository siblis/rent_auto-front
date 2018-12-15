import React, { PureComponent, Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment-timezone';

import AppStepOne from 'components/AppStepOne';
import AppStepTwo from 'components/AppStepTwo';
import AppStepThree from 'components/AppStepThree';
import FAQ from 'components/FAQ';
import { loadBrands } from 'actions/brands';
import { loadAdditions } from 'actions/additions';
import app from '../app';
import { GOOGLE_RECAPTCHA_SITE_KEY } from '../../config';

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
    isLoading: false,
    recaptchaToken: '',
    requestSuccess: false,
    responseMessage: '',
    brandCalculated: false,
  }
  
  componentDidMount () {
    const { loadBrands, loadAdditions } = this.props;
    loadBrands();
    loadAdditions();
    this.setStep();
  }

  calculateBrand = () => {
    if (this.props.location.carId && !this.state.brandCalculated) {
      const { carId } = this.props.location;
      const brand = this.props.brands.filter(brand => brand.id === carId)[0];
      if (brand) {
        this.setState({
          brand,
          brandCalculated: true,
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
      startDate: moment(startDate).tz("Europe/Moscow"),
    }, () => {
      this.validateStepOne();
      this.calculatePrice();
    });
  }

  handleEndDateInput = endDate => {
    this.setState({
      endDate: moment(endDate).tz("Europe/Moscow"),
    }, () => {
      this.validateStepOne();
      this.calculatePrice();
    });
  }

  handleStartTimeInput = startTime => {
    if (startTime.minute() % 10 !== 0) {
      startTime.minute('00');
    }
    this.setState({
      startTime: moment(startTime),
    }, () => {
      this.validateStepOne();
      this.calculatePrice();
    });
  }

  handleEndTimeInput = endTime => {
    if (endTime.minute() % 10 !== 0) {
      endTime.minute('00');
    }
    this.setState({
      endTime: moment(endTime),
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

  handleNameInput = event => {
    this.setState({
      [event.target.name]: event.target.value.replace(/^[а-яёa-z]/g, l => l.toUpperCase()),
    }, () => {
      this.validateStepTwo();
    });
  }

  validateStepOne = () => {
    if (this.state.stepOneLazyValidation) {
      this.setState({
        validStartDate: this.state.startDate !== '' && moment(this.state.startDate).hour(23).minute(59).isAfter(),
        validEndDate: this.state.endDate !== '' && this.state.startDate !== '' && moment(this.state.startDate).hour(0).minute(0).isSameOrBefore(this.state.endDate),
        validStartTime: this.state.startTime !== '' && this.state.endTime !== '' && moment(this.state.startDate).hour(this.state.startTime.format('HH')).minute(this.state.startTime.format('mm')).isAfter(),
        validEndTime: this.state.endTime !== '' && this.state.startTime !== '' && 
          moment(this.state.endDate).hour(this.state.endTime.format('HH')).minute(this.state.endTime.format('mm'))
            .isAfter(moment(this.state.startDate).hour(this.state.startTime.format('HH')).minute(this.state.startTime.format('mm'))),
        validBrand: this.state.brand !== undefined,
      })
    }
  }

  validateStepTwo = async () => {
    if (this.state.stepTwoLazyValidation) {
      await this.setState({
        validFirstName: this.state.firstName !== '' && /^[А-ЯЁA-Z][а-яёa-z]+$/.test(this.state.firstName),
        validLastName: this.state.lastName === '' || /^[А-ЯЁA-Z][а-яёa-z]+$/.test(this.state.lastName),
        validEmail: this.state.email !== ''  && /^[a-zA-Z]+([_.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})+$/.test(this.state.email),
        validPhoneNumber: this.state.phoneNumber !== '' && /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(this.state.phoneNumber),
        validPersonalDataCheckbox: this.state.personalDataCheckbox,
      });
      if (this.state.validEmail) {
        this.setState({
          validPhoneNumber: true,
        })
      }
      if (this.state.validPhoneNumber) {
        this.setState({
          validEmail: true,
        })
      }
    }
    if (this.state.firstName !== '' && this.state.personalDataCheckbox
    && (this.state.email !== '' || this.state.phoneNumber !== '' )) {
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
        });
      });
    } else {
      this.setState({
        price: null,
      });
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
    });
  }

  handleToStepThreeButton = () => {
    this.setState({
      stepTwoLazyValidation: true,
    }, async () => {
      await this.validateStepTwo();
      if (this.state.validFirstName && this.state.validPersonalDataCheckbox && (this.state.validEmail || this.state.validPhoneNumber)) {
        this.setState({
          step: 3,
        });
      }
    });
  }

  handlePassportGetDateInput = passportGetDate => {
    this.setState({
      passportGetDate: moment(passportGetDate).tz("Europe/Moscow"),
    });
  }

  handleBirthdayDateInput = birthdayDate => {
    this.setState({
      birthdayDate: moment(birthdayDate).tz("Europe/Moscow"),
    });
  }

  handleLicenseExpireDateInput = licenseExpireDate => {
    this.setState({
      licenseExpireDate: moment(licenseExpireDate).tz("Europe/Moscow"),
    });
  }

  handleLicenseGetDateInput = licenseGetDate => {
    this.setState({
      licenseGetDate: moment(licenseGetDate).tz("Europe/Moscow"),
    });
  }

  handleBackButton = () => {
    this.setState({
      step: this.state.step - 1,
    });
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
      isLoading: false,
      requestSuccess: false,
      recaptchaToken: '',
      responseMessage: '',
    });
  }

  getAdditionsArray = () => {
    const additionsArray = [];
    this.state.selectedAdditions.forEach(addition => {
      additionsArray.push(addition.id);
    });
    return additionsArray;
  }

  handleSubmitButton = async () => {
    this.setState({
      isLoading: true,
    });
    await window.grecaptcha.execute(GOOGLE_RECAPTCHA_SITE_KEY, {action: 'formSending'}).then(async token => {
      await this.setState({
        recaptchaToken: token,
      });
    });
    const startDate = moment(this.state.startDate).add({
      hours: this.state.startTime.format('H'),
      minutes: this.state.startTime.format('m')
    }).toISOString(true);
    const endDate = moment(this.state.endDate).add({
      hours: this.state.endTime.format('H'),
      minutes: this.state.endTime.format('m')
    }).toISOString(true);
    const {
      brand,
      price,
      firstName,
      lastName,
      middleName,
      email,
      phoneNumber,
      birthdayDate,
      passportSeries,
      passportIssuedBy,
      passportGetDate, 
      passportRegAddress,
      licenseSeries,
      licenseIssuedBy,
      licenseGetDate,
      licenseExpireDate, 
      licenseCategory,
      selectedAdditions,
      recaptchaToken
    } = this.state;
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
      birthdate: birthdayDate !== '' ? birthdayDate.toISOString(true) : '',
      email,
      phone: phoneNumber,
      doc_number: passportSeries,
      doc_issued_by: passportIssuedBy,
      doc_issued_date: passportGetDate !== '' ? passportGetDate.toISOString(true) : '',
      doc_registration: passportRegAddress,
      lic_number: licenseSeries,
      lic_date: licenseGetDate !== '' ? licenseGetDate.toISOString(true) : '',
      lic_issued_by: licenseIssuedBy,
      lic_valid_to: licenseExpireDate !== '' ? licenseExpireDate.toISOString(true) : '',
      license_category: licenseCategory,
      price,
      additions: serversideAdditions,
      recaptcha_token: recaptchaToken,
    }
    app.post('requests', application).then(async res => {
        if (res.status === 200) {
          await this.setState({
            requestSuccess: true,
            responseMessage: res.data.message,
          });
        }
        this.setState({
          isLoading: false,
        });
        this.stepThreeModalToggle();
      }).catch(() => {
      this.stepThreeModalToggle();
      this.setState({
        isLoading: false,
      });
    })
  }

  render() {
    if (this.state.step === 1) {
      this.calculateBrand();
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
            selectedAdditions={this.state.selectedAdditions}
            handleInputStepTwo={this.handleInputStepTwo}
            handleNameInput={this.handleNameInput}
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
            recaptchaVerifyCallback={this.recaptchaVerifyCallback}
            isLoading={this.state.isLoading}
            requestSuccess={this.state.requestSuccess}
            responseMessage={this.state.responseMessage}
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
