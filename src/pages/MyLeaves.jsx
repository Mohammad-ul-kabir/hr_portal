import { useEffect, useState } from "react";

function MyLeaves() {
  const [leaves, setLeaves] = useState([]);
  const email = localStorage.getItem("email");

  useEffect(() => {
    const storedLeaves = JSON.parse(localStorage.getItem("leaves")) || [];

    const myLeaves = storedLeaves.filter(
      (leave) => leave.employeeEmail === email
    );

    setLeaves(myLeaves);
  }, [email]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Leave Requests</h2>

      {leaves.length === 0 && <p>No leave requests found</p>}

      {leaves.map((leave) => (
        <div key={leave.id} className="border p-4 mb-3 rounded">
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
