import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav className="flex gap-5 p-4 bg-gray-200">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/"register>Register</Link>
            
        </nav>
    );
}
export default Navbar;