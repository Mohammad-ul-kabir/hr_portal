import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        HR Portal
      </Link>

      <div className="flex gap-4 items-center">
        {!isLoggedIn && (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/signup" className="hover:underline">
              Signup
            </Link>
          </>
        )}

        {isLoggedIn && role === "HR" && (
          <Link to="/hr" className="hover:underline">
            HR Dashboard
          </Link>
        )}

        {isLoggedIn && role === "Employee" && (
          <Link to="/employee" className="hover:underline">
            Employee Dashboard
          </Link>
        )}

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
