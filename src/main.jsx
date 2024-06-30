import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Donation from './components/Donation/Donation';
import Error from './components/Error/Error';
import Details from './components/Features/Details';
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import Statistics from './components/Statistics/Statistics';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home> 
      },
      {
        path: "/donation",
        element: <Donation></Donation> ,
        loader: () => fetch('/donation.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>

      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch('/donation.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
