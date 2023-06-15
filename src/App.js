import React from 'react';
import './App.css';
import Signup from './features/auth/Components/Signup';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignupPage from './Pages/SignupPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cartpage",
    element: <CartPage />
  },
  {
    path: "/checkout",
    element: <CheckoutPage />
  }
]);


function App() {
  return (
    <div className="App">
    {/* <Home/> */}
    {/* <LoginPage /> */}
    <RouterProvider router={router} />
    </div>
  );
}

export default App;

