import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import PerLoader from "./perLoader";
import { inject } from "@vercel/analytics";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FirstProject from './component/sections/3Portfolio/projectslinks/FirstProject';
import SecProject from "./component/sections/3Portfolio/projectslinks/SecProject";
import ThirdProject from "./component/sections/3Portfolio/projectslinks/ThirdProject";

inject();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/firstProject",
    element: <FirstProject />
  },
  {
    path: "/secproject",
    element: <SecProject />
  },
  {
    path: "/thirdproject",
    element: <ThirdProject />
  }
]);

// Locate the main root element
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);

  // Render both RouterProvider and PerLoader in the main root
  root.render(
    <React.StrictMode>
      {/* <PerLoader /> */}
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}


