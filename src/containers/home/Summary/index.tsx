import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { Button } from '@/components';

import './styles.scss';

type Props = {
  isBottomPage: boolean;
};

const Services = ({ isBottomPage }: Props) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    //setExpanded(isBottomPage);
  }, [isBottomPage]);

  return (
    <>
      <div className={`summary ${expanded ? 'expanded' : ''}`}>
        <div className="holder">
          {!isBottomPage && (
            <IconButton onClick={() => setExpanded(!expanded)}>
              <KeyboardArrowUpIcon />
            </IconButton>
          )}
          <h2>Resumo</h2>
        </div>
        <div className="content">
          <div className="item">
            <p>
              <b>Barba</b> Completa
            </p>
            <p>R$ -</p>
          </div>
          <div className="item">
            <p>
              <b>Cabelo</b> Corte completo
            </p>
            <p>R$ -</p>
          </div>
          <div className="total">
            <p>
              <b>Total</b>
            </p>
            <p>R$ -</p>
          </div>
          <hr />
          <div className="infos">
            <p>Profissional</p>
            <p>-</p>
          </div>
          <div className="infos">
            <p>Data</p>
            <p>-</p>
          </div>
          <div className="infos">
            <p>Horário</p>
            <p>-</p>
          </div>

          <div className="action">
            <Button color="primary" variant="outlined" fullWidth>
              Escolher horário
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
