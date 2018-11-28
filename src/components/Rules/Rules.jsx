import './Rules.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';

export default class Rules extends PureComponent {
  render() {
    return (
      <section className="rules">
        <Container>
          <div className="rules__wrapper">
            <h1>Условия проката</h1>
            <h3>Заголовок</h3>
            <p>Текстовое поле - Текст</p>
            <ul>
              <li>Маркер - Список</li>
            </ul>
          </div>
        </Container>
      </section>
    );
  }
}
