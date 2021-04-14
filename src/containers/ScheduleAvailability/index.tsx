import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import { Calendar, TimeBox } from '@/components';

import './styles.scss';

const ScheduleAvailability = () => {
  const times = [
    {
      initTime: '9:00',
      status: 'Disponível',
      duration: '30 min',
      finishTime: '9:30',
    },
    {
      initTime: '9:30',
      status: 'Disponível',
      duration: '30 min',
      finishTime: '10:00',
    },
    {
      initTime: '10:00',
      status: 'Disponível',
      duration: '30 min',
      finishTime: '10:30',
    },
    {
      initTime: '10:30',
      status: 'Disponível',
      duration: '30 min',
      finishTime: '11:00',
    },
    {
      initTime: '11:00',
      status: 'Disponível',
      duration: '30 min',
      finishTime: '11:30',
    },
    {
      initTime: '11:30',
      status: 'Para finalizar',
      duration: '30 min',
      finishTime: '12:00',
      toFinish: true,
    },
    {
      initTime: '12:00',
      status: 'Intervalo',
      duration: '2h',
      finishTime: '14:00',
      isBreak: true,
    },
    {
      initTime: '14:00',
      status: 'Disponível',
      duration: '30 min',
      finishTime: '14:30',
    },
    {
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
      {times.map(timeItem => (
        <TimeBox {...timeItem} />
      ))}
    </div>
  );
};
export default ScheduleAvailability;
