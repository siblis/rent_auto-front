import '../../../node_modules/rc-time-picker/assets/index.css';
import './AppStepThree.styl';

import React, { PureComponent } from 'react';
import {
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Form,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter 
} from 'reactstrap';
import Calendar from 'react-infinite-calendar';
import propTypes from 'prop-types';

import calendarLocale from '../../utils/calendarLocale';
import calendarTheme from '../../utils/calendarTheme';

export default class AppStepTwo extends PureComponent {
  static propTypes = {
    firstName: propTypes.string,
    lastName: propTypes.string,
    middleName: propTypes.string,
    passportOwnerName: propTypes.string,
    passportSeries: propTypes.string,
    passportIssuedBy: propTypes.string,
    passportRegAddress: propTypes.string,
    passportGetDate: propTypes.string,
    birthdayDate: propTypes.string,
    licenseSeries: propTypes.string,
    licenseIssuedBy: propTypes.string,
    licenseCategory: propTypes.string,
    licenseGetDate: propTypes.string,
    licenseExpireDate: propTypes.string,
    responseMessage: propTypes.string,
    isLoading: propTypes.bool,
    requestSuccess: propTypes.bool,
    handleBackButton: propTypes.func,
    handleInputStepThree: propTypes.func,
    handleSubmitButton: propTypes.func,
    handlePassportGetDateInput: propTypes.func,
    handleBirthdayDateInput: propTypes.func,
    handleLicenseExpireDateInput: propTypes.func,
    handleLicenseGetDateInput: propTypes.func,
    stepThreeModal: propTypes.bool,
    stepThreeModalToggle: propTypes.func,
    handleModalCloseButton: propTypes.func,
    recaptchaVerifyCallback: propTypes.func,
  }

  state = {
    birthdayDateDropdownOpen: false,
    passportGetDateDropdownOpen: false,
    licenseGetDateDropdownOpen: false,
    licenseExpireDateDropdownOpen: false,
  }

  getCalendarHeight = () => {
    if (document.documentElement.clientWidth < 400) {
      return 300;
    }
    return 350;
  }

  birthdayDateDropdownToggle = () => {
    this.setState(prevState => ({
      birthdayDateDropdownOpen: !prevState.birthdayDateDropdownOpen
    }));
  }

  passportGetDateDropdownToggle = () => {
    this.setState(prevState => ({
      passportGetDateDropdownOpen: !prevState.passportGetDateDropdownOpen
    }));
  }

  licenseGetDateDropdownToggle = () => {
    this.setState(prevState => ({
      licenseGetDateDropdownOpen: !prevState.licenseGetDateDropdownOpen
    }));
  }

  licenseExpireDateDropdownToggle = () => {
    this.setState(prevState => ({
      licenseExpireDateDropdownOpen: !prevState.licenseExpireDateDropdownOpen
    }));
  }

  handleBirthdayDateInput = async (event) => {
    await this.props.handleBirthdayDateInput(event);
    this.birthdayDateDropdownToggle();
  }

  handlePassportGetDateInput = async (event) => {
    await this.props.handlePassportGetDateInput(event);
    this.passportGetDateDropdownToggle();
  }

  handleLicenseGetDateInput = async (event) => {
    await this.props.handleLicenseGetDateInput(event);
    this.licenseGetDateDropdownToggle();
  }

  handleLicenseExpireDateInput = async (event) => {
    await this.props.handleLicenseExpireDateInput(event);
    this.licenseExpireDateDropdownToggle();
  }

  render() {
    return (
      <main className="app">
        <Container>
          <Form className="application">
            <div className="application__step-three">
              <div className="application__title application__order_-5">
                <h4 className="application__field-name">Паспортные данные</h4>
                <p className="application__note">Эту информацию можно не заполнять здесь, а заполнить лично в нашем офисе</p>
              </div>
              <Input
                className="application__order_-5"
                type="text"
                name="passportOwnerName"
                placeholder="Фамилия, имя и отчество"
                onChange={this.props.handleInputStepThree}
                value={this.props.passportOwnerName ==='' ? `${this.props.lastName} ${this.props.firstName} ${this.props.middleName}` : this.props.passportOwnerName}
              />
              <Input
                className="application__order_-5"
                type="text"
                name="passportSeries"
                placeholder="Серия и номер"
                onChange={this.props.handleInputStepThree}
                value={this.props.passportSeries}
              />
              <Input
                className="application__address-textarea application__order_0"
                name="passportIssuedBy"
                type="textarea"
                placeholder="Кем выдан"
                onChange={this.props.handleInputStepThree}
                value={this.props.passportIssuedBy}
              />
              <Input
                className="application__address-textarea application__order_0"
                name="passportRegAddress"
                type="textarea"
                placeholder="Адрес регистрации"
                onChange={this.props.handleInputStepThree}
                value={this.props.passportRegAddress}
              />
              <h4 className="application__subttl application__order_0">Водительское удостоверение</h4>
              <Input
                className="application__order_0"
                type="text"
                name="licenseSeries"
                placeholder="Серия и номер"
                onChange={this.props.handleInputStepThree}
                value={this.props.licenseSeries}
              />
              <Input
                className="application__order_0"
                type="text"
                name="licenseIssuedBy"
                placeholder="Кем выдано"
                onChange={this.props.handleInputStepThree}
                value={this.props.licenseIssuedBy}
              />
              <Input
                className="application__order_2"
                type="text"
                name="licenseCategory"
                placeholder="Категория ТС"
                onChange={this.props.handleInputStepThree}
                value={this.props.licenseCategory}
              />
              <div className="application__wrapper application__order_3">
                {/*
                <FormGroup className="application__checkbox-group">
                  <Input type="checkbox" name="policy" id="policy" />
                  <Label for="policy">Согласие на обработку персональных данных</Label>
                
                </FormGroup>
                */}
                <Button
                  className="application__btn-back"
                  color="primary"
                  onClick={this.props.handleBackButton}
                >
                  Назад
                </Button>
              </div>
              <div className="div"></div>
              <div className="div"></div>
              <div className="application__input application__input--date application__order_-4">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <Dropdown isOpen={this.state.birthdayDateDropdownOpen} toggle={this.birthdayDateDropdownToggle}>
                  <DropdownToggle caret>
                    {this.props.birthdayDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <Calendar
                      onSelect={this.handleBirthdayDateInput}
                      locale={calendarLocale}
                      theme={calendarTheme}
                      width={this.getCalendarHeight()}
                      height={400}
                      min={new Date(1900, 0, 1)}
                      max={new Date()}
                      displayOptions={{
                        hideYearsOnSelect: false,
                      }}
                      selected={new Date(2000, 0, 1)}
                    />
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="application__input application__input--date application__order_-4">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <Dropdown isOpen={this.state.passportGetDateDropdownOpen} toggle={this.passportGetDateDropdownToggle}>
                  <DropdownToggle caret>
                    {this.props.passportGetDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <Calendar
                      onSelect={this.handlePassportGetDateInput}
                      locale={calendarLocale}
                      theme={calendarTheme}
                      width={this.getCalendarHeight()}
                      height={400}
                      min={new Date(1950, 0, 1)}
                      max={new Date()}
                      displayOptions={{
                        hideYearsOnSelect: false,
                      }}
                      selected={new Date(2010, 0, 1)}
                    />
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="div"></div>
              <div className="div"></div>
              <div className="div"></div>
              <div className="application__input application__input--date application__order_1">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <Dropdown isOpen={this.state.licenseGetDateDropdownOpen} toggle={this.licenseGetDateDropdownToggle}>
                  <DropdownToggle caret>
                    {this.props.licenseGetDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <Calendar
                      onSelect={this.handleLicenseGetDateInput}
                      locale={calendarLocale}
                      theme={calendarTheme}
                      height={350}
                      min={new Date(1950, 0, 1)}
                      max={new Date()}
                      displayOptions={{
                        hideYearsOnSelect: false,
                      }}
                      selected={new Date(2010, 0, 1)}
                    />
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="application__input application__input--date application__order_1">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <Dropdown isOpen={this.state.licenseExpireDateDropdownOpen} toggle={this.licenseExpireDateDropdownToggle}>
                  <DropdownToggle caret>
                    {this.props.licenseExpireDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <Calendar
                      onSelect={this.handleLicenseExpireDateInput}
                      locale={calendarLocale}
                      theme={calendarTheme}
                      height={350}
                      min={new Date(2015, 0, 1)}
                      max={new Date(2060, 0, 1)}
                      displayOptions={{
                        hideYearsOnSelect: false,
                      }}
                      selected={new Date(2020, 0, 1)}
                    />
                  </DropdownMenu>
                </Dropdown>
              </div>
              <Button
                className={this.props.isLoading ? 'application__btn-submit--step-three ld ld-ext-right running application__order_3' : 'application__btn-submit--step-three application__order_3'}
                onClick={this.props.handleSubmitButton}
              >{this.props.isLoading ? '' : 'Отправить'}
              <i className={this.props.isLoading ? 'ld ld-ring ld-spin' : ''}></i>

              </Button>
              <Modal isOpen={this.props.stepThreeModal} toggle={this.props.stepThreeModalToggle} >
                <ModalHeader toggle={this.props.stepThreeModalToggle}>
                {this.props.requestSuccess ? 'Заявка принята' : 'Упс...'}
                </ModalHeader>
                <ModalBody>
                  {this.props.requestSuccess ? this.props.responseMessage : 'Что-то пошло не так. Не удалось отправить вашу заявку на сервер.'}
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.props.handleModalCloseButton}>Закрыть</Button>
                </ModalFooter>
              </Modal>
            </div>
          </Form>
        </Container>
      </main>
    );
  }
}
