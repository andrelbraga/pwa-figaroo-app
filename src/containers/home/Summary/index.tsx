import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { Button } from '@/components';

import './styles.scss';

type Props = {
  isBottomPage: boolean;
  buttonText?: string;
  buttonVariant?: 'contained' | 'outlined' | 'text';
};

const Summary = ({ isBottomPage, buttonText, buttonVariant }: Props) => {
  const [expanded, setExpanded] = useState(false);

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
          <hr />
          <div className="item">
            <p>
              <b>Local</b>
            </p>
            <p>Container barbershop</p>
          </div>
          <div className="item">
            <p>
              <b>Endereço</b>
            </p>
            <p className="align-right">
              R. Clóvis Beviláqua, 378 - Harmonia, Canoas - RS, 92320-620
            </p>
          </div>

          <hr />
          <div className="action">
            <Button color="primary" variant={buttonVariant} fullWidth>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Summary.defaultProps = {
  buttonText: 'Escolher horário',
  buttonVariant: 'outlined',
};

export default Summary;
