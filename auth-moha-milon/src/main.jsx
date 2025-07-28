import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Order from './components/Order.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Profile from './components/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
     { 
      path: '/',
      element: <Home></Home>,
    },
     { 
      path: 'login',
      element: <Login></Login>,
    },
     { 
      path: 'signUp',
      element: <SignUp></SignUp>,
    },
    {
      path:'orders',
      element: <PrivateRoute><Order></Order></PrivateRoute>
    },
    {
      path:'profile',
      element: <PrivateRoute><Profile></Profile></PrivateRoute>

    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
