import { createContext, useContext, useState, useEffect } from "react";
import { getLoggedInTerminal } from "../helper/backend_helper";

const ConfigAppContext = createContext();

export default function ConfigAppContextProvider({ children }) {
  const [terminalConfig, setTerminalConfig] = useState(false);
  useEffect(() => {
    const terminal = getLoggedInTerminal();
    if (terminal !== "") setTerminalConfig(terminal);

  }, []);
  return (
    <ConfigAppContext.Provider value={{ terminalConfig, setTerminalConfig }}>
      {children}
    </ConfigAppContext.Provider>
  );
}

export const useConfigValue = () => useContext(ConfigAppContext);

