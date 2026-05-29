import { useState } from "react";
import API from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        role: "user" 
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            setLoading(true);
            const res = await API.post("/v1/auth/register", formData);
            toast.success(res.data.message);
            navigate("/login");
        }catch(error){
            toast.error(error.response?.data?.message || "Registration failed");
        }finally{
            setLoading(false);
        }
    }
  return ( 
    <div className= "max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3"> 
        <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="border p-2 rounded" required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 rounded" required />   
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="border p-2 rounded" required />  
        <select name="role" value={formData.role} onChange={handleChange} className="border p-2 rounded">
          <option value="user">User</option>
          <option value="advisor">Advisor</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" disabled={loading} className="bg-blue-500 text-white p-2 rounded">
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;