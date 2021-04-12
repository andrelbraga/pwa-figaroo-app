import React from 'react';

import { Button } from '@/components';

import './styles.scss';

const Calendar = () => {
  const CalendarListItem = () => {
    return (
      <div className="calendar-list-item">
        <div>
          <p className="day-type">Hoje</p>
          <Button color="primary">
            <div className="day-wrapper active">
              <p className="number">27</p>
              <p className="title">Sex</p>
              <div className="ellipse" />
            </div>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="calendar">
      <CalendarListItem />
      <CalendarListItem />
      <CalendarListItem />
      <CalendarListItem />
      <CalendarListItem />
      <CalendarListItem />
      <CalendarListItem />
    </div>
  );
};
export default Calendar;
