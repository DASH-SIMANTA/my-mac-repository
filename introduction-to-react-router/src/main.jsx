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
import UserDetails from './component/UserDetails/UserDetails.jsx';
import Posts from './component/Posts/Posts.jsx';
import PostDetails from './component/PostDetails/PostDetails.jsx';



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
          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
          element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        // params is an object that contains the dynamic segments of the URL
        // e.g., if the URL is /user/1, params will be { userid: '1' }
        // This allows us to fetch the specific user data based on the user ID
        // passed in the URL.
        // This is useful for displaying detailed information about a specific user.
        // The loader function fetches the user data from the API based on the user ID.
        // The fetched data will be available in the component rendered by this route.
        // The UserDetails component will use this data to display the user's details.    
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        // This route is for displaying posts, but it currently has no element associated with it.
        // You can add a component to render posts in the future.
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
