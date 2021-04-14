import React from 'react';

import { Button } from '@/components';

import './styles.scss';

type CalendarItem = {
  type?: string;
  number: number;
  title: string;
  active?: boolean;
  disabled?: boolean;
  onClick: (number: number) => void;
};

const CalendarListItem = ({
  type,
  number,
  title,
  active,
  disabled,
  onClick,
}: CalendarItem) => {
  const handleItemClicked = (): void => {
    onClick(number);
  };

  return (
    <div
      className={`calendar-list-item ${active ? 'active' : ''} ${
        disabled ? 'disabled' : ''
      }`}
    >
      <div className="day-item-wrapper">
        <p className="day-type">{type}</p>
        <Button color="primary" disabled={disabled} onClick={handleItemClicked}>
          <div className="day-wrapper">
            <p className="number">{number}</p>
            <p className="title">{title}</p>
            <div className={`ellipse ${disabled ? 'disabled' : ''}`} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default CalendarListItem;

CalendarListItem.defaultProps = {
  type: '',
  active: false,
  disabled: false,
};
