import React from 'react';
import {
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Input,
} from '@material-ui/core';

import './styles.scss';

type TInputProps = {
  endAdornment?: React.ReactNode;
};

type Props = {
  options: Array<any>;
  defaultValue: Array<any>;
  onChange: any;
  name: string;
  variant?: 'filled' | 'standard' | 'outlined';
  type?: 'text' | 'password' | 'email' | 'date';
  label?: string;
  error?: boolean;
  helperText?: string;
  mask?: (text: string) => string;
  placeholder?: string;
  InputProps?: TInputProps;
  InputLabelProps?: any;
  disabled?: boolean;
  autoCapitalize?: string;
  readOnly?: boolean;
  isLoading?: boolean;
};

export default function Multiselect({
  options,
  defaultValue,
  onChange,
  // InputProps = {},
  ...props
}: Props) {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <>
      <Select
        multiple
        displayEmpty
        value={defaultValue}
        input={<Input />}
        onChange={onChange}
        MenuProps={MenuProps}
        renderValue={(renderDefaultValue: any) => {
          if ((renderDefaultValue as Array<any>).length === 0) {
            return (
              <ListItemText
                primary="Especialidades"
                className="select-placeholder"
              />
            );
          }

          if (options.length > 0) {
            return renderDefaultValue
              .map((item: any) => {
                return options.find((opt: any) => opt.skillId === item).name;
              })
              .join(', ');
          }
        }}
      >
        <MenuItem disabled value="">
          <ListItemText primary="Especialidades" />
        </MenuItem>
        {options.map(option => (
          <MenuItem key={option.skillId} value={option.skillId}>
            <Checkbox
              checked={
                defaultValue.filter(defValue => {
                  return defValue === option.skillId;
                }).length > 0
              }
            />
            <ListItemText primary={option.name} />
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

Multiselect.defaultProps = {
  variant: 'filled',
  type: 'text',
  label: '',
  error: false,
  helperText: '',
  placeholder: '',
  InputProps: {},
  InputLabelProps: {},
  mask: (text: string) => text,
  disabled: false,
  autoCapitalize: 'none',
  readOnly: false,
  isLoading: false,
};
