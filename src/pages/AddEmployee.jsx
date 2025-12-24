import { useState } from "react";
import { useNavigate } from "react-router-dom";
import employeesData from "../data/employees.json";

function AddEmployee() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
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

    navigate("/hr");
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">
        Add New Employee
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
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
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
