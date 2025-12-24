import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import AddEmployee from "./pages/AddEmployee";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EmployeeProfile from "./pages/EmployeeProfile";
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

        <Route
          path="/hr/employee/:id"
          element={
            <ProtectedRoute allowedRole="HR">
              <EmployeeProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hr/add-employee"
          element={
            <ProtectedRoute allowedRole="HR">
              <AddEmployee />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
