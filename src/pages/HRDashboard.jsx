import { Link } from "react-router-dom";

function HRDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">HR Dashboard</h1>

      <div className="flex gap-4 mb-6">
        <Link
          to="/employees"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Manage Employees
        </Link>

        <Link
          to="/leave-management"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Leave Management
        </Link>
      </div>

      {/* existing employee list or other content */}
    </div>
  );
}

export default HRDashboard;
