import 'bulma/css/bulma.min.css';
import Homepage from './page/Homepage';
import Operations from './page/Operations';
import Transaction from './page/Transaction';
import Context from './context';
import { fakeData } from './asset/fakeData';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/operations/:id",
      element: <Operations />,
    },
    {
      path: "/transfert",
      element: <Transaction />,
    }
  ]);
  return (
    <Context.Provider value={fakeData}>
      <RouterProvider router={router} />
    </Context.Provider>
  );
}

export default App;
