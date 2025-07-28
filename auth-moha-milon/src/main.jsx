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
