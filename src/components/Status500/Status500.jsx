import './Status500.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class NotFound extends PureComponent {
  render() {
    return (
      <section className="status-500">
        <Container>
          <div className="status-500">
            <h3>Кажется что-то пошло не так...</h3>
            <Link to={{pathname: '/', step: 1}} className="status-500__link">Вернуться на главную</Link>
          </div>
        </Container>
      </section>
    );
  }
}
