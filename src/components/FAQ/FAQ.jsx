import './FAQ.styl';

import React, { PureComponent, Fragment } from 'react';
import { Container, Button, UncontrolledCollapse, Card, CardBody } from 'reactstrap';

const faq = [
  {
    question: 'Есть ли ограничения по количеству дней, на которые я могу арендовать автомобиль? Ограничения по суточному пробегу?',
    answer: 'Мы предоставляем автомобили в аренду на любое время (от 24 часов до 1 года). Суточный пробег автомобиля по Екатеринбургу не ограничивается.',
  },
  {
    question: 'Требуется ли внесение залога за автомобиль, как это часто требуется в других компаниях?',
    answer: 'Нет, компания Тачка 96 выделяется среди других тем, что не требует внесения залога.',
  },
  {
    question: 'Как быть, если я на арендованном автомобиле попаду в ДТП?',
    answer: 'Вы можете не волноваться о том, что вдруг попадёте в небольшую аварию, поскольку в стоимость аренды каждого автомобиля включена страховка по КАСКО (с ограниченной материальной ответственностью водителя) и ОСАГО, поэтому страховики полностью покроют все затраты на ремонт и восстановление авто.',
  },
  {
    question: 'Если я планирую дальнюю поездку с ребенком, могу ли дополнительно у вас арендовать кресло? Навигатор?',
    answer: 'Да, наша компания предоставляет дополнительное оборудование (детские кресла и удерживающие сиденья, багажники, крепления, навигационное оборудование, аксессуары для кемпинга и т.д.) при условии наличия такого оборудования и по тарифам, указанным в договоре.',
  },
  {
    question: 'Предоставляете ли Вы автомобили с водителем?',
    answer: 'Обычно мы предоставляем автомобили в аренду без водителя, но при необходимости оказываем услугу транспортного аутсорсинга (присылаем автомобиль с водителем). Услуги водителя оплачиваются отдельно.',
  },
  {
    question: 'Можно ли взять автомобиль для подработки в такси?',
    answer: 'Вы можете использовать аренду для любых целей.',
  },
  {
    question: 'Я хочу взять автомобиль в пятницу в 20.00 – это тариф рабочего дня?',
    answer: 'Тариф &quot;выходного дня&quot; - с 17-00 пятницы по 10-00 понедельника. Тариф &quot;рабочая неделя&quot; - с 10-00 понедельника по 17-00 пятницы.',
  },
  {
    question: 'Автомобиль нужен срочно, возможно ли оперативно его заказать?',
    answer: 'Основной нашей задачей является максимально быстрая подача автомобиля в аренду. Если вам необходим срочный прокат в Екатеринбурге, свяжитесь с нами по телефону <a href="tel:+73432012401">+7 (343) 201&#x2012;2&#x2012;401</a>',
  },
  {
    question: 'Существует ли у вас скидочная или бонусная система при регулярном заказе?',
    answer: 'При первом же заказе мы начисляем Вам бонусы на следующий заказ.',
  },
  {
    question: 'Берете ли Вы дополнительные деньги за бронирование?',
    answer: 'Услуга бронирования автомобиля предоставляется бесплатно.',
  },
]

export default class About extends PureComponent {
  isCollapseOpen = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  }

  render() {
    return (
      <section className="faq">
        <Container>
          <div className="faq__wrapper">
            <h2>FAQ</h2>
            <h3>Часто задаваемые вопросы</h3>
            <div className="faq__text">
              {faq.map((item, index) => (
                <Fragment key={index}>
                  <Button style={this.isCollapseOpen() ? { pointerEvents: 'none' } : {}} className="faq__question" id={`question-${index}`}>
                    <div dangerouslySetInnerHTML={{__html: item.question}}></div>
                  </Button>
                  {this.isCollapseOpen() ? <UncontrolledCollapse isOpen className="faq__answer" toggler={`#question-${index}`}>
                    <Card>
                      <CardBody>
                        <div dangerouslySetInnerHTML={{__html: item.answer}}></div>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse> :
                  <UncontrolledCollapse className="faq__answer" toggler={`#question-${index}`}>
                    <Card>
                      <CardBody>
                        <div dangerouslySetInnerHTML={{__html: item.answer}}></div>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>}
                </Fragment>
              ))}
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
