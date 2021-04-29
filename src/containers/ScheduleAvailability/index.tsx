import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import { Calendar, TimeBox, ScheduleItem } from '@/components';

import './styles.scss';

const ScheduleAvailability = () => {
  const times = [
    {
      id: 0,
      initTime: '9:00',
      status: 'Disponível',
      duration: '30 min',
      finishTime: '9:30',
    },
    {
      id: 1,
      initTime: '9:30',
      status: 'Disponível',
      duration: '30 min',
      finishTime: '10:00',
    },
    {
      id: 2,
      initTime: '10:00',
      status: 'Disponível',
      duration: '30 min',
      finishTime: '10:30',
    },
    {
      id: 3,
      initTime: '10:30',
      status: 'Disponível',
      duration: '30 min',
      finishTime: '11:00',
    },
    {
      id: 4,
      initTime: '11:00',
      status: 'Disponível',
      duration: '30 min',
      finishTime: '11:30',
    },
    {
      id: 5,
      initTime: '11:30',
      status: 'Para finalizar',
      duration: '30 min',
      finishTime: '12:00',
      toFinish: true,
    },
    {
      id: 6,
      initTime: '12:00',
      status: 'Intervalo',
      duration: '2h',
      finishTime: '14:00',
      isBreak: true,
    },
    {
      id: 7,
      initTime: '14:00',
      status: 'Disponível',
      duration: '30 min',
      finishTime: '14:30',
    },
    {
      id: 8,
      initTime: '14:30',
      status: 'Para finalizar',
      duration: '30 min',
      finishTime: '15:00',
      toFinish: true,
    },
  ];

  return (
    <div className="schedule-availability">
      <Calendar />
      <h1>Escolha um horário:</h1>
      <div className="availability-counter">
        <AccessTimeIcon />
        <p>
          <b>5 disponíveis</b> nesse dia
        </p>
      </div>

      <ScheduleItem />

      {times.map(timeItem => (
        <>
          <TimeBox key={timeItem.id} {...timeItem} />
        </>
      ))}
    </div>
  );
};
export default ScheduleAvailability;
