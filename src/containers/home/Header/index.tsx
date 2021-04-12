import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import brandLogo from '@/assets/media/primary.png';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import phoneMask from '@/masks/Phone';
import { HomeAvatar } from '@/components';
//import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
//import CloseIcon from '@material-ui/icons/Close';
//import IconButton from '@material-ui/core/IconButton';

import './styles.scss';

type User = {
  name: string;
  email: string;
  age: number;
  country: string;
  phone: string;
};

type Props = {
  isOpen: boolean;
  handleToggle: any;
  user: User;
};

const Header = ({ user }: /* isOpen, handleToggle */ Props) => {
  const UserInfos = () => {
    return (
      <div className="user-infos">
        <div className="list-item">
          <div>
            <p className="label">Nome</p>
          </div>
          <div>
            <p className="info">{user.name}</p>
          </div>
        </div>
        <div className="list-item">
          <div>
            <p className="label">Idade</p>
          </div>
          <div>
            <p className="info">{user.age} anos</p>
          </div>
        </div>
        <div className="list-item">
          <div>
            <p className="label">E-mail</p>
          </div>
          <div className="with-icon">
            <p>{user.email}</p>
            <div>
              <IconButton>
                <a href={`mailto:${user.email}`}>
                  <FileCopyOutlinedIcon color="primary" />
                </a>
              </IconButton>
            </div>
          </div>
        </div>
        <div className="list-item">
          <div>
            <p className="label">Telefone</p>
          </div>
          <div className="with-icon">
            <p>{phoneMask(user.phone)}</p>
            <div>
              <IconButton>
                <a href={`tel:${user.phone}`}>
                  <CallOutlinedIcon color="primary" />
                </a>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="header">
        <div className="inner">
          <div className="logo">
            <img src={brandLogo} alt="Logo da barbearia" />
            <p className="beta-badge">Beta</p>
          </div>
          <HomeAvatar user={user} />
          <UserInfos />
        </div>
      </div>

      {/*<div className="home">
        <div className="header">
          <div className="logo">
            <img src={barberLogo} alt="Logo da barbearia" />
          </div>
          <div className="title">
            <h1>{barberName}</h1>
            <h2>Bom te ver, {userName}!</h2>
          </div>
        </div>
        <div className="arrow">
          <IconButton onClick={handleToggle}>
            {isOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <KeyboardArrowDownIcon fontSize="large" />
            )}
          </IconButton>
        </div>
            </div>*/}
    </>
  );
};
export default Header;
