import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";

import "./styles.scss";

type Props = {
  children: React.ReactNode;
  color: "default" | "inherit" | "primary" | "secondary";
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean
};

export default function Button({
  children,
  variant = "contained",
  ...props
}: Props) {
  return (
    <StylesProvider injectFirst>
      <MuiButton {...props} variant={variant}>
        {children}
      </MuiButton>
    </StylesProvider>
  );
}
