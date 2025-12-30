import { useState } from "react";

function MyLeaves() {
  const email = localStorage.getItem("email");

  const [leaves] = useState(() => {
    const storedLeaves = JSON.parse(localStorage.getItem("leaves")) || [];
    return storedLeaves.filter((leave) => leave.employeeEmail === email);
  });

  return (
    <div className="min-h-screen flex flex-col items-center mt-6 bg-gray-50">
      <h2 className="text-xl font-bold mb-4">My Leave Requests</h2>

      {leaves.length === 0 && <p>No leave requests found</p>}

      {leaves.map((leave) => (
        <div key={leave.id} className="border p-4 mb-3 rounded w-full max-w-md">
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
            <b>Status:</b>{" "}
            <span
              className={
                leave.status === "Approved"
                  ? "text-green-600"
                  : leave.status === "Rejected"
                  ? "text-red-600"
                  : "text-yellow-600"
              }
            >
              {leave.status}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default MyLeaves;
