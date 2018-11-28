import './Header.styl';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Header extends PureComponent {
  state = {
    dropdownMenuTitle: 'Парк авто',
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
    } else {
      this.setState({
        dropdownMenuTitle: 'Парк авто',
      });
    }
  }

  render() {
    return (
      <header className="header">
        <Container>
          <nav className="nav">
            <Link to={`/`}><img className="logo" src={require("../../assets/images/logo.png")}></img></Link>
            <ul className="nav-menu">
              <UncontrolledDropdown className="header__dropdown">
                <DropdownToggle caret >
                  {this.state.dropdownMenuTitle}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.setDropdownMenuTitle}>
                    <Link to={`/app`} id='app'>Парк авто</Link>
                  </DropdownItem>
                  <DropdownItem onClick={this.setDropdownMenuTitle}>
                    <Link to={`/cars`} id='cars'>Список авто</Link>
                  </DropdownItem>
                  <DropdownItem onClick={this.setDropdownMenuTitle}>
                    <Link to={`/rules`} id='rules'>Условия проката</Link>
                  </DropdownItem>
                  <DropdownItem onClick={this.setDropdownMenuTitle}>
                    <Link to={`/services`} id='services'>Дополнительные услуги</Link>
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
