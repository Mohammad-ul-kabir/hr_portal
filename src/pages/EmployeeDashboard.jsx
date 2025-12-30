import { Link } from "react-router-dom";

function EmployeeDashboard() {
  const email = localStorage.getItem("email");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Welcome, {email}</h1>

      <div className="space-x-4">
        <Link
          to="/apply-leave"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Apply Leave
        </Link>

        <Link
          to="/my-leaves"
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          My Leaves
        </Link>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
