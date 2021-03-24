import React from 'react';
import InputMask from 'react-input-mask';

type Props = {
  disabled?: boolean;
  value: string;
  readOnly?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  children: React.ReactNode;
};

const Phone = ({ onChange, children, ...props }: Props) => {
  return (
    <InputMask
      mask="(99) 9-9999-9999"
      onChange={onChange}
      maskChar=""
      {...props}
    >
      {children}
    </InputMask>
  );
};
export default Phone;

Phone.defaultProps = {
  disabled: false,
  readOnly: false,
};
