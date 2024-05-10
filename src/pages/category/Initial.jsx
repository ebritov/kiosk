/* eslint-disable react/prop-types */
import Grid from "@mui/material/Unstable_Grid2";
import CategoryInitial from "../../components/CategoryInitial";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Initial = (props) => {
  const theme = useTheme();

  return (

    <Box sx={{ p: 0 }} id="section-initial" data-category={0}>
      <Grid container rowSpacing={4} sx={{ pl: 3, pt: 0, pb: 1 }}>
        <Grid xs={12}>
          <Typography variant="h2" color={theme.palette.colorTitleBody.color}>Recomendado</Typography>
        </Grid>
      </Grid>

      <Grid container rowSpacing={4}>
        <Grid xs={12}>
          <CategoryInitial games={props.games
            ?.filter((item) => item.EsInicial)} />
        </Grid>
      </Grid>
    </Box>

  );
};
export default Initial;
