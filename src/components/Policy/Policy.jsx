import './Policy.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';

export default class Policy extends PureComponent {
  render() {
    return (
      <section className="policy">
        <Container>
          <div className="policy__wrapper">
            <h1>Пользовательское соглашение</h1>
            <h3>Заголовок</h3>
            <p>Текстовое поле - Текст</p>
            <ul>
              <li>Маркер - Список</li>
            </ul>
            <h1>Политика конфиденциальности</h1>
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
