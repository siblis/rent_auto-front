import './Header.styl';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <Container>
          <nav className="nav">
            <Link to={`/`}><img className="logo" src={require("../../assets/images/logo.png")}></img></Link>
            <ul className="nav-menu">
              <UncontrolledDropdown>
                <DropdownToggle caret >
                  Парк авто
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to={`/app`}>Парк авто</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={`/cars`}>Список авто</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={`/rules`}>Условия проката</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={`/services`}>Дополнительные услуги</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li>
                <Link to={`/contacts`}>Контакты</Link>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
    );
  }
}
