import { Toolbar, Box, useMediaQuery } from "@mui/material";
import Balance from "../../../components/Balance";
import Terminal from "../../../components/Terminal";
import Logo from "../../../components/Logo";
import Grid from "@mui/material/Unstable_Grid2";
import MuiAppBar from "@mui/material/AppBar";
import { useTheme } from "@emotion/react";
const Header = () => {
  const theme = useTheme();
  const matchUpXL = useMediaQuery(theme.breakpoints.up("xl"));
  const height = matchUpXL ? 90 : 75;
  return (

    <MuiAppBar
      position="fixed"
      height={height}
      sx={
        (theme) => theme.palette.MuiAppBar
      }
    >
      <Toolbar sx={{ height: height }}>
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={2} justifyContent={"center"} alignItems={"center"} columns={matchUpXL ? 24 : 26}>
            <Grid xs={8} lg={8} md={8} xl={8}>
              <Terminal />
            </Grid>
            <Grid xs={9} lg={10} md={10} xl={8}>
              <Logo matchUpXL={matchUpXL} />
            </Grid>
            <Grid xs={8} lg={8} md={8} xl={8}>
              <Balance />
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </MuiAppBar >

  );
};
export default Header;
