import "./Login.css";
import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDao";
import { useNavigate } from "react-router-dom";
import LogoNameSlogan from "../../components/LogoNameSlogan/LogoNameSlogan";

const Login = () => {
  const { user, loginGoogleWithPopUp, observeAuthState, loading } =
    useAuthStore();

  console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  useEffect(() => {
    if (user) {
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      UserDAO.createUser(newUser);
    }
  }, [user, navigate]);

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
