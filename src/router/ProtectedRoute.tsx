import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  /** Rol requerido. Si se omite, basta con estar autenticada. */
  requiredRole?: string;
}

/**
 * Protege rutas privadas (issue client#11 / S4).
 * - Sin sesión → redirige a /login.
 * - Con sesión pero sin el rol requerido → redirige a /welcome (acceso denegado).
 *
 * La sesión se lee de sessionStorage, donde LoginForm guarda authToken y userRole.
 * La autorización real la impone el backend (guards de #2); esto es la capa de UX
 * para no mostrar el panel a quien no debe.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
}) => {
  const isAuthenticated =
    sessionStorage.getItem("isAuthenticated") === "true" &&
    !!sessionStorage.getItem("authToken");
  const userRole = sessionStorage.getItem("userRole");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/welcome" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
