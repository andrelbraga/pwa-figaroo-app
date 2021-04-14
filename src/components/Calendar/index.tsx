import React, { useState } from 'react';

import { CalendarListItem } from '@/components';

import './styles.scss';

const Calendar = () => {
  const [days, setDays] = useState([
    {
      type: 'Hoje',
      number: 25,
      title: 'Qua',
    },
    {
      type: 'Amanhã',
      number: 26,
      title: 'Qui',
    },
    {
      type: '',
      number: 27,
      title: 'Sex',
      active: true,
    },
    {
      type: 'Feriado',
      number: 28,
      title: 'Sab',
      disabled: true,
    },
    {
      type: '',
      number: 30,
      title: 'Dom',
      disabled: true,
    },
    {
      type: '',
      number: 29,
      title: 'Seg',
    },
    {
      type: '',
      number: 1,
      title: 'Ter',
    },
  ]);

  const handleCalendarItemChanged = (dayNumber: number): void => {
    setDays(
      days.map((item: any) => {
        const newItem = item;
        if (dayNumber === item.number) {
          newItem.active = true;
        } else {
          newItem.active = false;
        }
        return newItem;
      }),
    );
  };

  return (
    <div className="calendar">
      {days.map(dayItem => (
        <CalendarListItem
          key={dayItem.number}
          onClick={handleCalendarItemChanged}
          type={dayItem.type}
          disabled={dayItem?.disabled}
          active={dayItem?.active}
          number={dayItem.number}
          title={dayItem.title}
        />
      ))}
    </div>
  );
};
export default Calendar;
