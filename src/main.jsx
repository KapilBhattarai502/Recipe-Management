import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import './index.css'
import MainLayout from './LayOut/MainLayout/MainLayout.jsx';
import Home from './Components/Home/Home.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[{
      path:"",
      element:<Home/>

    }]
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
