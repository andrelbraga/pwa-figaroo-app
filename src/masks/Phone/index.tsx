import React, {useState} from "react";
import InputMask from 'react-input-mask';

type Props = {
  value: string,
  disabled?: boolean,
  readOnly?: boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  children: Function
}

const Phone = ({value, onChange, children, ...props}: Props) => {
  return (
    <InputMask mask="(99) 9-9999-9999" value={value} onChange={onChange} maskChar={""} {...props}>
      {children}
    </InputMask>
  );
};
export default Phone;
