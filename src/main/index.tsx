import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

import theme from "@/styles/theme/theme";

import "./styles.scss";
import Primary from "@/assets/media/primary.png";

import { Button } from "@/components";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button color="secondary">Confirmar</Button>
        <br/>
        <Button color="secondary" disabled>Confirmar</Button>
        <hr/>
        <Button color="secondary" variant="outlined">Confirmar</Button>
        <br/>
        <Button color="secondary" variant="outlined" disabled>Confirmar</Button>
        <hr/>
        <Button color="secondary" variant="text">Confirmar</Button>
        <br/>
        <Button color="secondary" variant="text" disabled>Confirmar</Button>
      </div>
    </ThemeProvider>
  );
};
export default App;
