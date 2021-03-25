import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOutlined from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlined from '@material-ui/icons/VisibilityOffOutlined';
import IconButton from '@material-ui/core/IconButton';

import { Input } from '@/components';

import './styles.scss';

type Props = {
  label?: string;
  name?: string;
  inputRef?: any;
  error?: boolean;
  helperText?: string;
  isLoading?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function InputPassword({ isLoading = false, ...props }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const renderEndAdornment = (): React.ReactNode => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
        </IconButton>
      </InputAdornment>
    );
  };

  return (
    <Input
      type={isVisible ? 'text' : 'password'}
      isLoading={isLoading}
      InputProps={{
        endAdornment: renderEndAdornment(),
      }}
      {...props}
    />
  );
}

InputPassword.defaultProps = {
  label: '',
  inputRef: '',
  isLoading: false,
  name: '',
  error: false,
  helperText: '',
  onChange: () => null,
};
