import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import breakImage from '@/assets/media/breakImage.png';

import './styles.scss';

type TimeBoxProps = {
  initTime: string;
  status: string;
  duration: string;
  finishTime: string;
  toFinish?: boolean;
  isBreak?: boolean;
};

const TimeBox = ({
  initTime,
  status,
  duration,
  finishTime,
  toFinish,
  isBreak,
}: TimeBoxProps) => {
  return (
    <div
      className={`time-box ${toFinish ? 'to-finish' : ''} ${
        isBreak ? 'is-break' : ''
      }`}
    >
      <IconButton>
        <div className="infos">
          <p className="clock">{initTime}</p>
          <div className="availability">
            <p>{status}</p>
            <p className="duration">{duration}</p>
            {isBreak ? <img src={breakImage} alt="Hora do intervalo" /> : ''}
          </div>
          <p className="clock">{finishTime}</p>
        </div>
      </IconButton>
    </div>
  );
};

TimeBox.defaultProps = {
  toFinish: false,
  isBreak: false,
};

export default TimeBox;
