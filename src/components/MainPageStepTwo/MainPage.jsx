import './MainPage.styl';
import '../../../node_modules/rc-calendar/assets/index.css'
import '../../../node_modules/rc-time-picker/assets/index.css'


import React, { PureComponent } from 'react';
import { Container, InputGroup, InputGroupAddon, InputGroupText,
  Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import propTypes from 'prop-types';

export default class Header extends PureComponent {
  static propTypes = {

  }

  state = {
  }

  render() {
    return (
      <main className="main-page">
        <Container>
          <Form className="application__steptwo">
            <FormGroup>
              <Label for="lastName">Фамилия</Label>
              <Input type="text" name="lastName" id="lastName" />
            </FormGroup>
            <FormGroup>
              <Label for="firstName">Имя</Label>
              <Input type="text" name="firstName" id="firstName" />
            </FormGroup>
            <FormGroup>
              <Label for="middleName">Отчество</Label>
              <Input type="text" name="middleName" id="middleName" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Отчество</Label>
              <Input type="text" name="email" id="email" />
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Отчество</Label>
              <Input type="text" name="phoneNumber" id="phoneNumber" />
            </FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                </InputGroupText>
              </InputGroupAddon>
            <Input placeholder="Check it out" />
            </InputGroup>
            <Button className="application__submit">Подать заявку</Button>
          </Form>
        </Container>
      </main>
    );
  }
}
