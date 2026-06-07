import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/Infineon";
import Download from "../Pages/Home/Download";
import Careers from "../Pages/Home/Careers";
import Contact from "../Pages/Home/Contact";

import NewsEvents from "../Pages/Home/NewsEvents";
import ProductService from "../Pages/Home/ProductService";
import ProductsGrid from "../Pages/Home/ProductsGrid";
import ProductDetail from "../Pages/Home/ProductDetail";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/news-events', element: <NewsEvents /> },
      { path: '/product-services', element: <ProductService /> },
      { path: '/products', element: <ProductsGrid /> },
      { path: '/product/:id', element: <ProductDetail /> },

      { path: '/download', element: <Download /> },
      { path: '/careers', element: <Careers /> },
      { path: '/contact', element: <Contact /> }
    ]
  },





]);







