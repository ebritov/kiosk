import AllGames from "./category/AllGames";
import Initial from "./category/Initial";
import { Box, Tabs, Tab, AppBar, Toolbar, useMediaQuery } from "@mui/material";
import { getAllGames } from "../helper/backend_helper";
import { useEffect, useState } from "react";
//import { useLoadingPageChangeValue } from "../context/LoadingPageContext";
import AllCategories from "./category/AllCategories";
import { HashLink } from "react-router-hash-link";
import { useTheme } from "@emotion/react";
import { useTypeAppValue } from "../context/TypeAppContext";


const Home = () => {
  const [games, setGames] = useState();
  //const { setOpenLoading } = useLoadingPageChangeValue();
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState();
  const theme = useTheme();
  const matchUpXL = useMediaQuery(theme.breakpoints.up("xl"));
  const [scrollEventEnabled, setScrollEventEnabled] = useState(true); // State to control scroll event
  const { typeApp } = useTypeAppValue();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setScrollEventEnabled(false); // Disable scroll event when tab is clicked

    // console.log(newValue)
  };
  useEffect(() => {
    const getAllGame = async () => {
      try {
        const baseURL = typeApp == "kiosko" ? import.meta.env.VITE_APIURLE : import.meta.env.VITE_APIURLH;

        const result = await getAllGames(baseURL);
        if (!result) throw "NO EXISTEN JUEGOS";

        setGames(result.data);
        //setOpenLoading(false);

        const categories = new Set(result.data?.map((game) => game.IdCategoria));
        setCategories(Array.from(categories));
      } catch (err) {
        console.error(err);
        //setOpenLoading(true);
        getAllGame();
      }
    };
    getAllGame();
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (scrollEventEnabled) { // Check if scroll event should be handled
        const sections = document.querySelectorAll("div[id^='section-']");
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            scrollPosition >= sectionTop - 200 &&
            scrollPosition < sectionTop + sectionHeight - 200
          ) {
            const category = section.getAttribute("data-category");
            setValue(parseInt(category) ?? 0);
          }
        });
      }
    };
    const changeStateScroll = () => { setScrollEventEnabled(true); };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener('wheel', changeStateScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", changeStateScroll);
    };
  }, [categories, scrollEventEnabled]);

  /**
     <>
  
        <Box sx={{ display: "grid", gap: 15, marginTop: 8 }}>
          <Initial games={games} />
          <AllCategories games={games} />
          <AllGames games={games} />
        </Box>
      </>

      
      <Initial games={games} value={value} />
      <AllCategories games={games} value={value} />
      <AllGames games={games} value={value} />
   */

  return (
    <>

      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          background: theme.palette.backgroundSubHeader.background,
          height: 80,
          marginTop: matchUpXL ? "90px" : "75px",
          zIndex: 10
        }}
      >
        <Tabs value={value} onChange={handleChange}
          //scrollButtons
          variant="scrollable"
          textColor="secondary"
          indicatorColor="secondary"
          allowScrollButtonsMobile sx={{ mt: 3, background: theme.palette.backgroundSubHeader.background, "&  .MuiTabs-flexContainer": { justifyContent: "center", } }}>

          <Tab label="Recomendado"
            value={0} sx={{ fontSize: "1.3rem", color: "#fff" }} to="#back-to-top-anchor" component={HashLink} smooth />
          {categories?.map((category, index) => {
            const categoryDetail = games.find(
              (objeto) => objeto.IdCategoria === category
            );
            return (
              <Tab label={categoryDetail.Categoria} key={index} value={category} sx={{ fontSize: "1.3rem", color: "#fff" }} to={`#section-${category}`} component={HashLink} scroll={(el) => {
                const yOffset = -150; // Adjust the offset to your liking
                const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });// behavior: 'smooth'
              }} />
            );
          }
          )}
          <Tab label="Todos" value={99999} sx={{ fontSize: "1.3rem", color: "#fff" }} to="#section-99999" component={HashLink} smooth />
        </Tabs>
      </AppBar>

      <Box sx={{ width: '100%', paddingTop: matchUpXL ? "190px" : "160px" }}>

        <Initial games={games} />
        <AllCategories games={games} />
        <AllGames games={games} />
        <Toolbar sx={{ minHeight: "50px !important;", m: 0, p: 0 }} />
      </Box>


    </>
  );
};
export default Home;
