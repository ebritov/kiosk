import { Typography, Grid, Avatar } from "@mui/material";
import { useConfigValue } from "../context/ConfigAppContext";
const Terminal = () => {
  const { terminalConfig } = useConfigValue();
  return (
    <Grid container columns={12}>
      <Grid xs={9} item>
        <Grid container sx={(theme) => theme.palette.containerRom}>
          <Grid xs={1} item >
            <Avatar sx={(theme) => theme.palette.avatarHeaderRoom}>{terminalConfig.TerminalId}</Avatar>
          </Grid>
          <Grid item xs={11} sx={{ pl: 5, pr: 1, alignItems: "center", display: "flex" }} >
            <Typography noWrap sx={{ fontSize: "1.9rem", color: "#E6D676" }}>{terminalConfig.Room}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Terminal;
/**
 * 
 *   <Stack spacing={2} direction="row" alignItems="center" sx={{
      border: "3px solid #0c1d27",
      borderRadius: "80px",
      height: "60px",
      width: "100%",

    }}>
      <Stack>
        <Avatar sx={{ height: "60px", width: "60px", backgroundColor: "#e3d47e", fontSize: "2rem", color: "#0c1d27" }}>{terminalConfig.TerminalId}</Avatar>
      </Stack>
      <Stack sx={{ minWidth: 0 }}>
        <Typography noWrap sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "#e3d47e" }}>{terminalConfig.Room}</Typography>
      </Stack>
    </Stack>
 */