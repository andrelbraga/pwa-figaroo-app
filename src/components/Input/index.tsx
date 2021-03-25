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
  mask?: (text: string) => string;
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
  mask = (text: string) => text,
  autoCapitalize = 'none',
  isLoading = false,
  onChange = () => null,
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

  const inputChanged = (event: any) => {
    const maskedEvent = event;
    maskedEvent.target.value = mask(event.target.value);

    onChange(maskedEvent);
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
        onChange: inputChanged,
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
  mask: (text: string) => text,
  inputRef: '',
  disabled: false,
  autoCapitalize: 'none',
  readOnly: false,
  isLoading: false,
};
