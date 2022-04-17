import React from 'react';

import './calendar.scss';

const Calendar = () => {
  return (
    <div className="calendar calendar_preview">
      <div className="calendar__title">April 2022</div>
      <div className="calendar__wrapper">
        <div className="calendar__inner">
          <span className="calendar__item calendar__item_day">Mon</span>
          <span className="calendar__item calendar__item_day">Tue</span>
          <span className="calendar__item calendar__item_day">Wed</span>
          <span className="calendar__item calendar__item_day">Thu</span>
          <span className="calendar__item calendar__item_day">Fri</span>
          <span className="calendar__item calendar__item_day">Sat</span>
          <span className="calendar__item calendar__item_day">Sun</span>
          <span className="calendar__item calendar__item_first-day">1</span>
          <span className="calendar__item">2</span>
          <span className="calendar__item">3</span>
          <span className="calendar__item">4</span>
          <span className="calendar__item">5</span>
          <span className="calendar__item">6</span>
          <span className="calendar__item">7</span>
          <span className="calendar__item">8</span>
          <span className="calendar__item">9</span>
          <span className="calendar__item">10</span>
          <span className="calendar__item">11</span>
          <span className="calendar__item">12</span>
          <span className="calendar__item">13</span>
          <span className="calendar__item">14</span>
          <span className="calendar__item">15</span>
          <span className="calendar__item">16</span>
          <span className="calendar__item">17</span>
          <span className="calendar__item calendar__item_period-border">
            18
          </span>
          <span className="calendar__item calendar__item_period-inner">19</span>
          <span className="calendar__item calendar__item_period-inner">20</span>
          <span className="calendar__item calendar__item_period-inner">21</span>
          <span className="calendar__item calendar__item_period-border">
            22
          </span>
          <span className="calendar__item">23</span>
          <span className="calendar__item">24</span>
          <span className="calendar__item">25</span>
          <span className="calendar__item">26</span>
          <span className="calendar__item">27</span>
          <span className="calendar__item">28</span>
          <span className="calendar__item">29</span>
          <span className="calendar__item">30</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
