import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './component/Home/Home.jsx';
import Header from './component/Header/Header.jsx';
import About from './component/About/About.jsx';
import Contact from './component/Contact/Contact.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './component/Users/users.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
          path: '/about',
          element: <About></About>
      },
      {
          path: '/contact',
          element: <Contact></Contact>
      },
      {
          path: '/users',
          element: <Users></Users>
      },
    
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
