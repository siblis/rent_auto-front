import './NotFound.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class NotFound extends PureComponent {
  render() {
    return (
      <section className="not-found">
        <Container>
          <div className="not-found__wrapper">
            <h3>Ой. А как вы сюда попали?</h3>
            <Link to={{pathname: '/', step: 1}} className="not-found__link">Вернуться на главную</Link>
          </div>
        </Container>
      </section>
    );
  }
}
