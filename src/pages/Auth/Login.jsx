import AuthWrapper from "./AuthWrapper";
import AuthLogin from "./AuthLogin";
//import { useEffect } from "react";
//import { getLoggedInTerminal } from "../../helper/backend_helper";
//import { useNavigate } from "react-router-dom";

const Login = () => {
  /*const navigate = useNavigate();

  useEffect(() => {
    const terminal = getLoggedInTerminal();
    if (terminal)
      navigate("/home");
  }, [navigate])*/
  return (
    <AuthWrapper>
      <AuthLogin />
    </AuthWrapper>
  );
};
export default Login;