import { useState } from "react";
import { useNavigate } from "react-router-dom";
import employeesData from "../data/employees.json";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const storedEmployees =
      JSON.parse(localStorage.getItem("employees")) || employeesData;

    const newEmployee = {
      id: Date.now(),
      name,
      email,
      department,
    };

    localStorage.setItem(
      "employees",
      JSON.stringify([...storedEmployees, newEmployee])
    );

    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Employee Registration
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Department"
            className="w-full border p-2 rounded"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
