import { Typography, Box } from "@mui/material";
import { useTypeAppValue } from "../context/TypeAppContext";
import logoCruz from "../assets/images/logoCruzRoja.png";

const Footer = (props) => {
  const { typeApp } = useTypeAppValue();

  return (
    <Box variant="div" sx={{ display: "inline-flex", width: "100%", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
      <Typography
        align="center"
        sx={{ color: "#fff", /*display: "inline-flex",*/ }}
        {...props}
      >
        {typeApp == "kiosko" ? "Cuando juegas en Cashlab eres parte de la labor humanitaria de " : "© 2024 Aladino"}
      </Typography>
      {typeApp == "kiosko" && <>
        <hr style={{
          backgroundColor: "#fff", height: "30px", width: 3,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 0,
          marginBottom: 0
        }} />
        <img src={logoCruz} style={{ height: "50px" }} />
      </>
      }
    </Box>
  );
};
export default Footer;
