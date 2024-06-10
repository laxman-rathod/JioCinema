import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Headers from "./components/header/Headers";
import Footer from "./components/footer/Footer";
import Home from "./routes/Home";
import Sports from "./routes/Sports";
import Movies from "./routes/Movies";
import TVShows from "./routes/TVShows";
import PageNotFound from "./routes/PageNotFound";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="dark:bg-darkBg">
        <Headers />
        <Outlet />
        <Footer />
      </div>
    ),
    errorElement: (
      <div className="bg-darkBg">
        <PageNotFound />
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/sports", element: <Sports /> },
      { path: "/movies", element: <Movies /> },
      { path: "/tv-shows", element: <TVShows /> },
    ],
  },
  {
    path: "/register",
    element: (
      <div className="bg-darkBg">
        <Register />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div className="bg-darkBg">
        <Login />
      </div>
    ),
  },
  // {
  //   path: "/logout",
  //   element: (
  //     <div className="bg-darkBg">
  //       <Logout />
  //     </div>
  //   ),
  // },
  {
    path: "/profile",
    element: <Profile />,
  },
  // {
  //   path: "/profile",
  //   element: (
  //     <div className="dark:bg-darkBg">
  //       <Headers />
  //       <Outlet />
  //       <Footer />
  //     </div>
  //   ),
  //   errorElement: (
  //     <div className="bg-darkBg">
  //       <PageNotFound />
  //     </div>
  //   ),
  //   children: [
  //     { path: "/", element: <Home /> },
  //     { path: "/sports", element: <Sports /> },
  //     { path: "/movies", element: <Movies /> },
  //     { path: "/tv-shows", element: <TVShows /> },
  //   ],
  // },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
