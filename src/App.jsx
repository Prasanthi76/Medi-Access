import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./pages/Doctors";
import Hospitals from "./pages/Hospitals";
import BookAppointment from "./pages/BookAppointment";
import Dashboard from "./pages/Dashboard";
import Symptoms from "./pages/Symptoms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/appointment" element={<BookAppointment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/symptoms" element={<Symptoms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;