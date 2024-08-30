import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login.jsx"; 
import World from "../pages/world/World.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Home from "../pages/Home/Home.jsx";
import PublicRoute from "./PublicRoute.jsx";


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
    path: "/world",
    element: (
        <ProtectedRoute>
            <World />
        </ProtectedRoute>
    ),
  },
]);