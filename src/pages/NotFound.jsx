import { Link } from "react-router-dom";
import imgError from "../assets/images/error.jpg";
import { Grid, Typography } from "@mui/material";
const NotFound = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 5 }}
    >
      <Grid item md={12}>
        <img src={imgError} />
      </Grid>
      <Grid item md={12} sx={{ textAlign: "center" }}>
        <Typography variant="h3">Ocurrio un error inesperado.</Typography>
        <Link to={"/home"}>Home</Link>
      </Grid>
    </Grid>
  );
};

export default NotFound;
