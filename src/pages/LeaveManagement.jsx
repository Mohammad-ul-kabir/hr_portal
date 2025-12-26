import { useEffect, useState } from "react";

function LeaveManagement() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const storedLeaves = JSON.parse(localStorage.getItem("leaves")) || [];
    setLeaves(storedLeaves);
  }, []);

  const updateStatus = (id, status) => {
    const updated = leaves.map((leave) =>
      leave.id === id ? { ...leave, status } : leave
    );

    setLeaves(updated);
    localStorage.setItem("leaves", JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Leave Requests</h2>

      {leaves.length === 0 && <p>No leave requests</p>}

      {leaves.map((leave) => (
        <div key={leave.id} className="border p-4 mb-3 rounded">
          <p>
            <b>Email:</b> {leave.employeeEmail}
          </p>
          <p>
            <b>From:</b> {leave.fromDate}
          </p>
          <p>
            <b>To:</b> {leave.toDate}
          </p>
          <p>
            <b>Reason:</b> {leave.reason}
          </p>
          <p>
            <b>Status:</b> {leave.status}
          </p>

          {leave.status === "Pending" && (
            <div className="mt-2 space-x-2">
              <button
                onClick={() => updateStatus(leave.id, "Approved")}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Approve
              </button>

              <button
                onClick={() => updateStatus(leave.id, "Rejected")}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Reject
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LeaveManagement;
