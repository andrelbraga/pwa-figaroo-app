import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './styles.scss';

type NavigatorProps = {
  title: string;
  onClick: () => void;
};

const Navigator = ({ title, onClick }: NavigatorProps) => {
  return (
    <div className="navigator">
      <IconButton className="icon-button" onClick={onClick}>
        <ArrowBackIcon />
      </IconButton>
      <p>{title}</p>
    </div>
  );
};

Navigator.defaultProps = {};

export default Navigator;
