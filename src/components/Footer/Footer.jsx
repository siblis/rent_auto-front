import './Footer.styl';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container} from 'reactstrap';

export default class Footer extends PureComponent {
  render() {

    return (
      <footer className="footer">
        <Container>
          <ul className="footer__nav">
            <li><Link to={`/policy`}>Персональные данные</Link></li>
            <li><Link to={`/about`}>О нас</Link></li>
            <li><Link to={`/description`}>Описание проекта</Link></li>
            <li><Link to={`/rules`}>Условия проката</Link></li>
          </ul>
          <div className="footer__schedule">
            <p>ГРАФИК РАБОТЫ:</p>
            <time>Пн.-Пт.: 10:00 - 19:00</time>
            <time>Сб.-Вс.: 10:00 - 19:00</time>
          </div>
          <address className="footer__address">
            <p>Адрес: г. Екатеринбург, ул. Гагарина 6/3</p>
            <p>Телефон: +7 (343) 201-2-401</p>
            <p>Сотовый: 89002012652</p>
            <p>Почта: info@tachka96.ru</p>
          </address>
        </Container>
      </footer>
    );
  }
}
