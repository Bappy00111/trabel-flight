import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Regester from "./components/Regester.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import DetelsPages from "./components/DetelsPages.jsx";
import CardDetels from "./components/CardDetels.jsx";
import BookingDetels from "./components/BookingDetels.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/regester',
        element:<Regester></Regester>
      },
      {
        path:'/detels',
        element:<DetelsPages></DetelsPages>
      },
      {
        path:'/cardDetels',
        element:<CardDetels></CardDetels>
      },
      {
        path:'/bookingDetels',
        element:<BookingDetels></BookingDetels>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
