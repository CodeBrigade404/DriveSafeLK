import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Reports from "./components/Reports/Reports";
import VehicleManage from "./components/VehicleManage/VehicleManage";
import Payfine from "./components/PayFine/Payfine";
import Recognition from "./components/Recognitions/NumberPlate";
import Analytics from "./components/Analytics/Analytics";
import Navbar from "./components/NavBar/Navbar";
import Complaint from "./components/Complaint/Complaint";
import Emergency from "./components/Emergency/Emergency";
import Licenses from "./components/Licenses/Licenses";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";

function App() {
  const post = {
    title: "Police Department Launches New Community Outreach Program",
    date: "May 1, 2023",
    description:
      "The police department has announced a new program to increase community engagement and build trust with local residents.",
    image:
      "https://images.unsplash.com/photo-1593642532453-3db3b3d57d33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9saWNlJTIwZGVwYXJ0bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    imageLabel: "Police officers interacting with community members",
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='/dashboard' element={<Dashboard post={post} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/recognitions' element={<Recognition />} />
        <Route path='/payfine' element={<Payfine />} />
        <Route path='/vehicle' element={<VehicleManage />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/licenses' element={<Licenses />} />
        <Route path='/emergency' element={<Emergency />} />
        <Route path='/complaints' element={<Complaint />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
