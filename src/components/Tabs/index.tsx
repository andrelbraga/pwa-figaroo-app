import React, { ReactElement } from 'react';
import MuiTabs from '@material-ui/core/Tabs';

import './styles.scss';

type Props = {
  value: number;
  handleTabChanged: any;
  children: React.ReactNode;
  variant?: 'fullWidth' | 'scrollable' | 'standard';
  centered?: boolean;
};

const Tabs = ({
  value,
  handleTabChanged,
  children,
  ...props
}: Props): ReactElement => {
  return (
    <div className="tabs">
      <MuiTabs
        className="tabs"
        value={value}
        onChange={handleTabChanged}
        {...props}
      >
        {children}
      </MuiTabs>
    </div>
  );
};
export default Tabs;

Tabs.defaultProps = {
  centered: false,
  variant: 'fullWidth',
};
