import 'bulma/css/bulma.min.css';
import Homepage from './page/Homepage';
import Operations from './page/Operations';
import Transaction from './page/Transaction';
import CurrentUserAccounts from './context';
import { fakeData } from './asset/fakeData';


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
    <CurrentUserAccounts.Provider value={fakeData}>
      <RouterProvider router={router} />
    </CurrentUserAccounts.Provider>
  );
}

export default App;
