import './MainPage.styl';
import '../../../node_modules/rc-calendar/assets/index.css'
import '../../../node_modules/rc-time-picker/assets/index.css'


import React, { PureComponent } from 'react';
import { Container, Label, UncontrolledDropdown, DropdownToggle, DropdownMenu, 
  Form, FormGroup, Input, Button } from 'reactstrap';
import Calendar from 'rc-calendar';
import propTypes from 'prop-types';

export default class Header extends PureComponent {
  static propTypes = {
    passportGetDate: propTypes.string,
    birthdayDate: propTypes.string,
    licenseGetDate: propTypes.string,
    licenseExpireDate: propTypes.string,
    handleBackButton: propTypes.func,
    handleInput: propTypes.func,
    handleSubmitButton: propTypes.func,
    handlePassportGetDateInput: propTypes.func,
    handleBirthdayDateInput: propTypes.func,
    handleLicenseExpireDateInput: propTypes.func,
    handleLicenseGetDateInput: propTypes.func,
  }

  render() {
    return (
      <main className="main-page">
        <Container>
          <Form className="application">
            <div className="application__step-three">
              <h4 className="application__field-name">Паспортные данные</h4>
              <Input type="text" name="passport-series" id="passport-series" placeholder="Фамилия, имя и отчество" onChange={this.props.handleInput}/>
              <Input type="text" name="passport-number" id="passport-number" placeholder="Серия и номер" onChange={this.props.handleInput}/>
              <Input className="application__address-textarea"type="textarea" name="address" id="address" placeholder="Кем выдан" onChange={this.props.handleInput}/>
              <Input className="application__address-textarea"type="textarea" name="address" id="address" placeholder="Адрес регистрации" onChange={this.props.handleInput}/>
              <h4 className="application__subttl">Водительское удостоверение</h4>
              <Input type="text" name="passport-number" id="passport-number" placeholder="Серия и номер" onChange={this.props.handleInput}/>
              <Input type="text" name="passport-number" id="passport-number" placeholder="Кем выдано" onChange={this.props.handleInput}/>
              <Input type="text" name="passport-number" id="passport-number" placeholder="Категория ТС" onChange={this.props.handleInput}/>
              <div className="application__wrapper">
                <FormGroup className="application__checkbox-group">
                  <Input type="checkbox" name="policy" id="policy" />
                  <Label for="policy">Согласие на обработку персональных данных</Label>
                </FormGroup>
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
            </div>
          </Form>
        </Container>
      </main>
    );
  }
}
