/* eslint-disable react/prop-types */
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  Button,
  CardActions,
  Box,
  // Skeleton
} from "@mui/material";
import WishCheck from "./WishCheck";
import { getUri } from "../helper/common";
import { useLoadingPageChangeValue } from "../context/LoadingPageContext";
//import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";

const CardGame = (props) => {
  const theme = useTheme();
  const { setOpenLoading } = useLoadingPageChangeValue();
  //const [loading, setLoading] = useState(true);

  const redirectUrl = (uri) => {
    setOpenLoading(true);

    setTimeout(() => {
      window.location.href = uri;
    }, 200);
  };
  /*useEffect(() => {
    const img = new Image();
    img.onload = () => setLoading(false);
    img.src = props.game?.FilePath;
  }, [props.game?.FilePath]);*/

  return (
    <>
      <Card sx={(theme) => theme.palette.cardPrimary} elevation={0}>
        <WishCheck games={props.game}>
          {
            /*loading ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          ) : (*/
            <CardMedia
              component="img"
              image={props.game?.FilePath}
              onClick={() => {
                //setOpenLoading(true);
                redirectUrl(getUri(props.game.URI));
              }}
              sx={
                {
                  // borderRadius: 5,
                  //height: "250px", //ELIMINAR EN PROD
                  //minWidth: "300px"
                }
              }
            />
            //)
          }
        </WishCheck>
        <CardContent sx={{ pt: 1, pb: 0, "&:last-child": { pb: 0 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              pt: 1,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" noWrap sx={{ textAlign: "center" }}>
              {props.game?.Name}
            </Typography>
            <Typography
              variant="p"
              color={"#ffffff69"}
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                height: "5em",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                wordWrap: "break-word",
                lineClamp: 5,
              }}
            >
              {props.game?.Description}
            </Typography>
          </Box>
          <Divider sx={{ mt: 2, mb: 1 }} />
        </CardContent>
        <CardActions sx={{ justifyContent: "center", mr: 3, ml: 3 }}>
          <Button
            variant="contained"
            color="buttonPrimary"
            sx={{ borderRadius: 5, mb: 2 }}
            size="large"
            fullWidth
            //to={getUri(props.game.URI)}
            onClick={() => {
              redirectUrl(getUri(props.game.URI));
            }}
          >
            <Typography variant="h5" color={theme.palette.colorButonGame.color}>
              Jugar
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardGame;
