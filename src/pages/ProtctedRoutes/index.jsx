import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../provider/UserContex";
import { TechProvider } from "../../provider/TechContext";

export const ProtectedRoutes = () => {

    const { user } = useContext(UserContext)

    return user ? <TechProvider> <Outlet /> </TechProvider> : <Navigate to={"/"}/>
}