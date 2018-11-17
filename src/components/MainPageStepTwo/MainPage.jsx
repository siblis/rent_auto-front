import './MainPage.styl';
import '../../../node_modules/rc-calendar/assets/index.css'
import '../../../node_modules/rc-time-picker/assets/index.css'


import React, { PureComponent } from 'react';
import { Container,
  Form, FormGroup, Label, Input, Button,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import propTypes from 'prop-types';

export default class Header extends PureComponent {
  static propTypes = {
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
                <Label for="lastName">Фамилия</Label>
                <Input type="text" name="lastName" id="lastName" onChange={this.props.handleInput}/>
              </FormGroup>
              <FormGroup>
                <Label for="firstName">Имя</Label>
                <Input type="text" name="firstName" id="firstName" onChange={this.props.handleInput}/>
              </FormGroup>
              <FormGroup>
                <Label for="middleName">Отчество</Label>
                <Input type="text" name="middleName" id="middleName" onChange={this.props.handleInput}/>
              </FormGroup>
              <div className="application__block">
                <h4 className="application__field-name">Дополнительные услуги</h4>
                <UncontrolledDropdown>
                  <DropdownToggle className="application__additional-options"caret>
                  </DropdownToggle>
                  <DropdownMenu> 
                    <DropdownItem>Мойка кузова и салона</DropdownItem>
                    <DropdownItem>Подача/возврат аэропорт день</DropdownItem>
                    <DropdownItem>Навигатор</DropdownItem>
                    <DropdownItem>Детское кресло</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <FormGroup>
                <Label for="email">E-mail</Label>
                <Input type="text" name="email" id="email" onChange={this.props.handleInput}/>
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">Номер телефона</Label>
                <Input type="text" name="phoneNumber" id="phoneNumber" onChange={this.props.handleInput}/>
              </FormGroup>
              <FormGroup className="application__checkbox-group">
                <Input type="checkbox" name="policy" id="policy" />
                <Label for="policy">Согласие на обработку персональных данных</Label>
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
