import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "@/styles/theme/theme";

import "./styles.scss";
import Logo from "@/assets/media/manifest-icon-512.png";

import { Button } from "@/components";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button color="primary">Confirmar</Button>
      </div>
      {/* <div>
        <img src={Logo} />
      </div> */}
    </ThemeProvider>
  );
};
export default App;
