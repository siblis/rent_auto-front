import './Footer.css';

import React, {PureComponent} from 'react';
import { Container} from 'reactstrap';

export default class Footer extends PureComponent {
  render() {

    return (
      <footer className="footer">
        <Container>
          <h3>Hello from Footer</h3>
        </Container>
      </footer>
    );
  }
}
