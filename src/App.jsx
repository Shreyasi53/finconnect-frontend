import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import ProtectedRoute from "./routes/ProtectedRoute";

import Blogs from "./pages/Blogs";
import Advisors from "./pages/Advisors";
import Booking from "./pages/Booking";
import Notification from "./pages/Notification";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/advisors" element={<Advisors />} />
        <Route path="/booking" element={
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
          }
        />
        <Route path="/notification" element={
          <ProtectedRoute>
            <Notification />
          </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;