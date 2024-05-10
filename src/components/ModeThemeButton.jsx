import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import { useTheme } from "@mui/material/styles";
import { Fab, Box } from "@mui/material";
//import DarkModeIcon from "../components/DarkModeIcon";
//import LightModeIcon from "../components/LightModeIcon";
import { useThemeChangeValue } from "../context/ModeThemeContext";
import { setModeTheme } from "../helper/backend_helper";

const ModeThemeButton = () => {
    const { mode, setMode } = useThemeChangeValue();
    const theme = useTheme();

    return (
        <Box
            role="presentation">
            <Fab size="small" aria-label="change theme" sx={(theme) => theme.palette.iconTheme} onClick={() => { setMode(!mode); setModeTheme(!mode); }} >
                {theme.palette.mode == "dark" ? (
                    <LightModeRoundedIcon sx={{ fontSize: 30 }} />
                ) : (
                    <ModeNightRoundedIcon />

                )}
            </Fab>
        </Box>
    );
};

export default ModeThemeButton;
