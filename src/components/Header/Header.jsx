import './Header.css';

import React, {PureComponent} from 'react';
import { Container } from 'reactstrap';

export default class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <Container>
          <h3>Hello from Header</h3>
        </Container>
      </header>
    );
  }
}
