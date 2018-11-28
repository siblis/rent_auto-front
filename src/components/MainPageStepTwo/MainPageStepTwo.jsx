import '../../../node_modules/rc-calendar/assets/index.css';
import '../../../node_modules/rc-time-picker/assets/index.css';
import './MainPageStepTwo.styl';

import React, { PureComponent } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Select from 'react-select';
import propTypes from 'prop-types';

export default class Header extends PureComponent {
  static propTypes = {
    lastName: propTypes.string,
    firstName: propTypes.string,
    middleName: propTypes.string,
    email: propTypes.string,
    phoneNumber: propTypes.string,
    additions: propTypes.array,
    personalDataCheckbox: propTypes.bool,
    validFirstName: propTypes.bool,
    validLastName: propTypes.bool,
    validEmail: propTypes.bool,
    validPhoneNumber: propTypes.bool,
    validPersonalDataCheckbox: propTypes.bool,
    handlePersonalDataCheckbox: propTypes.func,
    handleAdditionsSelect: propTypes.func,
    handleToStepThreeButton: propTypes.func,
    handleInputStepTwo: propTypes.func,
  }

  render() {
    const additionalServices = [];
    if (this.props.additions.length > 0) {
      this.props.additions.forEach((item, index) => {
        additionalServices[index] = {
          value: item.name,
          label: item.name,
        }
      });
    }
    
    return (
      <main className="main-page">
        <Container>
          <Form className="application">
            <div className="application__step-two">
              <FormGroup>
                <Label for="lastName" >Фамилия</Label>
                <div className="application__input-group">
                  <Input 
                    className={this.props.validLastName ? '' : 'application__invalid animated bounce'}
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={this.props.lastName}
                    onChange={this.props.handleInputStepTwo}
                  />
                  {this.props.validLastName || <div className="application__error animated bounce">!</div>}
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="firstName">Имя</Label>
                <div className="application__input-group">
                  <Input
                    className={this.props.validFirstName ? '' : 'application__invalid animated bounce'}
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={this.props.firstName}
                    onChange={this.props.handleInputStepTwo}/>
                  {this.props.validFirstName || <div className="application__error animated bounce">!</div>}
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="middleName">Отчество</Label>
                <Input type="text" name="middleName" id="middleName" onChange={this.props.handleInputStepTwo}/>
              </FormGroup >
              <div className="application__block">
                <h4 className="application__field-name">Дополнительные услуги</h4>
                <Select
                  className="application__add-services"
                  isMulti={true}
                  classNamePrefix="application__multi-select"
                  options={additionalServices}
                  onChange={this.props.handleAdditionsSelect}
                />
              </div>
              <FormGroup>
                <Label for="email">E-mail</Label>
                <div className="application__input-group">
                  <Input
                    className={this.props.validEmail ? '' : 'application__invalid animated bounce'}
                    type="text"
                    name="email"
                    id="email"
                    value={this.props.email}
                    onChange={this.props.handleInputStepTwo}
                  />
                  {this.props.validEmail || <div className="application__error animated bounce">!</div>}
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">Номер телефона</Label>
                <div className="application__input-group">
                  <Input
                    className={this.props.validPhoneNumber ? '' : 'application__invalid animated bounce'}
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={this.props.phoneNumber}
                    onChange={this.props.handleInputStepTwo}
                  />
                  {this.props.validPhoneNumber || <div className="application__error animated bounce">!</div>}
                </div>
              </FormGroup>
              <div className="application__checkbox-group">
                <Input
                  type="checkbox"
                  name="policy"
                  id="policy"
                  checked={this.props.personalDataCheckbox}
                  onChange={this.props.handlePersonalDataCheckbox}/>
                <Label for="policy">Согласие на обработку персональных данных</Label>
                {this.props.validPersonalDataCheckbox || <div className="application__error animated bounce">!</div>}
              </div>
              <div></div>
              <Button className="application__btn-next--step-two" onClick={this.props.handleToStepThreeButton}>Продолжить</Button>
            </div>
          </Form>
        </Container>
      </main>
    );
  }
}
