import './FAQ.styl';

import React, { PureComponent, Fragment } from 'react';
import { Container, Button, UncontrolledCollapse, Card, CardBody } from 'reactstrap';

const faq = [
  {
    question: 'Сколько лет мне должно быть, чтобы получить автомобиль в аренду?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste seddignissimos esse fuga! Minus, alias.',
  },
  {
    question: 'Могу ли я арендовать автомобиль для кого-то еще?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste seddignissimos esse fuga! Minus, alias.',
  },
  {
    question: 'Как найти самое бюджетное предложение на аренду автомобиля?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste seddignissimos esse fuga! Minus, alias.',
  },
  {
    question: 'На что я должен обратить внимание при выборе автомобиля?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste seddignissimos esse fuga! Minus, alias.',
  },
  {
    question: 'Все ли сборы включены в стоимость аренды?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste seddignissimos esse fuga! Minus, alias.',
  },
]

export default class About extends PureComponent {
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
                  <Button id={`question-${index}`}>
                    {item.question}
                  </Button>
                  <UncontrolledCollapse toggler={`#question-${index}`}>
                    <Card>
                      <CardBody>
                        {item.answer}
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </Fragment>
              ))}
            </div>
            <div className="faq__buttons">
              <Button className="faq__button" color="primary">Задать вопрос</Button>
              <Button className="faq__button">Заказать звонок</Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}
