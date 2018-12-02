import '../../../node_modules/rc-calendar/assets/index.css';
import '../../../node_modules/rc-time-picker/assets/index.css';
import './MainPageStepThree.styl';

import React, { PureComponent } from 'react';
import { Container, UncontrolledDropdown, DropdownToggle, DropdownMenu, 
  Form, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Calendar from 'rc-calendar';
import propTypes from 'prop-types';
// import Recaptcha from 'react-recaptcha';

export default class Header extends PureComponent {
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
    handleBackButton: propTypes.func,
    handleInputStepThree: propTypes.func,
    handleSubmitButton: propTypes.func,
    handlePassportGetDateInput: propTypes.func,
    handleBirthdayDateInput: propTypes.func,
    handleLicenseExpireDateInput: propTypes.func,
    handleLicenseGetDateInput: propTypes.func,
    stepThreeModal: propTypes.bool,
    stepThreeModalToggle: propTypes.func,
  }

  render() {
    return (
      <main className="main-page">
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
                {/*
                <Recaptcha
                  sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY}
                />
                */}
                <Button className="application__btn-back" color="primary" onClick={this.props.handleBackButton}>Назад</Button>
              </div>
              <div className="div"></div>
              <div className="div"></div>
              <div className="application__input">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    {this.props.birthdayDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <Calendar onChange={this.props.handleBirthdayDateInput}/>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="application__input">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    {this.props.passportGetDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <Calendar onChange={this.props.handlePassportGetDateInput}/>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="div"></div>
              <div className="div"></div>
              <div className="div"></div>
              <div className="application__input">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    {this.props.licenseGetDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <Calendar onChange={this.props.handleLicenseGetDateInput}/>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="application__input">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    {this.props.licenseExpireDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <Calendar onChange={this.props.handleLicenseExpireDateInput}/>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <Button className="application__btn-submit--step-three" onClick={this.props.handleSubmitButton}>Отправить</Button>
              <Modal isOpen={this.props.stepThreeModal} toggle={this.props.stepThreeModalToggle} >
                <ModalHeader toggle={this.props.stepThreeModalToggle}>Заявка принята</ModalHeader>
                <ModalBody>
                  Ваша заявка принята! Скоро с Вами свяжется наш специалист
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.props.stepThreeModalToggle}>Закрыть</Button>
                </ModalFooter>
              </Modal>
            </div>
          </Form>
        </Container>
      </main>
    );
  }
}
