// ============= Import Modules =============
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ============= Import Components =============
import RootLayout from "./pages/Root";
import HomePage from "@/pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    children: [{ index: true, element: <HomePage /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
