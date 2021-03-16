import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import variables from "@/styles/_variables.module.scss";

export default createMuiTheme({
  palette: {
    primary: {
      main: variables.primary,
    },
    secondary: {
      main: variables.secondary
    }
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
});
