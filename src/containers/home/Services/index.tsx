import React from 'react';

import { ServicesList } from '@/components';

import './styles.scss';

type ServiceOption = {
  name: string;
  description: string;
  value: number;
};

type Services = {
  type: string;
  options: Array<ServiceOption>;
};

type ServicesProps = {
  services: Array<Services>;
};

const Services = ({ services }: ServicesProps) => {
  return (
    <>
      <div className="services">
        <h2 className="title">Selecione os serviços:</h2>
        <ServicesList services={services} />
      </div>
    </>
  );
};
export default Services;
