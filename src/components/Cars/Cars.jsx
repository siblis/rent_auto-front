import './Cars.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';

export default class Cars extends PureComponent {
  render() {
    return (
      <section className="cars">
        <Container>
          <div className="cars__wrapper">
          </div>
        </Container>
      </section>
    );
  }
}
