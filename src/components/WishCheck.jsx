import { Box, Typography } from "@mui/material";

const WishCheck = (props) => {
  return (
    <Box position="relative">
      {props?.games && props.games?.Etiqueta !== "None" && (
        <Typography
          variant="span"
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "50px",
            height: "23px",
            borderRadius: "26px",
            background: "hsla(0,0%,100%,.64)",
            backdropFilter: "blur(2px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#0c1d27",
          }}
        >
          {props.games.Etiqueta}
        </Typography>
      )}
      {props.children}
    </Box>
  );
};
export default WishCheck;
