import './MainPage.styl';
import '../../../node_modules/rc-calendar/assets/index.css'
import '../../../node_modules/rc-time-picker/assets/index.css'


import React, { PureComponent } from 'react';
import { Container, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, 
  Form, FormGroup, Label, Input, Button } from 'reactstrap';
import propTypes from 'prop-types';

export default class Header extends PureComponent {
  static propTypes = {
    applicationModels: propTypes.array,
  }

  state = {
    applicationModel: '',
  }

  handleapplicationModel = selectedModel => {
    this.setState({applicationModel: selectedModel})
  }

  render() {
    return (
      <main className="main-page">
        <Container>
          <Form className="application">
            <div className="application__details">
              <div className="application__personal-data">
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
              </div>
              <div className="application__additional">
                <div className="application__block">
                  <h4>Дополнительные услуги</h4>
                  <UncontrolledDropdown>
                    <DropdownToggle applicationet>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem disabled>Disabled for now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <div className="application__block">
                  <FormGroup>
                    <Label for="comment">Комментарий к заказу</Label>
                    <Input className="application__comment-textarea" type="textarea" name="comment" id="comment" />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="application__personal-info">
              <h4>Паспортные данные</h4>
              <div className="application__documents">
                <FormGroup>
                  <Input type="text" name="passport-series" id="passport-series" placeholder="Серия"/>
                </FormGroup>
                <FormGroup>
                  <Input type="text" name="passport-number" id="passport-number" placeholder="Номер"/>
                </FormGroup>
              </div>
              <FormGroup>
                <Input className="application__address-textarea"type="textarea" name="address" id="address" placeholder="Адрес регистрации"/>
              </FormGroup>
            </div>
            <Button className="application__submit">Подать заявку</Button>
          </Form>
        </Container>
      </main>
    );
  }
}
