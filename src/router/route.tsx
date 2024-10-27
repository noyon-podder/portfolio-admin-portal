import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddProject from "../components/AddProject";
import WriteBlog from "../components/WriteBlog";
import AllProject from "../components/AllProject";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <AllProject />,
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
