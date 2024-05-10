import { createContext, useContext, useState } from "react";

const LoadingPageContext = createContext();

// eslint-disable-next-line react/prop-types
export default function ModeThemeContexProvider({ children }) {
    const [openLoading, setOpenLoading] = useState(true);
    return (
        <LoadingPageContext.Provider value={{ openLoading, setOpenLoading }}>
            {children}
        </LoadingPageContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLoadingPageChangeValue = () => useContext(LoadingPageContext);

