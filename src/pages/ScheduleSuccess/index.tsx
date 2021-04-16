import React, { ReactElement } from 'react';

import { Summary } from '@/containers';

import secondary from '@/assets/media/secondary.png';

import './styles.scss';

const ScheduleSuccess: React.FC = (): ReactElement => {
  return (
    <div className="schedule-success">
      <div className="logo">
        <img src={secondary} alt="Logo da Fígaroo!" />
        <p className="success-title">Fígaroo!</p>
      </div>
      <Summary isBottomPage buttonText="Concluir" buttonVariant="contained" />
    </div>
  );
};
export default ScheduleSuccess;
