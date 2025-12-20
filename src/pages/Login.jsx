import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // NEW
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role");
      return;
    }

    // save login info
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("email", email);
    localStorage.setItem("role", role);

    // redirect based on role
    if (role === "HR") {
      navigate("/hr");
    } else {
      navigate("/employee");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Login
        </h2>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Select Role</label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="HR"
                  checked={role === "HR"}
                  onChange={(e) => setRole(e.target.value)}
                />
                HR
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="Employee"
                  checked={role === "Employee"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Employee
              </label>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <Link
          to="/"
          className="text-blue-600 hover:underline mt-6 block text-center"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Login;
