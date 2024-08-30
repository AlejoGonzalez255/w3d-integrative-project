import "./Home.css";
import useAuthStore from "../../stores/use-auth-store";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LogoName from "../../components/LogoName/LogoName";


export default function Home() {
  const { user, logout } =
    useAuthStore();

  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const handleNavigateToWorld = () => {
    navigate("/world"); 
  };

  return (
    <section className="container-home">
      <LogoName className={"home-image"}/>
      <p className="welcome-text">Bienvenido, {user.displayName}</p>
      <div className="buttons-container">
        <button className="button-seguir" onClick={handleNavigateToWorld}>
          Seguir
        </button>
        <button className="button-logout" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </section>
  );
}
