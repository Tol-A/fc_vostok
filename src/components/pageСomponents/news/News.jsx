import React from 'react'
import './NewsModule.css'
import logo from '../../images/vostok6.jpeg'
import logo1 from '../../images/vostok7.png'
import logo2 from '../../images/vostok8.jpeg'


function News() {
  return (
    <div className='news'>
        <div className='word_new'>НОВОСТИ</div>
        <div className='card'>
            <div className='new_card'>
                <img src = {logo} alt=''/>
                <p className='card_link'>МУНИЦИПАЛЬНАЯ ФУТБОЛЬНАЯ ШКОЛА «ВОСТОК — ЭЛЕКТРОСТАЛЬ» ОТКРЫВАЕТ ФИЛИАЛ НА ВОСТОЧНОЙ СТОРОНЕ ГОРОДА. ПРИГЛАШАЕМ ДЕТЕЙ ДЛЯ ЗАНЯТИЙ ФУТБОЛОМ!</p>
                <p className='card_text'>Муниципальная Футбольная школа «ВОСТОК — Электросталь»открывает филиал на Восточной стороне города. Приглашаем детей для занятий футболом!</p>
                <p className='card_data'>август 25.2022</p>
            </div>

            <div className='new_card'>
                <img src = {logo1} alt=''/>
                <p className='card_link'>ФУТБОЛЬНАЯ ШКОЛА «ВОСТОК-ЭЛЕКТРОСТАЛЬ» ПРОВОДИТ НАБОР ДЕТЕЙ 2016-17, 2015, 2014, 2013-2005 Г.Р.</p>
                <p className='card_text'>Уважаемые родители! Футбольная школа «ВОСТОК-Электросталь» проводит набор детей: 2016-17 г.р. — тренер Гайдай Константин Викторович. Тел. 8 926 829-48-49 2015 г.р. — тренер Цуканов Вячеслав Валерьевич. Тел. 8 929 971-95-44 2014 г.р — тренер Митрусков Валерий Сергеевич. Тел. 8 926 353-87-45 2013-2005 г.р. — старший тренер Цуканов Вячеслав Валерьевич. Тел. 8 929 971-95-44 Наш адрес г. Электросталь ул. Пушкина 23 […]</p>
                <p className='card_data'>август 25.2022</p>
            </div>

            <div className='new_card'>
                <img src = {logo2} alt=''/>
                <p className='card_link'>ФУТБОЛЬНАЯ СПОРТИВНАЯ ШКОЛА «ВОСТОК-ЭЛЕКТРОСТАЛЬ» ПРОВОДИТ НАБОР МАЛЬЧИКОВ И ДЕВОЧЕК В КОМАНДУ 2016 ГОДА РОЖДЕНИЯ.</p>
                <p className='card_text'>Футбольная спортивная школа «ВОСТОК-Электросталь» проводит набор мальчиков и девочек в команду 2016 года рождения. Набор состоится 8, 15, 21, 28 августа 2021 г. Время тренировок 10.00 ч. на футбольном поле «ВОСТОК», ул. Пушкина 23А (возле МОУ СОШ № 11) Получить информацию о поступлении и задать актуальные вопросы Вы можете тренеру команды 2016 г.р. Гайдай Константин Викторович тел: 8-926-829-48-49</p>
                <p className='card_data'>август 25.2022</p>
            </div>

        </div>

    </div>
  )
}

export default News