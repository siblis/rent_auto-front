import './FAQ.styl';

import React, { PureComponent } from 'react';
import { Container, Button, UncontrolledCollapse, Card, CardBody } from 'reactstrap';

export default class About extends PureComponent {
  render() {
    return (
      <section className="faq">
        <Container>
          <div className="faq__wrapper">
            <h2>FAQ</h2>
            <h3>Часто задаваемые вопросы</h3>
            <div className="faq__text">
              <Button className="faq__question" id={`question-1`}>
                Есть ли ограничения по количеству дней, на которые я могу арендовать автомобиль? Ограничения по суточному пробегу?
              </Button>
              <UncontrolledCollapse className="faq__answer" toggler={`#question-1`}>
                <Card>
                  <CardBody>
                    Мы предоставляем автомобили в аренду на любое время (от 24 часов до 1 года). Суточный пробег автомобиля по Екатеринбургу не ограничивается.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <Button className="faq__question" id={`question-2`}>
                Требуется ли внесение залога за автомобиль, как это часто требуется в других компаниях?
              </Button>
              <UncontrolledCollapse className="faq__answer" toggler={`#question-2`}>
                <Card>
                  <CardBody>
                    Нет, компания Тачка 96 выделяется среди других тем, что не требует внесения залога.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <Button className="faq__question" id={`question-3`}>
                Как быть, если я на арендованном автомобиле попаду в ДТП?
              </Button>
              <UncontrolledCollapse className="faq__answer" toggler={`#question-3`}>
                <Card>
                  <CardBody>
                    Вы можете не волноваться о том, что вдруг попадёте в небольшую аварию, поскольку в стоимость аренды каждого автомобиля включена страховка по КАСКО (с ограниченной материальной ответственностью водителя) и ОСАГО, поэтому страховики полностью покроют все затраты на ремонт и восстановление авто.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <Button className="faq__question" id={`question-4`}>
                Если я планирую дальнюю поездку с ребенком, могу ли дополнительно у вас арендовать кресло? Навигатор?
              </Button>
              <UncontrolledCollapse className="faq__answer" toggler={`#question-4`}>
                <Card>
                  <CardBody>
                    Да, наша компания предоставляет дополнительное оборудование (детские кресла и удерживающие сиденья, багажники, крепления, навигационное оборудование, аксессуары для кемпинга и т.д.) при условии наличия такого оборудования и по тарифам, указанным в договоре.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <Button className="faq__question" id={`question-5`}>
                Есть ли ограничения по количеству дней, на которые я могу арендовать автомобиль? Ограничения по суточному пробегу?
              </Button>
              <UncontrolledCollapse className="faq__answer" toggler={`#question-5`}>
                <Card>
                  <CardBody>
                    Обычно мы предоставляем автомобили в аренду без водителя, но при необходимости оказываем услугу транспортного аутсорсинга (присылаем автомобиль с водителем). Услуги водителя оплачиваются отдельно.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <Button className="faq__question" id={`question-6`}>
                Можно ли взять автомобиль для подработки в такси?
              </Button>
              <UncontrolledCollapse className="faq__answer" toggler={`#question-6`}>
                <Card>
                  <CardBody>
                    Вы можете использовать аренду для любых целей.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <Button className="faq__question" id={`question-7`}>
                Я хочу взять автомобиль в пятницу в 20.00 – это тариф рабочего дня?
              </Button>
              <UncontrolledCollapse className="faq__answer" toggler={`#question-7`}>
                <Card>
                  <CardBody>
                    Тариф &quot;выходного дня&quot; - с 17-00 пятницы по 10-00 понедельника. Тариф &quot;рабочая неделя&quot; - с 10-00 понедельника по 17-00 пятницы.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <Button className="faq__question" id={`question-8`}>
                Автомобиль нужен срочно, возможно ли оперативно его заказать?
              </Button>
              <UncontrolledCollapse className="faq__answer" toggler={`#question-8`}>
                <Card>
                  <CardBody>
                    Основной нашей задачей является максимально быстрая подача автомобиля в аренду. Если вам необходим срочный прокат в Екатеринбурге, свяжитесь с нами по телефону <a href="tel:+73432012401">+7 (343) 201&#x2012;2&#x2012;401</a>
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <Button className="faq__question" id={`question-9`}>
                Существует ли у вас скидочная или бонусная система при регулярном заказе?
              </Button>
              <UncontrolledCollapse className="faq__answer" toggler={`#question-9`}>
                <Card>
                  <CardBody>
                  При первом же заказе мы начисляем Вам бонусы на следующий заказ.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <Button className="faq__question" id={`question-10`}>
                Берете ли Вы дополнительные деньги за бронирование?
              </Button>
              <UncontrolledCollapse className="faq__answer" toggler={`#question-10`}>
                <Card>
                  <CardBody>
                    Услуга бронирования автомобиля предоставляется бесплатно.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
            {/*
            <div className="faq__buttons">
              <Button className="faq__button" color="primary">Задать вопрос</Button>
              <Button className="faq__button">Заказать звонок</Button>
            </div>
            */}
          </div>
        </Container>
      </section>
    );
  }
}
