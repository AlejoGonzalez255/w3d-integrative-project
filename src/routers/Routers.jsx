import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login.jsx"; 
import Lobby from "../pages/Lobby/Lobby.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Home from "../pages/Home/Home.jsx";
import PublicRoute from "./PublicRoute.jsx";
import PerdidaDiversidad from "../pages/PerdidaDiversidad/PerdidaDiversidad.jsx";
import Deforestacion from "../pages/Deforestacion/Deforestacion.jsx";
import ErosionSuelo from "../pages/ErosionSuelo/ErosionSuelo.jsx";


export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
        <ProtectedRoute>
            <Home />
        </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      
        <PublicRoute>
            <Login />
        </PublicRoute>
    ),
  },
  {
    path: "/Lobby",
    element: (
        <ProtectedRoute>
            <Lobby/>
        </ProtectedRoute>
    ),
  },
  {
    path: "/PerdidaDiversidad",
    element: (
        <ProtectedRoute>
            <PerdidaDiversidad />
        </ProtectedRoute>
    ),
  },
  {
    path: "/ErosionSuelo",
    element: (
        <ProtectedRoute>
            <ErosionSuelo />
        </ProtectedRoute>
    ),
  },
  {
    path: "/Deforestacion",
    element: (
        <ProtectedRoute>
            <Deforestacion />
        </ProtectedRoute>
    ),
  },
]);