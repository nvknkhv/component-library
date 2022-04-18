export const html = `<div class="calendar calendar_preview">
  <div class="calendar__title">April 2022</div>
  <div class="calendar__wrapper">
    <div class="calendar__inner">
      <span class="calendar__item calendar__item_day">Mon</span>
      <span class="calendar__item calendar__item_day">Tue</span>
      <span class="calendar__item calendar__item_day">Wed</span>
      <span class="calendar__item calendar__item_day">Thu</span>
      <span class="calendar__item calendar__item_day">Fri</span>
      <span class="calendar__item calendar__item_day">Sat</span>
      <span class="calendar__item calendar__item_day">Sun</span>
      <span class="calendar__item calendar__item_first-day">1</span>
      <span class="calendar__item">2</span>
      <span class="calendar__item">3</span>
      <span class="calendar__item">4</span>
      <span class="calendar__item">5</span>
      <span class="calendar__item">6</span>
      <span class="calendar__item">7</span>
      <span class="calendar__item">8</span>
      <span class="calendar__item">9</span>
      <span class="calendar__item">10</span>
      <span class="calendar__item">11</span>
      <span class="calendar__item">12</span>
      <span class="calendar__item">13</span>
      <span class="calendar__item">14</span>
      <span class="calendar__item">15</span>
      <span class="calendar__item">16</span>
      <span class="calendar__item">17</span>
      <span class="calendar__item calendar__item_period-border">18</span>
      <span class="calendar__item calendar__item_period-inner">19</span>
      <span class="calendar__item calendar__item_period-inner">20</span>
      <span class="calendar__item calendar__item_period-inner">21</span>
      <span class="calendar__item calendar__item_period-border">22</span>
      <span class="calendar__item">23</span>
      <span class="calendar__item">24</span>
      <span class="calendar__item">25</span>
      <span class="calendar__item">26</span>
      <span class="calendar__item">27</span>
      <span class="calendar__item">28</span>
      <span class="calendar__item">29</span>
      <span class="calendar__item">30</span>
    </div>
  </div>
</div>`;

export const scss = `.calendar {
  border-radius: 8px;
  border: 1px solid var(--grey-3);
  padding: 28px 36px;
  width: 100%;
  padding: 0.5rem 1rem;

  &__title {
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    color: var(--grey-4);
    margin-bottom: 24px;
  }

  &__wrapper {
    padding-bottom: 100%; /*square*/
    position: relative;
  }

  &__inner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: grid;
    grid-template: repeat(7, 1fr) / repeat(7, 1fr);
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Source Sans Pro';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    color: var(--grey-4);

    &_day {
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      color: var(--grey-3);
      margin-bottom: 8px;
    }
  }

  &__item_first-day {
    grid-column: 5;
  }

  &__item_period-border {
    background-color: var(--secondary-dark);
    color: var(--white);
  }

  &__item_period-inner {
    background-color: var(--secondary);
    color: var(--white);
  }

  &_preview {
    width: 150px;
  }

  &_preview &__item {
    font-size: 12px;
  }

  &_preview &__item_day {
    font-size: 10px;
  }

  &_preview &__title {
    font-size: 14px;
    margin-bottom: 12px;
  }
}`;
