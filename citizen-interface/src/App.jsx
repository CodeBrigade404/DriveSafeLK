import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from './Pages/Homepage';
import Login from './Components/CitizenLogin/CitizenLogin';
import ForgetPassword from './Components/CitizenPassReset/forgetPassword';
import ResetPassword from './Components/CitizenPassReset/resetPassword';







function App() {
  return (
  <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
      </Routes>

      
      </BrowserRouter>
      </div>
      );
}

  

export default App;
