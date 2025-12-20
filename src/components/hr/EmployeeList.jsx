import employees from "../../data/employees.json";

function EmployeeList() {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Employee List</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Department</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="text-center">
                <td className="border px-4 py-2">{emp.name}</td>
                <td className="border px-4 py-2">{emp.email}</td>
                <td className="border px-4 py-2">{emp.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
