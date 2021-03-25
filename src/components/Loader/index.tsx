import React from 'react';
import { CircularProgress } from '@material-ui/core';

import './styles.scss';

type Props = {
  text?: string;
};

export default function Loader({ text }: Props) {
  return (
    <div className="page-loader">
      <div className="inner">
        <CircularProgress size={44} />
        <h1>{text}</h1>
      </div>
    </div>
  );
}

Loader.defaultProps = {
  text: 'Preparando experiência',
};
