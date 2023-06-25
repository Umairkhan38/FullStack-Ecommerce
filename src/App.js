import {React,useEffect} from 'react';
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import SignupPage from './Pages/SignupPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import Protected from './features/auth/Components/Protected';
import { fetchItemsByUserIdAsync } from './features/Cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';


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
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)
  useEffect(() => {
    if(user){
    dispatch(fetchItemsByUserIdAsync(user.id))
}
}, [dispatch,user?.id]);



  return (
    <div className="App">
    {/* <Home/> */}
    {/* <LoginPage /> */}
    <RouterProvider router={router} />
    </div>
  );
}

export default App;

