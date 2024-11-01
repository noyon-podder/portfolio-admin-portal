import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddProject from "../components/AddProject";
import WriteBlog from "../components/WriteBlog";
import AllProject from "../components/AllProject";
import UpdateProject from "../components/UpdateProject";
import GetAllBlog from "../components/GetAllBlog";
import UpdateBlog from "../components/UpdateBlog";

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
      {
        path: "/:projectId",
        element: <UpdateProject />,
      },
      {
        path: "/blog",
        element: <GetAllBlog />,
      },
      {
        path: "/blog/:blogId",
        element: <UpdateBlog />,
      },
    ],
  },
]);
