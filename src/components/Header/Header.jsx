import './Header.styl';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

export default class Header extends PureComponent {
  state = {
    dropdownMenuTitle: 'Парк авто',
    dropdownClassName: 'header__dropdown',
    dropdownOpen: false,
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
        dropdownMenuTitle: 'Главная',
      });
    }
  }
  
  dropdownToggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  setDropdownMenuTitle = (event) => {
    let targetId = '';

    if (event) {
      targetId = event.target.id;
    }

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
        dropdownMenuTitle: 'Главная',
      });
    }
  }

  handleLinkClick = () => {
    this.setDropdownMenuTitle();
    this.dropdownToggle();
  }

  render() {
    return (
      <header className="header">
        <Container>
          <nav className="header__nav">
            <Link to={{pathname: '/', step: 1}} onClick={this.setDropdownMenuTitle}><img className="header__logo" src={require("../../assets/images/logo.png")}></img></Link>
            <ul className="nav-menu">
              <Dropdown className="header__dropdown" isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
                <DropdownToggle caret >
                  {this.state.dropdownMenuTitle}
                </DropdownToggle>
                <DropdownMenu className="header__dropdown-menu">
                  <Link to={`/app`} id='app' onClick={this.handleLinkClick}>Главная</Link>
                  <Link to={`/cars`} id='cars' onClick={this.handleLinkClick}>Список авто</Link>
                  <Link to={`/rules`} id='rules' onClick={this.handleLinkClick}>Условия проката</Link>
                  <Link to={`/services`} id='services' onClick={this.handleLinkClick}>Дополнительные услуги</Link>
                  <Link to={`/contacts`} id='contacts' onClick={this.handleLinkClick}>Контакты</Link>
                </DropdownMenu>
              </Dropdown>
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
