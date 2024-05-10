import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import NotFound from "../pages/NotFound";
import LayoutPrivate from "../layout/LayoutPrivate";
import { AuthLogin, Home } from "./components";


export const router = createBrowserRouter([
  {
    path: "",
    element: <LayoutRoot />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <AuthLogin />,
      },
      {
        element: <LayoutPrivate />,
        errorElement: (
          <LayoutPrivate>
            <NotFound />
          </LayoutPrivate>
        ),
        children: [
          {
            path: "home",
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
