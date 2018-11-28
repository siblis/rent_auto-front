import './Description.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';

export default class Description extends PureComponent {
  render() {
    return (
      <section className="description">
        <Container>
          <div className="description__wrapper">
          </div>
        </Container>
      </section>
    );
  }
}
