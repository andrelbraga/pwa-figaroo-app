import React from 'react';
import MuiButton from '@material-ui/core/Button';

import './styles.scss';

type Props = {
  children: React.ReactNode;
  color: 'default' | 'inherit' | 'primary' | 'secondary';
  onClick?: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const Button = ({ children, variant, ...props }: Props): React.ReactElement => {
  return (
    <MuiButton {...props} variant={variant}>
      {children}
    </MuiButton>
  );
};
export default Button;

Button.defaultProps = {
  variant: 'contained',
  onClick: () => null,
  type: 'button',
  disabled: false,
};
