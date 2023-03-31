import 'bulma/css/bulma.min.css';
import React from 'react';
import Homepage from './page/Homepage';
import Operations from './page/Operations';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/operations",
    element: <Operations />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
