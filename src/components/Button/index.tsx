import React from "react";
import MuiButton from "@material-ui/core/Button";

import "./styles.scss";

type Props = {
  children: React.ReactNode;
  color: "default" | "inherit" | "primary" | "secondary";
  onClick: () => void;
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean
};

export default function Button({
  children,
  variant = "contained",
  ...props
}: Props) {
  return (
      <MuiButton {...props} variant={variant}>
        {children}
      </MuiButton>
  );
}
