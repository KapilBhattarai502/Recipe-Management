import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import MainLayout from "./LayOut/MainLayout/MainLayout.jsx";
import Home from "./Components/Home/Home.jsx";
import UserRecipes from "./Components/userRecipes/UserRecipes.jsx";
import AddRecipe from "./Components/AddRecipe/AddRecipe.jsx";
import Search from "./Components/Search/Search.jsx";
import Favorites from "./Components/Favorites/Favorites.jsx";
import EditRecipe from "./Components/Edit Recipe/EditRecipe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "recipes",
        element: <UserRecipes />,
      },
      {
        path: "addrecipe",
        element: <AddRecipe />,
      },
      {
        path: "searchrecipe",
        element: <Search />,
      },
      {
        path: "favorite",
        element: <Favorites />,
      },
      {
        path: "editrecipe",
        element: <EditRecipe />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
