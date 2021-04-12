import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ServicesListItem } from '@/components';

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

const ServicesList = ({ services }: ServicesProps) => {
  return (
    <>
      {services.map(service => {
        return (
          <div className="services-list" key={`services-${service.type}`}>
            <h3>{service.type}</h3>
            <RadioGroup aria-label={service.type} name={service.type}>
              {service.options.map(option => {
                return (
                  <FormControlLabel
                    key={option.name}
                    value={option.name}
                    control={<Radio color="primary" />}
                    label={<ServicesListItem service={option} />}
                  />
                );
              })}
            </RadioGroup>
          </div>
        );
      })}
    </>
  );
};
export default ServicesList;
