import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Homepage';
import Login from './Components/CitizenLogin/CitizenLogin';




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
  
    
  ]);
  return <RouterProvider router={router} />;
}

export default App;
