/* eslint-disable react/prop-types */
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import CategoryAllGames from "../../components/CategoryAllGames";
import { useTheme } from "@emotion/react";

const AllCategories = (props) => {
  const theme = useTheme();

  const [categories, setCategories] = useState();
  useEffect(() => {
    const getCategory = async () => {
      //const games = props.games?.filter((game) => !game.EsInicial);
      const categories = new Set(props.games?.map((game) => game.IdCategoria));
      setCategories(Array.from(categories));
    };
    getCategory();
  }, [props]);

  return (
    <>
      {categories?.map((category, index) => {
        const categoryDetail = props.games.filter(
          (objeto) => objeto.IdCategoria === category
        );


        return (
          <Box sx={{ pt: 3, pb: 3 }} id={`section-${category}`} key={index} data-category={category}>
            <Grid container rowSpacing={4} sx={{ pl: 3, }}>
              <Grid xs={12}>
                <Typography variant="h2" color={theme.palette.colorTitleBody.color}>{categoryDetail[0].Categoria}</Typography>
              </Grid>
            </Grid>

            <Grid container rowSpacing={4}>
              <Grid xs={12}>
                <CategoryAllGames games={categoryDetail} />
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </>
  );
};
export default AllCategories;
