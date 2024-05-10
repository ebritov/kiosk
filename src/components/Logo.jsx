import { Box } from "@mui/material";
import imageLogo from "../assets/images/logoCashlab.png";
import imageLogoCasino from "../assets/images/logoCasino.png";

import { useTypeAppValue } from "../context/TypeAppContext";

const Logo = (props) => {
  const { typeApp } = useTypeAppValue();
  return (
    // <img src={imageLogo} style={{ height: "80px" }} />
    <Box sx={{ position: "relative" }}>
      <Box height={props?.matchUpXL ? "110px" : "100px"} sx={(theme) => theme.palette.borderLogo}>
        <img src={typeApp == "kiosko" ? imageLogo : imageLogoCasino} style={{ height: typeApp == "kiosko" ? "50px" : "100px" }} />
      </Box>
    </Box>
  );
};

export default Logo;
