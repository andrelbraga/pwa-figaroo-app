import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import Primary from '@/assets/media/primary.png';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

type Props = {
  children: React.ReactNode;
};

const GuestLayout = ({ children }: Props) => {
  const history = useHistory();

  const hideBackButton = () => {
    return window.location.pathname === '/login';
  };

  const navigateBack = () => {
    history.goBack();
  };

  return (
    <div className="guest">
      <div className="navigation">
        {!hideBackButton() && (
          <IconButton onClick={navigateBack}>
            <ArrowBackIcon />
          </IconButton>
        )}
      </div>
      <div className="logo">
        <img src={Primary} alt="Logo da Fígaroo!" />
        <p className="beta-badge">Beta</p>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
export default GuestLayout;
