import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Protected from "../Common/Protected";
const ReferralsDashboard = lazy(() =>
  import("../features/referrals/referralsDashboard/ReferralsDashboard")
);
const Welcome = lazy(() => import("../features/welcome/Welcome"));
const Dashboard = lazy(() => import("../features/dashboard/Dashboard"));
const Transactions = lazy(() => import("../features/Transactions/Transactions"));
const Referrals = lazy(() => import("../features/referrals/Referrals"));
const Rank = lazy(() => import("../features/rank/Rank"));
const Deposit = lazy(() => import("../features/deposit/Deposit"));
const Support = lazy(() => import("../features/support/Support"));
const Profile = lazy(() => import("../features/profile/Profile"));
const Setting = lazy(() => import("../features/setting/Setting"));
const ChangePassword = lazy(() =>
  import("../features/changePassword/ChangePassword")
);
const PageNotFound = lazy(() => import("../Pages/404"));
const Withdrawal = lazy(() => import("../features/withdrawal/Withdrawal"));
const SignOut = lazy(() => import("../features/auth/components/SignOut"));
const SignIn = lazy(() => import("../features/auth/components/SignIn"));
const Signup = lazy(() => import("../features/auth/components/Signup"));
export const userRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/me",
    element: (
      <Protected>
        <Profile />
      </Protected>
    ),
  },
  {
    path: "/setting",
    element: (
      <Protected>
        <Setting />
      </Protected>
    ),
  },
  {
    path: "/change-password",
    element: (
      <Protected>
        <ChangePassword />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signup.referral",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
  },
  {
    path: "/statements",
    element: (
      <Protected>
        <Transactions />
      </Protected>
    ),
  },
  {
    path: "/deposit",
    element: (
      <Protected>
        <Deposit />
      </Protected>
    ),
  },
  {
    path: "/withdrawal",
    element: (
      <Protected>
        <Withdrawal />
      </Protected>
    ),
  },
  {
    path: "/referral",
    element: (
      <Protected>
        <Referrals />
      </Protected>
    ),
  },
  {
    path: "/referral/dashboard",
    element: (
      <Protected>
        <ReferralsDashboard />
      </Protected>
    ),
  },
  {
    path: "/rank",
    element: (
      <Protected>
        <Rank />
      </Protected>
    ),
  },
  {
    path: "/support",
    element: (
      <Protected>
        <Support />
      </Protected>
    ),
  },
  {
    path: "/signout",
    element: <SignOut />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
