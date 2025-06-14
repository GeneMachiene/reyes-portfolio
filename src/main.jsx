import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Practicum from './Practicum.jsx';
import Contact from './Contact.jsx';
import GawaLanding from './GawaLanding.jsx';
import Redirect from './Redirect.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
        
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/gawa",
        element: <GawaLanding/>,
      },
      {
        path: "/motherly",
        element: <Redirect link={'https://genemotherly.malayan.online/'}/>,
      },
      {
        path: "/themes",
        element: <Redirect link={'https://themes-xi.vercel.app/'}/>,
      },
      {
        path: "/practicum",
        element: <Practicum/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
