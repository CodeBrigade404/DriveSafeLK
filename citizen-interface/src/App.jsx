import { BrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';

import Home from './Pages/Homepage';
import Login from './Components/CitizenLogin';
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />

          <Route path='/forgetPassword' element={<ForgetPassword />} />

          <Route path='/resetPassword/:token' element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
