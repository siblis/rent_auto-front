import './About.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';

export default class About extends PureComponent {
  render() {
    return (
      <section className="about">
        <Container>
          <div className="about__wrapper">
            <h1>О нас</h1>
            <p> Компания Тачка 96 предлагает своим клиентам только комфортабельные, современные и надёжные машины, которые позволят реализовать поставленные задачи: отправиться в семейную поездку к родственникам, поехать в деловое турне, решить коммерческие вопросы и т. д.</p>
            <p> Мы используем грамотно продуманную ценовую политику, благодаря чему у нас можно взять в аренду автомобиль без залога по наиболее оптимальным и доступным ценам.</p>
            <address className="about__address">
              <p>Адрес: г. Екатеринбург, ул. Гагарина 6/3</p>
              <p>Телефон: +7 (343) 201&#x2012;2&#x2012;401</p>
              <p>Сотовый: 89002012652</p>
              <p>Почта: info@tachka96.ru</p>
            </address>
          </div>
        </Container>
      </section>
    );
  }
}
