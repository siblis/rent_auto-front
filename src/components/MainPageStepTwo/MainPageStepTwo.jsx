import '../../../node_modules/rc-calendar/assets/index.css';
import '../../../node_modules/rc-time-picker/assets/index.css';
import './MainPageStepTwo.styl';

import React, { PureComponent } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Select from 'react-select';
import propTypes from 'prop-types';

const additionalServices = [
  { value: 'Мойка кузова и салона', label: 'Мойка кузова и салона' },
  { value: 'Мойка кузова и ковриков', label: 'Мойка кузова и ковриков' },
  { value: 'Подача аэропорт день', label: 'Подача/возврат аэропорт день' },
  { value: 'Подача аэропорт ночь', label: 'Подача/возврат аэропорт ночь' },
  { value: 'Подача город день', label: 'Подача/возврат город день' },
  { value: 'Подачат город ночь', label: 'Подача/возврат город ночь' },
  { value: 'Дополнительный водитель', label: 'Дополнительный водитель' },
  { value: 'Навигатор', label: 'Навигатор' },
  { value: 'Детское кресло', label: 'Детское кресло' },
  { value: 'Переходник для USB', label: 'Переходник для USB' }
];

export default class Header extends PureComponent {
  static propTypes = {
    lastName: propTypes.string,
    firstName: propTypes.string,
    middleName: propTypes.string,
    email: propTypes.string,
    phoneNumber: propTypes.string,
    personalDataCheckbox: propTypes.bool,
    validFirstName: propTypes.bool,
    validLastName: propTypes.bool,
    validEmail: propTypes.bool,
    validPhoneNumber: propTypes.bool,
    validPersonalDataCheckbox: propTypes.bool,
    handlePersonalDataCheckbox: propTypes.func,
    handleToStepThreeButton: propTypes.func,
    handleInput: propTypes.func,
  }

  render() {
    return (
      <main className="main-page">
        <Container>
          <Form className="application">
            <div className="application__step-two">
              <FormGroup>
                <Label for="lastName" >Фамилия</Label>
                <div className="application__input-group">
                  <Input 
                    className={this.props.validLastName ? '' : 'application__invalid'}
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={this.props.lastName}
                    onChange={this.props.handleInput}
                  />
                  {this.props.validLastName || <div className="application__error">!</div>}
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="firstName">Имя</Label>
                <div className="application__input-group">
                  <Input
                    className={this.props.validFirstName ? '' : 'application__invalid'}
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={this.props.firstName}
                    onChange={this.props.handleInput}/>
                  {this.props.validFirstName || <div className="application__error">!</div>}
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="middleName">Отчество</Label>
                <Input type="text" name="middleName" id="middleName" onChange={this.props.handleInput}/>
              </FormGroup >
              <div className="application__block">
                <h4 className="application__field-name">Дополнительные услуги</h4>
                <Select
                  className="application__add-services"
                  isMulti={true}
                  classNamePrefix="application__multi-select"
                  options={additionalServices}
                />
              </div>
              <FormGroup>
                <Label for="email">E-mail</Label>
                <div className="application__input-group">
                  <Input
                    className={this.props.validEmail ? '' : 'application__invalid'}
                    type="text"
                    name="email"
                    id="email"
                    value={this.props.email}
                    onChange={this.props.handleInput}
                  />
                  {this.props.validEmail || <div className="application__error">!</div>}
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">Номер телефона</Label>
                <div className="application__input-group">
                  <Input
                    className={this.props.validPhoneNumber ? '' : 'application__invalid'}
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={this.props.phoneNumber}
                    onChange={this.props.handleInput}
                  />
                  {this.props.validPhoneNumber || <div className="application__error">!</div>}
                </div>
              </FormGroup>
              <FormGroup className="application__checkbox-group">
                <Input
                  type="checkbox"
                  name="policy"
                  id="policy"
                  checked={this.props.personalDataCheckbox}
                  onChange={this.props.handlePersonalDataCheckbox}/>
                <Label for="policy">Согласие на обработку персональных данных</Label>
                {this.props.validPersonalDataCheckbox || <div className="application__error">!</div>}
              </FormGroup>
              <div></div>
              <Button className="application__btn-next--step-two" onClick={this.props.handleToStepThreeButton}>Продолжить</Button>
            </div>
          </Form>
        </Container>
      </main>
    );
  }
}
