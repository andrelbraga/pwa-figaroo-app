import React from 'react';
import { CircularProgress, InputAdornment, TextField } from '@material-ui/core';

import './styles.scss';

type TInputProps = {
  endAdornment?: React.ReactNode;
};

type Props = {
  variant?: 'filled' | 'standard' | 'outlined';
  type?: 'text' | 'password' | 'email' | 'date';
  label?: string;
  name?: string;
  maxLength?: number;
  error?: boolean;
  helperText?: string;
  mask?: (text: string) => string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  InputProps?: TInputProps;
  InputLabelProps?: any;
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
  maxLength = 255,
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
      inputProps={{ maxLength }}
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
  InputLabelProps: {},
  mask: (text: string) => text,
  inputRef: '',
  disabled: false,
  maxLength: 255,
  autoCapitalize: 'none',
  readOnly: false,
  isLoading: false,
};
