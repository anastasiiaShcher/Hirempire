import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";

import { Home } from "./pages/Home";
import { Candidates } from "./pages/Candidates";
import { CompanyFormPage } from "./pages/CompanyFormPage";
import { ThankYou } from "./components/ThankYou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/candidate",
    element: <Candidates />,
  },
  {
    path: "/company",
    element: <CompanyFormPage />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
