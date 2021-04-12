import React from 'react';

import barberPhoto from '@/assets/avatars/barberPhoto.jpg';

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

const HomeAvatar = ({ user }: Props) => {
  return (
    <>
      <div className="home-avatar">
        <img src={barberPhoto} alt={`Foto do ${user.name}`} />
        <h1>{user.name}</h1>
      </div>
    </>
  );
};

export default HomeAvatar;
