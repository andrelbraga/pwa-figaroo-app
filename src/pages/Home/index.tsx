import React, { ReactElement } from 'react';
import Tab from '@material-ui/core/Tab';

import brandLogoWhite from '@/assets/media/brandLogoWhite.png';
import { Tabs, TabPanel, ScheduleItem, HomeFooter } from '@/components';

import './styles.scss';

const Home: React.FC = (): ReactElement => {
  const [tab, setTab] = React.useState(0);

  const handleChange = (_: React.ChangeEvent<unknown>, newTab: number) => {
    setTab(newTab);
  };
  return (
    <div className="home">
      <div className="logo">
        <img src={brandLogoWhite} alt="Logo da barbearia" />
        <p className="beta-badge">Beta</p>
      </div>
      <Tabs value={tab} centered handleTabChanged={handleChange}>
        <Tab label="Recepção" />
      </Tabs>
      <TabPanel className="home-tab-panel" value={tab} index={0}>
        <h1>Próximos atendimentos</h1>
        <ScheduleItem />
      </TabPanel>
      <HomeFooter />
    </div>
  );
};
export default Home;
