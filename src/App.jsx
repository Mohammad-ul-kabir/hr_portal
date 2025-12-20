import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Home from "./pages/Home";
import HRDashboard from "./pages/HRDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* HR only */}
        <Route
          path="/hr"
          element={
            <ProtectedRoute allowedRole="HR">
              <HRDashboard />
            </ProtectedRoute>
          }
        />

        {/* Employee only */}
        <Route
          path="/employee"
          element={
            <ProtectedRoute allowedRole="Employee">
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
