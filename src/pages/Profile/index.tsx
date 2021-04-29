import React, { ReactElement } from 'react';
import { Button } from '@/components';
import avatarProfile from '@/assets/avatars/avatarProfile.png';

import './styles.scss';

const Profile: React.FC = (): ReactElement => {
  const ProfileListItem = () => {
    return (
      <div className="profile-list-item">
        <div>
          <p className="label">Nome</p>
          <p>Luciano Aquino</p>
        </div>
        <Button variant="text" color="primary">
          Editar
        </Button>
      </div>
    );
  };

  return (
    <div className="profile">
      <div>
        <div className="profile-header">
          <p>Perfil</p>
        </div>
        <div className="avatar">
          <img src={avatarProfile} alt="Avatar do usuário" />
          <h1>Luciano</h1>
        </div>
      </div>
      <div className="infos-container">
        <ProfileListItem />
        <ProfileListItem />
        <ProfileListItem />
        <ProfileListItem />
        <ProfileListItem />
      </div>
    </div>
  );
};
export default Profile;
