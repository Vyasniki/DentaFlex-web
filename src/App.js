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
function App() {

  const requireAuth = (nextState, replace, next) => {
    console.log("HEYA")
    if(true){
      replace({
        pathname: "/login",
        state: {nextPathname : nextState.location.pathname}
      });
    }
    next();
  }
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
        onEnter: {requireAuth}

      },
      {
        path: "/signup",
        element: <SignUp />,
        onEnter: {requireAuth}

      },
      {
        path: "/recover",
        element: <Recover />,
        onEnter: {requireAuth}

      },
      {
        path: "/book",
        element: <Booking/>,
        render: {requireAuth}
      }
    ]
  }
  ])
  return (
    <RouterProvider  router={router} >
    {/* <div className="App">
     <ResponsiveAppBar />
     {/* <Home/> */}
     {/* <Footer/> */}
    {/* </div> */}
    </RouterProvider >
  );
}

export default App;
