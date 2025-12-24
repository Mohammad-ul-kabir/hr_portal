import { useState } from "react";
import { Link } from "react-router-dom";
import employeesData from "../../data/employees.json";

function EmployeeList() {
  const [employees] = useState(() => {
    return JSON.parse(localStorage.getItem("employees")) || employeesData;
  });

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Employee List</h2>
        <Link
          to="/hr/add-employee"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Employee
        </Link>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Department</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="text-center">
              <td className="border px-4 py-2">{emp.name}</td>
              <td className="border px-4 py-2">{emp.email}</td>
              <td className="border px-4 py-2">{emp.department}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/hr/employee/${emp.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
