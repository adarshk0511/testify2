import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TestService from "./pages/TestService";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Define routes
const router = createBrowserRouter([
  {
    path: "/testify2",
    element: <App />,
  },
  {
    path: "/testify2/testService",
    element: <TestService />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
