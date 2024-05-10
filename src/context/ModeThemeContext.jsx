
import { createContext, useContext, useEffect, useState } from "react";
import { getModeTheme } from "../helper/backend_helper";

const ModeThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export default function ModeThemeContexProvider({ children }) {
    const [mode, setMode] = useState(false);
    useEffect(() => {
        const terminal = getModeTheme();
        if (terminal !== "") setMode(terminal);
    }, []);

    return (
        <ModeThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ModeThemeContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeChangeValue = () => useContext(ModeThemeContext);

