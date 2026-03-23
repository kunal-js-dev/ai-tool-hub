import { Navigate, Outlet } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute() {
  const { isLoggedIn, loading } = useApp();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}
