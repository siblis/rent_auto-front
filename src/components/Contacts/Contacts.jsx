import './Contacts.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import propTypes from 'prop-types';

export default class Contacts extends PureComponent {
  static propTypes = {
    center: propTypes.object,
    zoom: propTypes.number,
  }

  render() {
    return (
      <section className="contacts">
        <Container>
          <div className="contacts__wrapper">
            <h1>Контакты</h1>
            <iframe src="https://yandex.ru/map-widget/v1/-/CBFKNXE9sD" className="contacts__map" frameBorder="1" allowFullScreen={true}></iframe>
            <address className="contacts__address">
              <p>Адрес: г. Екатеринбург, ул. Гагарина 6/3</p>
              <p>Телефон: <a href="tel:+73432012401">+7 (343) 201&#x2012;2&#x2012;401</a></p>
              <p>Сотовый: <a href="tel:+79002012652">+7 (900) 201&#x2012;2&#x2012;652</a></p>
              <p>Почта: <a href="mailto:info@tachka96.ru">info@tachka96.ru</a></p>
            </address>
            {/*
            <div className="contacts__order-call">
              <Input className="contacts__phone-input" type="phone" placeholder='Номер телефона'></Input>
              <Button className="contacts__order-btn">Заказать звонок</Button>
            </div>
            */}
          </div>
        </Container>
      </section>
    );
  }
}
