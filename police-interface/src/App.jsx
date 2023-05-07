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
import Login from "./components/AdminLogin/login";
import UserData from "./components/UserProfile/User";
import CitizenAdd from "./components/CitizenAdd/citizenAddForum";
import ViewSingleComplaint from "./components/Complaint/ViewSingleComplaint";
import ComplaintTable from "./components/Complaint/ComplaintTable";
import VehicleTable from "./components/Vehicle/VehicleTable";
import VehicleDetails from "./components/Vehicle/SingleVehicle";
import Form from "./components/Vehicle/AddVehicleForm";
import CitizenAll from "./components/CitizenAllView/citizenAllView";
import ResetPassword from "./components/UserProfile/resetPassword";
import ForgetPassword from "./components/UserProfile/forgetPassword";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/recognitions' element={<Recognition />} />
          <Route path='/payfine' element={<Payfine />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/licenses' element={<Licenses />} />
          <Route path='/emergency' element={<Emergency />} />
          <Route path='/user' element={<UserData />} />
          <Route path='/CitizenAdd' element={<CitizenAdd />} />
          <Route path='/forgetPassword' element={<ForgetPassword />} />
          <Route path='/resetPassword/:token' element={<ResetPassword />} />
         <Route path='/user' element={<UserData />} />
         <Route path='/CitizenAdd' element={<CitizenAdd />} />
         <Route path='/CitizenAll' element={<CitizenAll />} />
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
    </div>
  );
}

export default App;
