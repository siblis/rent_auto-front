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
            <iframe src="https://yandex.ru/map-widget/v1/-/CBFKNXE9sD" className="contacts__map" frameBorder="1" allowFullScreen="true"></iframe>
            <address className="contacts__address">
              <p>Адрес: г. Екатеринбург, ул. Гагарина 6/3</p>
              <p>Телефон: +7 (343) 201-2-401</p>
              <p>Сотовый: 89002012652</p>
              <p>Почта: info@tachka96.ru</p>
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
