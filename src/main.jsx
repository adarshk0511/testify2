import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TestService from "./pages/TestService.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EnggService from './pages/EnggService.jsx';
import Landing from './pages/Landing.jsx';
// Define routes

const router = createBrowserRouter([
  {
    path: "/testify2",
    element: <Landing />,
  },
  {
    path: "/testify2/testService",
    element: <TestService />,
  },
  {
    path: "/testify2/enggService",
    element: <EnggService />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
