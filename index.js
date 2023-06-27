import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import Footer from "./src/Footer";
import About from "./src/About";
import Contact from "./src/Contact";
import Error from "./src/Error";
import Cart from "./src/Cart";
import RestaurentMenu from "./src/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";




const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body></Body>
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Cart",
        element: <Cart />
      },
      {
        path: "/restaurents/:resId/",
        element: <RestaurentMenu />
      }
    ],
    errorElement: <Error />,
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
