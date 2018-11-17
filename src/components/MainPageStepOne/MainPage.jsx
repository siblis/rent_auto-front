import './MainPage.styl';
import '../../../node_modules/rc-calendar/assets/index.css'
import '../../../node_modules/rc-time-picker/assets/index.css'


import React, { PureComponent } from 'react';
import { Container, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, 
  Form, Button } from 'reactstrap';
import propTypes from 'prop-types';
import Calendar from 'rc-calendar';
import TimePicker from 'rc-time-picker';

export default class Header extends PureComponent {
  static propTypes = {
    brands: propTypes.array,
    startDate: propTypes.string,
    endDate: propTypes.string,
    brand: propTypes.object,
    price: propTypes.number,
    handleStartDateInput: propTypes.func,
    handleEndDateInput: propTypes.func,
    handleStartTimeInput: propTypes.func,
    handleEndTimeInput: propTypes.func,
    handleBrandInput: propTypes.func,
    handleNextButton: propTypes.func,
  }

  render() {
    return (
      <main className="main-page">
        <Container>
          <Form className="application">
            <div className="application__block">
              <h4>Дата взятия</h4>
              <div className="application__input">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    {this.props.startDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <Calendar onChange={this.props.handleStartDateInput}/>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <div className="application__block">
              <h4>Дата возврата</h4>
              <div className="application__input">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    {this.props.endDate}
                  </DropdownToggle>
                  <DropdownMenu>
                    <Calendar onChange={this.props.handleEndDateInput}/>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <div className="application__block">
              <h4>Марка автомобиля</h4>
              <div className="application__input">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/car.svg')}></object>
                <UncontrolledDropdown>
                  <DropdownToggle caret>
                    {this.props.brand.name}
                  </DropdownToggle>
                  <DropdownMenu>
                    {this.props.brands.map((brand, index) => 
                      <DropdownItem id={brand.id} onClick={this.props.handleBrandInput} key={index}>{brand.name}</DropdownItem>
                    )}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <div className="application__block">
              <h4>Время взятия</h4>
              <div className="application__input">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/clock.svg')}></object>
                <TimePicker className="application__field" onChange={this.props.handleStartTimeInput} showSecond={false} minuteStep={10}/>
              </div>
            </div>
            <div className="application__block">
              <h4>Время возврата</h4>
              <div className="application__input">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/clock.svg')}></object>
                <TimePicker className="application__field" onChange={this.props.handleEndTimeInput} showSecond={false} minuteStep={10}/>
              </div>
            </div>
            <div className="application__block">
              <h4>Примерная стоимость</h4>
              <div className="application__input">
                <object className="application__icon" type="image/svg+xml" data={require('../../assets/images/ruble-currency-sign.svg')}></object>
                <div className="application__price">{this.props.price}</div>
              </div>
            </div>
            <Button className="application__btn-next" onClick={this.props.handleNextButton}>Забронировать</Button>
          </Form>
        </Container>
      </main>
    );
  }
}
