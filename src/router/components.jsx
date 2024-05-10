import { lazy } from "react";
import Loadable from "../components/Loadable";
export const AuthLogin = Loadable(lazy(() => import("../pages/Auth/Login")));
export const Home = Loadable(lazy(() => import("../pages/Home")));
