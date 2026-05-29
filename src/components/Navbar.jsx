import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Navbar() {
  const { logout } = useAuth();
  return (
    <nav className="flex gap-5 p-4 bg-gray-200">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/" register>
        Register
      </Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
export default Navbar;
