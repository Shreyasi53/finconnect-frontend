import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Navbar() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-200">
      <h1 className="text-xl font-bold">FinAdvisor</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/advisors">Advisors</Link>
        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/booking">Bookings</Link>
            <Link to="/notifications">Notifications</Link>
            <Link to="/profile">Profile</Link>
            {user?.role === "advisor" && <Link to="/my-blogs">My Blogs</Link>}
            <button onClick={handleLogout} className="cursor-pointer">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
