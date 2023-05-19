import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Homepage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
