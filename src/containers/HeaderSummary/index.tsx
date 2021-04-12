import React from 'react';
import Tab from '@material-ui/core/Tab';

import brandLogo from '@/assets/media/primary.png';
import barberPhoto from '@/assets/avatars/barberPhoto.jpg';

import { Button, Tabs } from '@/components';

import './styles.scss';

type User = {
  name: string;
  email: string;
  age: number;
  country: string;
  phone: string;
};

type Props = {
  user: User;
};

const HeaderSummary = ({ user }: Props) => {
  const [tab, setTab] = React.useState(0);

  const handleChange = (_: React.ChangeEvent<unknown>, newTab: number) => {
    setTab(newTab);
  };

  const SummaryAvatar = () => {
    return (
      <>
        <div className="summary-avatar">
          <div className="avatar-inner">
            <img src={barberPhoto} alt={`Foto do ${user.name}`} />
            <div>
              <p>Vendo a agenda do</p>
              <p className="username">{user.name}</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const SummaryServices = () => {
    return (
      <>
        <div className="summary-services">
          <div className="services">
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
          <div className="add-service">
            <Button variant="text" color="primary">
              Adicionar serviço
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="header schedule">
        <div className="inner">
          <div className="logo">
            <img src={brandLogo} alt="Logo da barbearia" />
            <p className="beta-badge">Beta</p>
          </div>
        </div>
        <SummaryAvatar />
        <SummaryServices />

        <Tabs value={tab} centered handleTabChanged={handleChange}>
          <Tab label="Próximos 7 dias" />
          <Tab label="Próximos 30 dias" disabled />
        </Tabs>
      </div>
    </>
  );
};
export default HeaderSummary;
