import React, { ReactElement } from 'react';

import { HeaderSummary, ScheduleAvailabity } from '@/containers';

const Schedule: React.FC = (): ReactElement => {
  const mockUser = {
    name: 'Vinícius',
    email: 'vini@container.com.br',
    age: 34,
    country: 'Brazil',
    phone: '51987323421',
  };

  return (
    <div id="home">
      <HeaderSummary user={mockUser} />
      <ScheduleAvailabity />
    </div>
  );
};
export default Schedule;
