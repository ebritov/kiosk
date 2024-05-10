import { Grid, Box } from "@mui/material";
const AuthWapper = (props) => {
  return (
    <Grid container component="main" sx={{ height: "100%", my: 12 }}>
      <Grid item xs={12} sm={12} md={12} elevation={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {props.children}
        </Box>
      </Grid>
    </Grid>
  );
};
export default AuthWapper;
