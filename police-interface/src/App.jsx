import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Reports from "./components/Reports/Reports";
import Payfine from "./components/PayFine/Payfine";
import Recognition from "./components/Recognitions/NumberPlate";
import Analytics from "./components/Analytics/Analytics";
import Navbar from "./components/NavBar/Navbar";
import Emergency from "./components/Emergency/Emergency";
import Licenses from "./components/Licenses/Licenses";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import ViewSingleComplaint from "./components/Complaint/ViewSingleComplaint";
import ComplaintTable from "./components/Complaint/ComplaintTable";
import VehicleTable from "./components/Vehicle/VehicleTable";
import VehicleDetails from "./components/Vehicle/SingleVehicle";
import Form from "./components/Vehicle/AddVehicleForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/recognitions' element={<Recognition />} />
        <Route path='/payfine' element={<Payfine />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/licenses' element={<Licenses />} />
        <Route path='/emergency' element={<Emergency />} />
        <Route path={"/vehicles"}>
          <Route index element={<VehicleTable />} />
          <Route path=':id' element={<VehicleDetails />} />
          <Route path='add' element={<Form />} />
        </Route>
        <Route path={"/complaints"}>
          <Route index element={<ComplaintTable />} />
          <Route path=':id' element={<ViewSingleComplaint />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
