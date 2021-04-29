import React, { ReactElement } from 'react';

type TabPanelProps = {
  children: React.ReactNode;
  index: any;
  value: any;
  className: string;
};

const TabPanel = ({
  children,
  value,
  index,
  ...props
}: TabPanelProps): ReactElement => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...props}
    >
      {value === index && children}
    </div>
  );
};
export default TabPanel;
