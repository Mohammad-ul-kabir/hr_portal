import { useParams } from "react-router-dom";
import employeesData from "../data/employees.json";

function EmployeeProfile() {
  const { id } = useParams();

  const employees =
    JSON.parse(localStorage.getItem("employees")) || employeesData;

  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return <p className="p-6">Employee not found</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center mt-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">
        Employee Profile
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
        <p>
          <strong>Name:</strong> {employee.name}
        </p>
        <p>
          <strong>Email:</strong> {employee.email}
        </p>
        <p>
          <strong>Department:</strong> {employee.department}
        </p>
      </div>
    </div>
  );
}

export default EmployeeProfile;
