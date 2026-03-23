import { Navigate, Outlet } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";

export default function ProtectedRoute() {
  const { isLoggedIn } = useApp();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}
