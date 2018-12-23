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
            {/*}
            <li><Link to={`/policy`} onClick={() => document.body.scrollTop = document.documentElement.scrollTop = 0}>Персональные данные</Link></li>
            */}
            <li><Link to={`/about`} onClick={() => document.body.scrollTop = document.documentElement.scrollTop = 0}>О нас</Link></li>
            {/*}
            <li><Link to={`/description`} onClick={() => document.body.scrollTop = document.documentElement.scrollTop = 0}>Описание проекта</Link></li>
            */}
            <li><Link to={`/rules`} onClick={() => document.body.scrollTop = document.documentElement.scrollTop = 0}>Условия проката</Link></li>
          </ul>
          <div className="footer__schedule">
            <p>ГРАФИК РАБОТЫ:</p>
            <time>Пн.&#x2013;Пт.: 10:00 &#x2013; 19:00</time>
            <time>Сб.&#x2013;Вс.: 10:00 &#x2013; 19:00</time>
          </div>
          <address className="footer__address">
            <p>Адрес: г. Екатеринбург, ул. Гагарина 6/3</p>
            <p>Телефон: <a href="tel:+73432012401">+7 (343) 201&#x2012;2&#x2012;401</a></p>
            <p>Сотовый: <a href="tel:+79002012652">+7 (900) 201&#x2012;2&#x2012;652</a></p>
            <p>Почта: <a href="mailto:info@tachka96.ru">info@tachka96.ru</a></p>
          </address>
        </Container>
      </footer>
    );
  }
}
