import './MainPage.styl';

import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';

export default class Header extends PureComponent {
  render() {
    return (
      <main className="main-page">
        <Container>
          <div className="car-info">
            <div className="car-info__recieve-date">
              <h4>Дата получения</h4>
              <div className="input-block"></div>
            </div>
            <div className="car-info__return-date">
              <h4>Дата возврата</h4>
              <div className="input-block"></div>
            </div>
            <div className="car-info__model">
              <h4>Марка автомобиля</h4>
              <div className="input-block"></div>
            </div>
            <div className="car-info__recieve-time">
              <h4>Время получения</h4>
              <div className="input-block"></div>
            </div>
            <div className="car-info__return-time">
              <h4>Время возврата</h4>
              <div className="input-block"></div>
            </div>
          </div>
          <div className="details"></div>
          <div className="personal-info"></div>
        </Container>
      </main>
    );
  }
}
