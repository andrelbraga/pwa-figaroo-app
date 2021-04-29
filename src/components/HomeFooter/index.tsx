import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';

import Customer from '@/assets/icons/Customer';
import Category from '@/assets/icons/Category';

import './styles.scss';

const HomeFooter = () => {
  const [location] = useState(window.location.pathname);

  return (
    <>
      <div className="home-footer">
        <IconButton
          className={`icon-button ${location === '/home' ? 'active' : ''}`}
        >
          <Category />
        </IconButton>
        <IconButton
          className={`icon-button ${location === '/category' ? 'active' : ''}`}
        >
          <Customer />
        </IconButton>
      </div>
    </>
  );
};

export default HomeFooter;
