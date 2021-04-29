import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import avatarSample from '@/assets/avatars/avatarSample.png';
import smilingWithSunglasses from '@/assets/emojis/smiling-with-sunglasses.png';

import './styles.scss';

const ScheduleItem = () => {
  return (
    <div className="schedule-item">
      <div className="person">
        <div className="avatar">
          <img src={avatarSample} alt="avatar" />
          <p className="name">Luciano</p>
        </div>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="time">
        <p>Seg, 31 de Fev de 2021</p>
        <p>11:30h ~ 12:00h</p>
      </div>
      <div className="schedule-services">
        <div className="border" />
        <div className="summary-services-list">
          <div className="summary-services-list-item">
            <p className="service-name">
              <b>Barba</b> Completa
            </p>
            <p className="time">30 min</p>
          </div>
          <div className="summary-services-list-item">
            <p className="service-name">
              <b>Cabelo</b> Corte completo
            </p>
            <p className="time">30 min</p>
          </div>
        </div>
      </div>
      <div className="status">
        <div className="badge success">
          <img
            src={smilingWithSunglasses}
            alt="Emoji sorrindo com óculos de sol"
          />
          <p>Tudo certo!</p>
        </div>
        <p>
          <AccessTimeIcon /> Inicia em 2 horas
        </p>
      </div>
    </div>
  );
};
export default ScheduleItem;
