
import { createContext, useContext, useEffect, useState } from "react";
import { getTypeAppConfig } from "../helper/backend_helper";

const TypeAppContext = createContext();

// eslint-disable-next-line react/prop-types
export default function TypeAppContexProvider({ children }) {
    const [typeApp, setTypeApp] = useState(false);
    useEffect(() => {
        const app = getTypeAppConfig();
        console.log("LLEGUE APP", app)
        if (app !== "") setTypeApp(app);
    }, []);

    return (
        <TypeAppContext.Provider value={{ typeApp, setTypeApp }}>
            {children}
        </TypeAppContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTypeAppValue = () => useContext(TypeAppContext);

