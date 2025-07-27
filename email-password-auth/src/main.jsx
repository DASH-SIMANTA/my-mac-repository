import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SignUp from './components/SignUp/SignUP';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home> ,
      },
      {
        path:'/login',
        element: <Login></Login> ,
      },
      {
        path:'/register',
        element: <Register></Register> ,
      },
      {
        path:'/signUp',
        element: <SignUp></SignUp>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
