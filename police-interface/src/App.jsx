import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Reports from "./components/Reports/Reports";
import VehicleManage from "./components/VehicleManage/VehicleManage";
import Payfine from "./components/PayFine/Payfine";
import NumberPlate from "./components/NumberPlateReco/NumberPlate";
import Analytics from "./components/Analytics/Analytics";
import Navbar from "./components/Dashboard/NavBar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/numberplate' element={<NumberPlate />} />
        <Route path='/payfine' element={<Payfine />} />
        <Route path='/vehicle' element={<VehicleManage />} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
