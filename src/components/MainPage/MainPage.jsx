import './MainPage.styl';

import React, { PureComponent } from 'react';
import { Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

export default class Header extends PureComponent {
  state = {
    dropdownOneOpen: false,   // TO DO: Refactor it (dropdown = component)
    dropdownTwoOpen: false,
    dropdownThreeOpen: false,
    dropdownFourOpen: false,
    dropdownFiveOpen: false,
  };

  toggleOne = () => {
    this.setState(prevState => ({
      dropdownOneOpen: !prevState.dropdownOneOpen
    }));
  }

  toggleTwo = () => {
    this.setState(prevState => ({
      dropdownTwoOpen: !prevState.dropdownTwoOpen
    }));
  }

  toggleThree = () => {
    this.setState(prevState => ({
      dropdownThreeOpen: !prevState.dropdownThreeOpen
    }));
  }

  toggleFour = () => {
    this.setState(prevState => ({
      dropdownFourOpen: !prevState.dropdownFourOpen
    }));
  }

  toggleFive = () => {
    this.setState(prevState => ({
      dropdownFiveOpen: !prevState.dropdownFiveOpen
    }));
  }

  render() {
    return (
      <main className="main-page">
        <Container>
          <div className="car-info">
            <div className="car-info__block">
              <h4>Дата получения</h4>
              <div className="car-info__input">
                <object className="car-info__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <Dropdown isOpen={this.state.dropdownOneOpen} toggle={this.toggleOne}>
                  <DropdownToggle caret>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem disabled>Disabled for now</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="car-info__block">
              <h4>Время получения</h4>
              <div className="car-info__input">
                <object className="car-info__icon" type="image/svg+xml" data={require('../../assets/images/clock.svg')}></object>
                <Dropdown isOpen={this.state.dropdownTwoOpen} toggle={this.toggleTwo}>
                  <DropdownToggle caret>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem disabled>Disabled for now</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="car-info__block">
              <h4>Дата возврата</h4>
              <div className="car-info__input">
                <object className="car-info__icon" type="image/svg+xml" data={require('../../assets/images/calendar.svg')}></object>
                <Dropdown isOpen={this.state.dropdownThreeOpen} toggle={this.toggleThree}>
                  <DropdownToggle caret>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem disabled>Disabled for now</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="car-info__block">
              <h4>Время возврата</h4>
              <div className="car-info__input">
                <object className="car-info__icon" type="image/svg+xml" data={require('../../assets/images/clock.svg')}></object>
                <Dropdown isOpen={this.state.dropdownFourOpen} toggle={this.toggleFour}>
                  <DropdownToggle caret>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem disabled>Disabled for now</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="car-info__block">
              <h4>Марка автомобиля</h4>
              <div className="car-info__input">
                <object className="car-info__icon" type="image/svg+xml" data={require('../../assets/images/car.svg')}></object>
                <Dropdown isOpen={this.state.dropdownFiveOpen} toggle={this.toggleFive}>
                  <DropdownToggle caret>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Renault</DropdownItem>
                    <DropdownItem>Lada</DropdownItem>
                    <DropdownItem>Skoda</DropdownItem>
                    <DropdownItem>BMW</DropdownItem>
                    <DropdownItem>Toyota</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="details"></div>
          <div className="personal-info"></div>
        </Container>
      </main>
    );
  }
}
