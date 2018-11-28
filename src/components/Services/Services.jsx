import './Services.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';

export default class Services extends PureComponent {
  render() {
    return (
      <section className="services">
        <Container>
          <div className="services__wrapper">
            <h1>Дополнительные услуги</h1>
          </div>
        </Container>
      </section>
    );
  }
}
