import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './shared/appBar';
import Footer from './shared/footer';
import Home from './components/Home/index.tsx'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login/index.tsx';
import Layout from './components/router/index.js';
import SignUp from './components/SignUp/index.tsx';
import Recover from './components/Recover/index.tsx';
import Booking from './components/Booking/index.tsx';
import AuthProvider from './shared/hooks/AuthProvider.js';

function App() {

  
  // initialize a browser router
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: 
      [{
        path: "/",
        element: <Home />,
      },
      // other pages....
      {
        path: "/login",
        element: <Login />,
    

      },
      {
        path: "/signup",
        element: <SignUp />

      },
      {
        path: "/auth/recover",
        element: <Recover />

      },
      {
        path: "/book",
        element: <Booking/>
      }
    ]
  }
  ])
  return (
    <RouterProvider  router={router} >
    


    </RouterProvider >
  );
}

export default App;
