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
import ProductDetailPage from './Pages/ProductDetailPage';
import Protected from './features/auth/Components/Protected';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Protected >
      <Home />
    </Protected>),
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
    path: "/cart",
    element: <Protected ><CartPage /></Protected>
  },
  {
    path: "/checkout",
    element: <Protected ><CheckoutPage /></Protected>
  },
  {
    path: "/productDetail/:id",
    element: <Protected><ProductDetailPage /></Protected>
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

