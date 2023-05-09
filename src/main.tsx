import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Step1 } from "./steps/step_1";
import { Step2 } from "./steps/step_2";
import { Step3 } from "./steps/step_3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cefaba19-00a5-460e-bf99-2e27505f08ff",
    element: <Step1 />,
  },
  {
    path: "/6ec4ab47-af7d-4720-a3e0-e8495cec95ee",
    element: <Step2 />,
  },
  {
    path: "/c00a2ac9-24e1-4e9e-a17c-d369e5ffac03",
    element: <Step3 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
