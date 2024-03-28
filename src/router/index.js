import { createBrowserRouter } from "react-router-dom";
import PostPage from "../pages/PostPage";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import HomePage from "../pages/HomePage";
import EditPostPage from "../pages/EditPostPage";
import EditReply from "../pages/editReply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/editPost", element: <EditPostPage /> },
      { path: "/editReply", element: <EditReply /> },
    ],
  },
]);

export default router;
