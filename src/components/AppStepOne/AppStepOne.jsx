import '../../../node_modules/rc-time-picker/assets/index.css';
import './AppStepOne.styl';

import React, { PureComponent } from 'react';
import { Container, UncontrolledDropdown, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, 
  Form, Button } from 'reactstrap';
import propTypes from 'prop-types';
import Calendar from 'react-infinite-calendar';
import TimePicker from 'rc-time-picker';

import calendarLocale from '../../utils/calendarLocale';
import calendarTheme from '../../utils/calendarTheme';

export default class AppStepOne extends PureComponent {
  static propTypes = {
    brands: propTypes.array,
    startDate: propTypes.string,
    endDate: propTypes.string,
    endTime: propTypes.object,
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

  state = {
    startDateDropdownOpen: false,
    endDateDropdownOpen: false,
  }

  isSmallScreen = () => document.documentElement.clientWidth < 420;

  isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

  startDateDropdownToggle = () => {
    this.setState(prevState => ({
      startDateDropdownOpen: !prevState.startDateDropdownOpen
    }));
  }

  endDateDropdownToggle = () => {
    this.setState(prevState => ({
      endDateDropdownOpen: !prevState.endDateDropdownOpen
    }));
  }

  render() {
    return (
      <main className="app">
        <Container>
          <Form className="application">
            <div className="application__step-one">
              <div className="application__block application__block--start-date">
                <h4 className="application__field-name">Дата получения *</h4>
                <div className="application__input application__input--date">
                  <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                  <Dropdown isOpen={this.state.startDateDropdownOpen} toggle={this.startDateDropdownToggle}>
                    <DropdownToggle caret className={this.props.validStartDate ? '' : 'application__invalid animated bounce'}>
                      {this.props.startDate}
                    </DropdownToggle>
                    <DropdownMenu>
                      <Calendar
                        onSelect={this.props.handleStartDateInput}
                        locale={calendarLocale}
                        minDate={new Date()}
                        width={this.isSmallScreen() ? 300 : 400}
                        height={400}
                        theme={calendarTheme}
                      />
                    </DropdownMenu>
                  </Dropdown>
                  {this.props.validStartDate || <div className="application__error animated bounce">!</div>}
                </div>
              </div>
              <div className="application__block application__block--end-date">
                <h4 className="application__field-name">Дата возврата *</h4>
                <div className="application__input application__input--date">
                  <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                  <Dropdown isOpen={this.state.endDateDropdownOpen} toggle={this.endDateDropdownToggle}>
                    <DropdownToggle caret className={this.props.validEndDate ? '' : 'application__invalid animated bounce'}>
                      {this.props.endDate}
                    </DropdownToggle>
                    <DropdownMenu>
                      <Calendar
                        onSelect={this.props.handleEndDateInput}
                        locale={calendarLocale}
                        minDate={new Date()}
                        width={this.isSmallScreen() ? 300 : 400}
                        height={400}
                        theme={calendarTheme}
                      />
                    </DropdownMenu>
                  </Dropdown>
                  {this.props.validEndDate || <div className="application__error animated bounce">!</div>}
                </div>
              </div>
              <div className="application__block application__block--model">
                <h4 className="application__field-name">Модель *</h4>
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
              <div className="application__block application__block--start-time">
                <h4 className="application__field-name">Время получения *</h4>
                <div className="application__input">
                  <object className="application__icon application__icon--clock" type="image/svg+xml" data={require('../../assets/images/clock.svg')}></object>
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
                <h4 className="application__field-name">Время возврата *</h4>
                <div className="application__input">
                  <object className="application__icon application__icon--clock" type="image/svg+xml" data={require('../../assets/images/clock.svg')}></object>
                  <TimePicker
                    className={this.props.validEndTime ? 'application__field' : 'application__field application__invalid animated bounce'}
                    onChange={this.props.handleEndTimeInput}
                    showSecond={false}
                    minuteStep={10}
                    allowEmpty={false}
                    value={this.props.endTime}
                  />
                  {this.props.validEndTime || <div className="application__error animated bounce">!</div>}      
                </div>
              </div>
              <div className="application__block application__block--price">
                <h4 className="application__field-name">Стоимость</h4>
                <div className="application__subtitle">примерная</div>
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
