/* eslint-disable react/prop-types */
import Grid from "@mui/material/Unstable_Grid2";
import CategoryAllGames from "../../components/CategoryAllGames";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const AllGames = (props) => {
  const theme = useTheme();

  return (
    <Box sx={{ pt: 3, pb: 3 }} id="section-99999" data-category={99999}>
      <Grid container rowSpacing={4} sx={{ pl: 3, }}>
        <Grid xs={12} >
          <Typography variant="h2" color={theme.palette.colorTitleBody.color}>Todos</Typography>
        </Grid>
      </Grid>

      <Grid container rowSpacing={4} >
        <Grid xs={12} >
          <CategoryAllGames games={props.games} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default AllGames;


