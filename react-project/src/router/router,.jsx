import { createBrowserRouter } from "react-router";
import About from "../pages/About";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import App from "../pages/App";
import RootLayout from "../Components/RootLayout";
import PostDetails from "../Components/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "about", element: <About /> },
      { path: "product/:id", element: <PostDetails /> },
    ],
  },
]);

export default router;
