import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to HR Portal
      </h1>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;
