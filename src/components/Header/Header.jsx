import './Header.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';

export default class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <Container>
          <nav className="nav">
            <a href=""><img className="logo" src="src/static/assets/logo.png"></img></a>
            <ul className="nav-menu">
              <li>
                <a href="">Бронирование</a>
              </li>
              <li>
                <a href="">Контакты</a>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
    );
  }
}
