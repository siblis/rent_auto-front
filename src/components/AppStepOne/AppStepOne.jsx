import '../../../node_modules/rc-calendar/assets/index.css';
import '../../../node_modules/rc-time-picker/assets/index.css';
import './AppStepOne.styl';

import React, { PureComponent } from 'react';
import { Container, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, 
  Form, Button } from 'reactstrap';
import propTypes from 'prop-types';
import Calendar from 'rc-calendar';
import TimePicker from 'rc-time-picker';

export default class AppStepOne extends PureComponent {
  static propTypes = {
    brands: propTypes.array,
    startDate: propTypes.string,
    endDate: propTypes.string,
    brand: propTypes.object,
    price: propTypes.number,
    handleStartDateInput: propTypes.func,
    validStartDate: propTypes.bool,
    validEndDate: propTypes.bool,
    validStartTime: propTypes.bool,
    validEndTime: propTypes.bool,
    validBrand: propTypes.bool,
    handleEndDateInput: propTypes.func,
    handleStartTimeInput: propTypes.func,
    handleEndTimeInput: propTypes.func,
    handleBrandInput: propTypes.func,
    handleToStepTwoButton: propTypes.func,
  }

  render() {
    return (
      <main className="app">
        <Container>
          <Form className="application">
            <div className="application__step-one">
              <div className="application__block">
                <h4 className="application__field-name">Дата взятия</h4>
                <div className="application__input application__input--date">
                  <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                  <UncontrolledDropdown>
                    <DropdownToggle caret className={this.props.validStartDate ? '' : 'application__invalid animated bounce'}>
                      {this.props.startDate}
                    </DropdownToggle>
                    <DropdownMenu>
                      <Calendar
                        onChange={this.props.handleStartDateInput}
                        animation="slide-up"
                      />
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  {this.props.validStartDate || <div className="application__error animated bounce">!</div>}
                </div>
              </div>
              <div className="application__block">
                <h4 className="application__field-name">Дата возврата</h4>
                <div className="application__input application__input--date">
                  <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                  <UncontrolledDropdown>
                    <DropdownToggle caret className={this.props.validEndDate ? '' : 'application__invalid animated bounce'}>
                      {this.props.endDate}
                    </DropdownToggle>
                    <DropdownMenu>
                      <Calendar
                        onChange={this.props.handleEndDateInput}
                        animation="slide-up"
                      />
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  {this.props.validEndDate || <div className="application__error animated bounce">!</div>}
                </div>
              </div>
              <div className="application__block">
                <h4 className="application__field-name">Модель автомобиля</h4>
                <div className="application__input">
                  <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/car.svg')}></object>
                  <UncontrolledDropdown>
                    <DropdownToggle caret className={this.props.validBrand ? 'application__brand-name' : 'application__brand-name application__invalid animated bounce'}>
                      {this.props.brand ? `${this.props.brand.brand.name} ${this.props.brand.name}` : ''}
                    </DropdownToggle>
                    <DropdownMenu>
                      {this.props.brands.map((brand, index) => 
                        <DropdownItem className="application__brand-items"id={brand.id} onClick={this.props.handleBrandInput} key={index}>{brand.full_name}</DropdownItem>
                      )}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  {this.props.validBrand || <div className="application__error animated bounce">!</div>}
                </div>
              </div>
              <div className="application__block">
                <h4 className="application__field-name">Время взятия</h4>
                <div className="application__input">
                  <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/clock.svg')}></object>
                  <TimePicker
                    className={this.props.validStartTime ? 'application__field' : 'application__field application__invalid animated bounce'}
                    onChange={this.props.handleStartTimeInput}
                    showSecond={false}
                    minuteStep={10}
                    allowEmpty={false}
                  />
                  {this.props.validStartTime || <div className="application__error animated bounce">!</div>}      
                </div>
              </div>
              <div className="application__block">
                <h4 className="application__field-name">Время возврата</h4>
                <div className="application__input">
                  <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/clock.svg')}></object>
                  <TimePicker
                    className={this.props.validEndTime ? 'application__field' : 'application__field application__invalid animated bounce'}
                    onChange={this.props.handleEndTimeInput}
                    showSecond={false}
                    minuteStep={10}
                    allowEmpty={false}
                  />
                  {this.props.validEndTime || <div className="application__error animated bounce">!</div>}      
                </div>
              </div>
              <div className="application__block">
                <h4 className="application__field-name">Примерная стоимость</h4>
                <div className="application__input">
                  <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/ruble-currency-sign.svg')}></object>
                  <div className="application__price">{this.props.price}</div>
                </div>
              </div>
              <Button className="application__btn-next" onClick={this.props.handleToStepTwoButton}>Забронировать</Button>
            </div>          
          </Form>
        </Container>
      </main>
    );
  }
}
