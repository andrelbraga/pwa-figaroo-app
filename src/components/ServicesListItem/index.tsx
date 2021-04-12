import React from 'react';
import currencyFormatter from '@/utils/currencyFormatter';

import './styles.scss';

type ServiceOption = {
  name: string;
  description: string;
  value: number;
};

type ServicesListItemProps = {
  service: ServiceOption;
};

const ServicesListItem = ({ service }: ServicesListItemProps) => {
  return (
    <div className="services-list-item">
      <div className="name-row">
        <p>{service.name}</p>
        <p>{currencyFormatter(service.value)}</p>
      </div>
      <div className="description">
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServicesListItem;
