import React, { ReactElement, useState, useEffect } from 'react';

// import { Tabs, TabPanel } from '@/components';

import { Header, Services, Summary } from '@/containers';
// import Tab from '@material-ui/core/Tab';

const Home: React.FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBottomPage, setIsBottomPage] = useState(false);
  // const [tab, setTab] = React.useState(0);

  /* const handleChange = (_: React.ChangeEvent<unknown>, newTab: number) => {
    setTab(newTab);
  }; */

  const mockUser = {
    name: 'Vinícius',
    email: 'vini@container.com.br',
    age: 34,
    country: 'Brazil',
    phone: '51987323421',
  };

  const mockServices = [
    {
      type: 'Barba',
      options: [
        {
          name: 'Completa',
          description: 'Descrição da barba completa',
          value: 25,
        },
        {
          name: 'Só acabamento',
          description: 'Descrição da Só acabamento',
          value: 15,
        },
      ],
    },
    {
      type: 'Cabelo',
      options: [
        {
          name: 'Corte completo',
          description: 'Descrição da Corte completo',
          value: 20,
        },
        {
          name: 'Corte simples',
          description: 'Descrição da Corte simples',
          value: 15,
        },
        {
          name: 'Só acabamento',
          description: 'Descrição da Só acabamento',
          value: 15,
        },
      ],
    },
    {
      type: 'Sobrancelha',
      options: [
        {
          name: 'Simples',
          description: 'Descrição da simples',
          value: 15,
        },
      ],
    },
  ];

  const handleScroll = () => {
    setIsBottomPage(
      window.innerHeight + window.scrollY >= document.body.offsetHeight,
    );
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="home">
      <Header
        isOpen={isOpen}
        user={mockUser}
        handleToggle={() => setIsOpen(!isOpen)}
      />
      <Services services={mockServices} />
      <Summary isBottomPage={isBottomPage} />
      {/*
        <Tabs
          value={tab}
          handleTabChanged={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab label="Recepção" />
          <Tab label="Elenco" />
        </Tabs>
        <TabPanel value={tab} index={0}>
          <br />
          <h1>Tab recepção</h1>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <br />
          <h1>Tab elenco</h1>
        </TabPanel>
        */}
    </div>
  );
};
export default Home;
