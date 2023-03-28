import 'bulma/css/bulma.min.css';
import React from 'react';
import Homepage from './page/Homepage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
