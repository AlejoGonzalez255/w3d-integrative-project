import "./Login.css";
import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import LogoNameSlogan from "../../components/LogoNameSlogan/LogoNameSlogan";

const Login = () => {
  const {loginGoogleWithPopUp, observeAuthState, loading } =
    useAuthStore();


  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  if (loading) {
    return;
  }

  return (
    <div className="container-login">
      {loading ? (
        <p className="loading-text">Cargando...</p>
      ) : (
        <>
        <LogoNameSlogan className={"login-image"}/>
          <button className="button-login" onClick={handleLogin}>
            Iniciar sesión
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
