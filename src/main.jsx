import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import App from './App';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import MyBooking from './components/MyBooking/MyBooking';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Hotels from './components/Hotels/Hotels';
import AuthProvider from './components/AuthProvider/AuthProvider';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/mybooking',
        element: <MyBooking />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/hotels',
        element: <Hotels />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
