/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import Header from "./MainLayout/Header/Header";
import { Box, Grid, Container, Backdrop, Toolbar } from "@mui/material";
import Footer from "../components/Footer";
import { useConfigValue } from "../context/ConfigAppContext";
import { useLoadingPageChangeValue } from "../context/LoadingPageContext";
//import ScrollButton from "../components/Scroll/ScrollButton";
//import ScrollTop from "../components/Scroll/ScrollTop";
import imageLogo from "../assets/images/logoCashlab.png";
import imageLogoCasino from "../assets/images/logoCasino.png";

import { useTypeAppValue } from "../context/TypeAppContext";

const LayoutPrivate = (props) => {
  const { terminalConfig } = useConfigValue();
  const { openLoading } = useLoadingPageChangeValue();
  const { typeApp } = useTypeAppValue();

  if (terminalConfig === false) return;



  return terminalConfig ? (
    <>
      <Backdrop
        sx={{ backgroundColor: typeApp == "kiosko" ? "#0c1d27" : "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoading}

      >
        <Box variant="div" className="loader">
          <img src={typeApp == "kiosko" ? imageLogo : imageLogoCasino} style={{ height: typeApp == "kiosko" ? "40px" : "90px" }} />
        </Box>
      </Backdrop>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          background: (theme) => theme.palette.backgroundMain,
          //minHeight: "100vh",
          //flexDirection: "column",
          ...(openLoading ? { display: "none" } : {}),
        }}
      >
        <Header />
        <Toolbar id="back-to-top-anchor" sx={{ minHeight: "20px !important;" }} />
        <Container sx={{ pl: "0 !important", pr: "0 !important" }} maxWidth={false}>{props.children ?? <Outlet />}</Container>
        <Grid item xs={12} sx={(theme) => theme.palette.footer} >
          <Footer />
        </Grid>
      </Box >
      {/*<ScrollTop {...props} >
        <ScrollButton />
      </ScrollTop>*/}
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default LayoutPrivate;
