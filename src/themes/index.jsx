/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { esES } from "@mui/material/locale";
import componentsOverride from "./overrides";
import Typography from "./typography";
import Palette from "./palette";
import { useThemeChangeValue } from "../context/ModeThemeContext";
import { useTypeAppValue } from "../context/TypeAppContext";

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

const ThemeCustomization = ({ children }) => {
  const { mode } = useThemeChangeValue();
  const { typeApp } = useTypeAppValue();

  const theme = Palette(mode ? "light" : "dark", typeApp);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography('Aptos');

  const themeOptions = useMemo(
    () => ({
      /*breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },*/
      palette: theme.palette,
      typography: themeTypography,
    }),
    [themeTypography, theme]
  );

  const themes = createTheme(themeOptions, esES);
  themes.components = componentsOverride(themes);
  return (

    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>



  );
};

export default ThemeCustomization;
