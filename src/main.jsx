import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// router setup
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import Home from './components/NestedRoutes/Home';
import AppliedJobs from './components/NestedRoutes/AppliedJobs';
import Blog from './components/NestedRoutes/Blog';
import Features from './components/FeaturedJobs/Features';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader:()=> fetch('./jobs.json')
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/feature/:id",
        loader:()=> fetch('./jobs.json'),// akshata sob gola data aikhana load kora thick na 
        element:<Features></Features>
      }
    ],
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routers} />
  </React.StrictMode>,
)
