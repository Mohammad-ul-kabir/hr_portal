import { useState } from "react";

function ApplyLeave() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");

  const email = localStorage.getItem("email");

  const handleSubmit = (e) => {
    e.preventDefault();

    const leaves = JSON.parse(localStorage.getItem("leaves")) || [];

    const newLeave = {
      id: Date.now(),
      employeeEmail: email,
      fromDate,
      toDate,
      reason,
      status: "Pending",
    };

    localStorage.setItem("leaves", JSON.stringify([...leaves, newLeave]));

    alert("Leave request submitted");

    setFromDate("");
    setToDate("");
    setReason("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center mt-6 bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Apply Leave</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="w-full border p-2"
          required
        />

        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="w-full border p-2"
          required
        />

        <textarea
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full border p-2"
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Submit Leave
        </button>
      </form>
    </div>
  );
}

export default ApplyLeave;
