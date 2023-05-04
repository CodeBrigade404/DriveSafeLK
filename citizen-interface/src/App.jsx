import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Homepage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <div>About</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
