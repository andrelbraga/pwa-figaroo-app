import React from 'react';
import { CircularProgress, InputAdornment, TextField } from '@material-ui/core';

import './styles.scss';

type TInputProps = {
  endAdornment?: React.ReactNode;
};

type Props = {
  variant?: 'filled' | 'standard' | 'outlined';
  type?: 'text' | 'password' | 'email';
  label?: string;
  name?: string;
  error?: boolean;
  helperText?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  InputProps?: TInputProps;
  inputRef?: any;
  disabled?: boolean;
  autoCapitalize?: string;
  readOnly?: boolean;
  isLoading?: boolean;
};

export default function Input({
  variant = 'filled',
  type = 'text',
  autoCapitalize = 'none',
  isLoading = false,
  InputProps = {},
  ...props
}: Props) {
  const renderLoadingAdornment = () => {
    return (
      <InputAdornment position="end">
        <CircularProgress size={24} />
      </InputAdornment>
    );
  };

  return (
    <TextField
      variant={variant}
      type={type}
      InputProps={{
        ...InputProps,
        autoCapitalize,
        endAdornment: isLoading
          ? renderLoadingAdornment()
          : InputProps?.endAdornment,
      }}
      {...props}
    />
  );
}

Input.defaultProps = {
  variant: 'filled',
  type: 'text',
  label: '',
  name: '',
  error: false,
  helperText: '',
  onChange: null,
  placeholder: '',
  InputProps: {},
  inputRef: '',
  disabled: false,
  autoCapitalize: 'none',
  readOnly: false,
  isLoading: false,
};
