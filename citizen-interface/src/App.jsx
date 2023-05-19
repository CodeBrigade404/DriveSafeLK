import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Homepage';
import Login from './Components/CitizenLogin/CitizenLogin.jsx';
import ForgetPassword from './Components/CitizenPassReset/ForgetPassword.jsx';
import ResetPassword from './Components/CitizenPassReset/ResetPassword.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/forgetPassword',
      element: <ForgetPassword />,
    },
    {
      path: '/resetPassword/:token',
      element: <ResetPassword />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
