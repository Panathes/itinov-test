import 'bulma/css/bulma.min.css';
import Homepage from './page/Homepage';
import Operations from './page/Operations';
import Transaction from './page/Transaction';
import CurrentUserAccounts from './context';
import { mockData } from './utils/mockData';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const App = () =>  {

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
    <CurrentUserAccounts.Provider value={mockData}>
      <RouterProvider router={router} />
    </CurrentUserAccounts.Provider>
  );
}

export default App;
