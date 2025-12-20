import EmployeeList from "../components/hr/EmployeeList";

function HRDashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-blue-600">HR Dashboard</h1>

      <EmployeeList />
    </div>
  );
}

export default HRDashboard;
