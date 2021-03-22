import React from "react";
import { CircularProgress, InputAdornment, TextField } from "@material-ui/core";

import "./styles.scss";

type InputProps = {
  endAdornment?: React.ReactNode;
};

type Props = {
  variant?: "filled" | "standard" | "outlined";
  type?: "text" | "password";
  label?: string;
  name?: string;
  error?: boolean;
  helperText?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  InputProps?: InputProps;
  inputRef?: any;
  disabled?: boolean;
  readOnly?: boolean;
  isLoading?: boolean;
};

export default function Input({
  variant = "filled",
  type = "text",
  InputProps = {},
  isLoading = false,
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
        endAdornment: isLoading
          ? renderLoadingAdornment()
          : InputProps?.endAdornment,
      }}
      {...props}
    />
  );
}
