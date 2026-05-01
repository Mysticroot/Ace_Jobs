import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Protected from "./features/auth/components/Protected";
import Home from "./features/interview/pages/Home";
import Interview from "./features/interview/pages/Interview";
import Plans from "./features/interview/pages/Plans";
import Landing from "./pages/Landing";
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "home",
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },
      {
        path: "plans",
        element: (
          <Protected>
            <Plans />
          </Protected>
        ),
      },
      {
        path: "interview/:interviewId",
        element: (
          <Protected>
            <Interview />
          </Protected>
        ),
      },
    ],
  },
]);
