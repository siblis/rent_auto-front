import './MainPage.styl';

import React, { PureComponent } from 'react';
import { Container, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, 
  Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Header extends PureComponent {
  state = {
    carModel: '',
  }

  handleCarModel = selectedModel => {
    this.setState({carModel: selectedModel})
  }

  render() {
    return (
      <main className="main-page">
        <Container>
          <Form class="car">
            <div className="car__info">
              <div className="car__block">
                <h4>Дата получения</h4>
                <div className="car__input">
                  <object className="car__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem disabled>Disabled for now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className="car__block">
                <h4>Время получения</h4>
                <div className="car__input">
                  <object className="car__icon" type="image/svg+xml" data={require('../../assets/images/clock.svg')}></object>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem disabled>Disabled for now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className="car__block">
                <h4>Дата возврата</h4>
                <div className="car__input">
                  <object className="car__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem disabled>Disabled for now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className="car__block">
                <h4>Время возврата</h4>
                <div className="car__input">
                  <object className="car__icon" type="image/svg+xml" data={require('../../assets/images/clock.svg')}></object>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem disabled>Disabled for now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className="car__block">
                <h4>Марка автомобиля</h4>
                <div className="car__input">
                  <object className="car__icon" type="image/svg+xml" data={require('../../assets/images/car.svg')}></object>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>
                      {this.state.carModel}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onclick={this.handleCarModel('Renault')}>Renault</DropdownItem>
                      <DropdownItem onclick={this.handleCarModel('Lada')}>Lada</DropdownItem>
                      <DropdownItem>Skoda</DropdownItem>
                      <DropdownItem>BMW</DropdownItem>
                      <DropdownItem>Toyota</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
            </div>
            <div className="car__details">
              <div className="car__personal-data">
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
              <div className="car__additional">
                <div className="car__block">
                  <h4>Дополнительные услуги</h4>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem disabled>Disabled for now</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <div className="car__block">
                  <FormGroup>
                    <Label for="comment">Комментарий к заказу</Label>
                    <Input className="car__comment-textarea" type="textarea" name="comment" id="comment" />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="car__personal-info">
              <h4>Паспортные данные</h4>
              <div className="car__documents">
                <FormGroup>
                  <Input type="text" name="passport-series" id="passport-series" placeholder="Серия"/>
                </FormGroup>
                <FormGroup>
                  <Input type="text" name="passport-number" id="passport-number" placeholder="Номер"/>
                </FormGroup>
              </div>
              <FormGroup>
                <Input className="car__address-textarea"type="textarea" name="address" id="address" placeholder="Адрес регистрации"/>
              </FormGroup>
            </div>
            <Button className="car__submit">Подать заявку</Button>
          </Form>
        </Container>
      </main>
    );
  }
}
