import '../../../node_modules/rc-time-picker/assets/index.css';
import './AppStepThree.styl';

import React, { PureComponent } from 'react';
import { Container, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Form, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Calendar from 'react-infinite-calendar';
import propTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';

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

  render() {
    return (
      <main className="app">
        <Container>
          <Form className="application">
            <div className="application__step-three">
              <h4 className="application__field-name">Паспортные данные</h4>
              <Input
                type="text"
                name="passportOwnerName"
                placeholder="Фамилия, имя и отчество"
                onChange={this.props.handleInputStepThree}
                value={this.props.passportOwnerName ==='' ? `${this.props.lastName} ${this.props.firstName} ${this.props.middleName}` : this.props.passportOwnerName}
              />
              <Input
                type="text"
                name="passportSeries"
                placeholder="Серия и номер"
                onChange={this.props.handleInputStepThree}
                value={this.props.passportSeries}
              />
              <Input
                className="application__address-textarea"
                name="passportIssuedBy"
                type="textarea"
                placeholder="Кем выдан"
                onChange={this.props.handleInputStepThree}
                value={this.props.passportIssuedBy}
              />
              <Input
                className="application__address-textarea"
                name="passportRegAddress"
                type="textarea"
                placeholder="Адрес регистрации"
                onChange={this.props.handleInputStepThree}
                value={this.props.passportRegAddress}
              />
              <h4 className="application__subttl">Водительское удостоверение</h4>
              <Input
                type="text"
                name="licenseSeries"
                placeholder="Серия и номер"
                onChange={this.props.handleInputStepThree}
                value={this.props.licenseSeries}
              />
              <Input
                type="text"
                name="licenseIssuedBy"
                placeholder="Кем выдано"
                onChange={this.props.handleInputStepThree}
                value={this.props.licenseIssuedBy}
              />
              <Input
                type="text"
                name="licenseCategory"
                placeholder="Категория ТС"
                onChange={this.props.handleInputStepThree}
                value={this.props.licenseCategory}
              />
              <div className="application__wrapper">
                <FormGroup className="application__checkbox-group">
                {/*
                  <Input type="checkbox" name="policy" id="policy" />
                  <Label for="policy">Согласие на обработку персональных данных</Label>
                */}
                </FormGroup>
                {
                <Recaptcha
                  sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY}
                  verifyCallback={this.props.recaptchaVerifyCallback}
                />}
                <Button className="application__btn-back" color="primary" onClick={this.props.handleBackButton}>Назад</Button>
              </div>
              <div className="div"></div>
              <div className="div"></div>
              <div className="application__input application__input--date">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    {this.props.birthdayDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Calendar
                        onSelect={this.props.handleBirthdayDateInput}
                        locale={calendarLocale}
                        theme={calendarTheme}
                        height={350}
                      />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="application__input application__input--date">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    {this.props.passportGetDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Calendar
                        onSelect={this.props.handlePassportGetDateInput}
                        locale={calendarLocale}
                        theme={calendarTheme}
                        height={350}
                      />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="div"></div>
              <div className="div"></div>
              <div className="div"></div>
              <div className="application__input application__input--date">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    {this.props.licenseGetDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Calendar
                        onSelect={this.props.handleLicenseGetDateInput}
                        locale={calendarLocale}
                        theme={calendarTheme}
                        height={350}
                      />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="application__input application__input--date">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    {this.props.licenseExpireDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Calendar
                        onSelect={this.props.handleLicenseExpireDateInput}
                        locale={calendarLocale}
                        theme={calendarTheme}
                        height={350}
                      />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <Button
                className={this.props.isLoading ? 'application__btn-submit--step-three ld ld-ext-right running' : 'application__btn-submit--step-three'}
                onClick={this.props.handleSubmitButton}
              >{this.props.isLoading ? '' : 'Отправить'}
              <i className={this.props.isLoading ? 'ld ld-ring ld-spin' : ''}></i>

              </Button>
              <Modal isOpen={this.props.stepThreeModal} toggle={this.props.stepThreeModalToggle} >
                <ModalHeader toggle={this.props.stepThreeModalToggle}>
                {this.props.requestSuccess ? 'Заявка принята' : 'Упс...'}
                </ModalHeader>
                <ModalBody>
                  {this.props.requestSuccess ? 'Заявка отправлена на рассмотрение. Информация о заявке отправлена на указанную почту' : 'Что-то пошло не так. Не удалось отправить вашу заявку на сервер.'}
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
