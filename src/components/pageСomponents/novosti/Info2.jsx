import React from 'react'
import { Card } from 'react-bootstrap'
import logo from '../../images/vostok8.jpeg'
import './Info2Module.css'

function Info2() {
  return (
    <div className='container_info'>
    <Card className='car'>
      <h2>ФУТБОЛЬНАЯ СПОРТИВНАЯ ШКОЛА «ВОСТОК-ЭЛЕКТРОСТАЛЬ» ПРОВОДИТ НАБОР МАЛЬЧИКОВ И ДЕВОЧЕК В КОМАНДУ 2016 ГОДА РОЖДЕНИЯ.</h2>
      <hr/>
      <p>Футбольная спортивная школа «ВОСТОК-Электросталь» проводит набор мальчиков и девочек в команду 2016 года рождения.</p>
      <img src = {logo} alt=''/>
      <b>Футбольная спортивная школа «ВОСТОК-Электросталь» проводит набор мальчиков и девочек в команду 2016 года рождения.</b>
      <h4>Набор состоится 8, 15, 21, 28 августа 2021 г.</h4>
      <p>Время тренировок 10.00 ч. на футбольном поле «ВОСТОК», ул. Пушкина 23А (возле МОУ СОШ № 11)</p>
      <p>Получить информацию о поступлении и задать актуальные вопросы Вы можете тренеру команды 2016 г.р.</p>
      <strong>Гайдай Константин Викторович</strong>
      <strong>тел: 8-926-829-48-49</strong>
    </Card>
  </div>
  )
}

export default Info2