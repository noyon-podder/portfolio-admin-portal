import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddProject from "../components/AddProject";
import Home from "../components/Home";
import WriteBlog from "../components/WriteBlog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/add-project",
        element: <AddProject />,
      },
      {
        path: "/write-blog",
        element: <WriteBlog />,
      },
    ],
  },
]);
