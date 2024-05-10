import { createTheme } from "@mui/material/styles";
//import { presetPalettes } from "@ant-design/colors";
import { ThemeDark, ThemeLight, ThemeDarkCasino, ThemeLightCasino } from "./theme";

const Palette = (mode, type) => {
  /*const colors = presetPalettes;

  const greyPrimaryLight = [
    "#ffffff",
    "#fafafa",
    "#f5f5f5",
    "#f0f0f0",
    "#d9d9d9",
    "#bfbfbf",
    "#8c8c8c",
    "#595959",
    "#262626",
    "#141414",
    "#000000",
  ];
  const greyPrimaryDark = [
    "#1E1E1E",
    "#fafafa",
    "#f5f5f5",
    "#f0f0f0",
    "#d9d9d9",
    "#bfbfbf",
    "#8c8c8c",
    "#595959",
    "#fff",
    "#141414",
    "#fff",
  ];

  const greyAscentLight = ["#fafafa", "#bfbfbf", "#434343", "#1f1f1f"];
  const greyConstantLight = ["#fafafb", "#e6ebf1"];

  const greyAscentDark = ["#202124", "#bfbfbf", "#434343", "#1f1f1f"];
  const greyConstantDark = ["#fafafb", "#e6ebf1"];

  if (mode == "dark") 
    colors.grey = [...greyPrimaryDark, ...greyAscentDark, ...greyConstantDark];
   else 
    colors.grey = [...greyPrimaryLight,...greyAscentLight,...greyConstantLight];
  
*/
  //const paletteColor = mode == "dark" ? ThemeDark() : ThemeLight();
  const paletteColor = mode == "dark" ? (type == "kiosko" ? ThemeDark() : ThemeDarkCasino()) : (type == "kiosko" ? ThemeLight() : ThemeLightCasino());
  return createTheme({
    palette: {
      mode,
      ...paletteColor,
      /* 
       common: {
         black: "#000",
         white: "#fff",
       },
      text: {
         primary: paletteColor.grey[700],
         secondary: paletteColor.grey[500],
         disabled: paletteColor.grey[400],
       },
       action: {
         disabled: paletteColor.grey[300],
       },
       divider: paletteColor.grey[200],
       background: {
         paper: paletteColor.grey[0],
         default: paletteColor.grey.A50,
       },*/
    },
  });
};

export default Palette;
