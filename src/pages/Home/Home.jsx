import "./Home.css";
import useAuthStore from "../../stores/use-auth-store";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserDAO from "../../daos/UserDao";
import LogoName from "../../components/LogoName/LogoName";
import { getDocs, query, where } from "firebase/firestore";


export default function Home() {
  const { user, logout } =
    useAuthStore();

  const navigate = useNavigate();

  useEffect( ()  => {
    const emailValidation = async () => {
      const queryEmail = query(UserDAO.collectionRef, where("email", "==", user.email));
      const email =  await getDocs(queryEmail);
    
    if (user && email.empty) {
      
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      UserDAO.createUser(newUser);
    }

  }
  emailValidation()
  }, [user]);
  
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
