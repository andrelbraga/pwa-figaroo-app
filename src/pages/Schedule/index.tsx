import React, { ReactElement, useState, useEffect } from 'react';

import { HeaderSummary, ScheduleAvailabity, Summary } from '@/containers';

const Schedule: React.FC = (): ReactElement => {
  const [isBottomPage, setIsBottomPage] = useState(false);

  const mockUser = {
    name: 'Vinícius',
    email: 'vini@container.com.br',
    age: 34,
    country: 'Brazil',
    phone: '51987323421',
  };

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
    <div>
      <HeaderSummary user={mockUser} />
      <ScheduleAvailabity />
      <Summary
        isBottomPage={isBottomPage}
        buttonText="Confirmar agendamento"
        buttonVariant="contained"
      />
    </div>
  );
};
export default Schedule;
