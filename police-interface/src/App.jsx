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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='/dashboard' element={<Dashboard />} />
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
