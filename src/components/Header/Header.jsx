import './Header.styl';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

const routes = [
  {
    path: 'app',
    title: 'Главная',
  },
  {
    path: 'cars',
    title: 'Список авто',
  },
  {
    path: 'rules',
    title: 'Условия проката',
  },
  {
    path: 'services',
    title: 'Дополнительные услуги',
  },
  {
    path: 'contacts',
    title: 'Контакты',
  }
]

export default class Header extends PureComponent {
  state = {
    dropdownMenuTitle: 'Парк авто',
    dropdownClassName: 'header__dropdown',
    dropdownOpen: false,
  }

  componentDidMount = () => {
    const path = window.location.pathname.slice(1);

    const route = routes.find(route => route.path === path);
    const title = route ? route.title : routes[0].title;
    this.setState({
      dropdownMenuTitle: title,
    });
  }
  
  dropdownToggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  setDropdownMenuTitle = event => {
    const targetId = event.target.id;

    const route = routes.find(route => route.path === targetId);
    const title = route ? route.title : routes[0].title;
    this.setState({
      dropdownMenuTitle: title,
    });
  }

  handleLinkClick = event => {
    this.setDropdownMenuTitle(event);
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
                  {routes.map((route, index) => <Link key={index} to={`/${route.path}`} onClick={this.handleLinkClick} id={route.path}>{route.title}</Link>)}
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
