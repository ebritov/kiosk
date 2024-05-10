import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import ThemeCustomization from "./themes";
import ModeThemeContext from "./context/ModeThemeContext";
import TypeAppContext from "./context/TypeAppContext";

function App() {
  return (
    <TypeAppContext>
      <ModeThemeContext>
        <ThemeCustomization>
          <RouterProvider router={router} />
        </ThemeCustomization>
      </ModeThemeContext >
    </TypeAppContext>
  );
}

export default App;
