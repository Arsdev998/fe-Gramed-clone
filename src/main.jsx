import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import MyAccount from "./pages/MyAccount.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import BooksPage from "./pages/BooksPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/my-account",
        element: <MyAccount />,
        children: [
          {
            path: "/my-account/wishlist",
            element: <Wishlist />,
          },
        ],
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <BooksPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
