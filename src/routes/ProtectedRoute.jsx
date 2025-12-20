import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRole }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  console.log("isLoggedIn:", isLoggedIn);
  console.log("role:", role);
  console.log("allowedRole:", allowedRole);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
