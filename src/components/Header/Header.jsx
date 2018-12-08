import './Header.styl';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container, UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

export default class Header extends PureComponent {
  state = {
    dropdownMenuTitle: 'Парк авто',
    dropdownClassName: 'header__dropdown'
  }

  componentDidMount = () => {
    const path = window.location.pathname;

    if (path === '/cars') {
      this.setState({
        dropdownMenuTitle: 'Список авто',
      });
    } else if (path === '/rules') {
      this.setState({
        dropdownMenuTitle: 'Условия проката',
      });
    } else if (path === '/services') {
      this.setState({
        dropdownMenuTitle: 'Дополнительные услуги',
      });
    } else if (path === '/contacts') {
      this.setState({
        dropdownMenuTitle: 'Контакты',
      });
    } else {
      this.setState({
        dropdownMenuTitle: 'Парк авто',
      });
    }
  }

  setDropdownMenuTitle = (event) => {
    const targetId = event.target.id;

    if (targetId === 'cars') {
      this.setState({
        dropdownMenuTitle: 'Список авто',
      });
    } else if (targetId === 'rules') {
      this.setState({
        dropdownMenuTitle: 'Условия проката',
      });
    } else if (targetId === 'services') {
      this.setState({
        dropdownMenuTitle: 'Дополнительные услуги',
      });
    } else if (targetId === 'contacts') {
      this.setState({
        dropdownMenuTitle: 'Контакты',
      });
    } else {
      this.setState({
        dropdownMenuTitle: 'Парк авто',
      });
    }
  }

  handleMenuClick = (event) => {
    event.currentTarget.className = "dropdown-menu";
    event.currentTarget.parentElement.className = "header__dropdown dropdown";
  }

  dropdownClassName = () => {

  }

  render() {
    return (
      <header className="header">
        <Container>
          <nav className="header__nav">
            <Link to={{pathname: '/', step: 1}} onClick={this.setDropdownMenuTitle}><img className="header__logo" src={require("../../assets/images/logo.png")}></img></Link>
            <ul className="nav-menu">
              <UncontrolledDropdown className="header__dropdown">
                <DropdownToggle caret >
                  {this.state.dropdownMenuTitle}
                </DropdownToggle>
                <DropdownMenu className="header__dropdown-menu" onClick={this.handleMenuClick}>
                  <Link to={`/app`} id='app' onClick={this.setDropdownMenuTitle}>Парк авто</Link>
                  <Link to={`/cars`} id='cars' onClick={this.setDropdownMenuTitle}>Список авто</Link>
                  <Link to={`/rules`} id='rules' onClick={this.setDropdownMenuTitle}>Условия проката</Link>
                  <Link to={`/services`} id='services' onClick={this.setDropdownMenuTitle}>Дополнительные услуги</Link>
                  <Link to={`/contacts`} id='contacts' onClick={this.setDropdownMenuTitle}>Контакты</Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className="header__contacts">
                <Link to={`/contacts`}>Контакты</Link>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
    );
  }
}
