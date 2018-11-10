import './Footer.styl';

import React, { PureComponent } from 'react';
import { Container} from 'reactstrap';

export default class Footer extends PureComponent {
  render() {

    return (
      <footer className="footer">
        <Container>
          <address className="address">
            <p>Адрес: г. Екатеринбург, ул .Гагарина 6/3</p>
            <p>Телефон: +7 (343) 201-2-401</p>
            <p>Сотовый: 89002012652</p>
            <p>Почта: info@tachka96.ru</p>
          </address>
          <div className="schedule">
            <p>ГРАФИК РАБОТЫ:</p>
            <time>Пн.-Пт.: 10:00 - 19:00</time>
            <time>Сб.-Вс.: 10:00 - 19:00</time>
          </div>
        </Container>
      </footer>
    );
  }
}
