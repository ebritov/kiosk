import { Outlet } from "react-router-dom";
import ConfigAppContextProvider from "../context/ConfigAppContext";
import LoadingPageContext from "../context/LoadingPageContext";
const LayoutRoot = () => {
  return (

    <ConfigAppContextProvider>
      <LoadingPageContext>
        <Outlet />
      </LoadingPageContext>
    </ConfigAppContextProvider>
  );
};

export default LayoutRoot;
