import { createBrowserRouter } from "react-router";
import { Navigate } from "react-router";
import Layout from "@/layout";
import { BASE_PATH } from "@/lib/config";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/auth/Login";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import VerifyOTP from "@/pages/auth/VerifyOTP";
import ResetPassword from "@/pages/auth/ResetPassword";
import Dashboard from "@/pages/dashboard";
import KycManagement from "@/pages/kyc-management";
import PlayerManagement from "@/pages/player-management";
import MatchControl from "@/pages/match-control";
import ContentEditing from "@/pages/content-editing";

const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Navigate to="/login" replace /> },
        { path: "login", element: <Login /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "verify-otp", element: <VerifyOTP /> },
        { path: "reset-password", element: <ResetPassword /> },
        {
          path: "/",
          element: <Layout />,
          children: [
            { path: "dashboard", element: <Dashboard /> },
            { path: "kyc-management", element: <KycManagement /> },
            { path: "player-management", element: <PlayerManagement /> },
            { path: "match-control", element: <MatchControl /> },
            { path: "content-editing", element: <ContentEditing /> },
          ],
        },
      ],
    },
  ],
  { basename: BASE_PATH }
);

export default router;
