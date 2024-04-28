import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AdminProtected } from "../Common/Protected";
import Create from "../admin/features/announcements/components/Create";
const AdminDashboard = lazy(() =>
  import("../admin/features/dashboard/components/Dashboard")
);
const Users = lazy(() => import("../admin/features/users/components/Users"));
const KYC = lazy(() => import("../admin/features/kyc/components/KYC"));
const Transactions = lazy(() =>
  import("../admin/features/transactions/components/Transactions")
);
const Investments = lazy(() =>
  import("../admin/features/investments/components/Investments")
);
const InvestmentPackages = lazy(() =>
  import("../admin/features/investmentPackages/components/InvestmentPackages")
);
const Credit = lazy(() => import("../admin/features/credit/components/Credit"));
const ComplaintsAndIssues = lazy(() =>
  import("../admin/features/complaintsAndIssues/components/ComplaintsAndIssues")
);
const Email = lazy(() => import("../admin/features/email/components/Email"));
const Notifications = lazy(() =>
  import("../admin/features/notifications/components/Notifications")
);
const Profile = lazy(() =>
  import("../admin/features/profile/components/Profile")
);
const ClaimRewards = lazy(() =>
  import("../admin/features/claimRewards/components/ClaimRewards")
);
const Announcements = lazy(() =>
  import("../admin/features/announcements/components/Announcements")
);
const SignOut = lazy(() => import("../features/auth/components/SignOut"));
const SignIn = lazy(() => import("../features/auth/components/SignIn"));
const Signup = lazy(() => import("../features/auth/components/Signup"));
const PageNotFound = lazy(() => import("../Pages/404"));

export const adminRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AdminProtected>
        <AdminDashboard />
      </AdminProtected>
    ),
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/credit",
    element: <Credit />,
  },
  {
    path: "/announcements",
    element: <Announcements />,
  },
  {
    path: "/announcements/create",
    element: <Create />,
  },
  {
    path: "/users",
    element: (
      <AdminProtected>
        <Users />
      </AdminProtected>
    ),
  },
  {
    path: "/claimed-rewards",
    element: (
      <AdminProtected>
        <ClaimRewards />
      </AdminProtected>
    ),
  },
  {
    path: "/kyc",
    element: (
      <AdminProtected>
        <KYC />
      </AdminProtected>
    ),
  },
  {
    path: "/transactions",
    element: (
      <AdminProtected>
        <Transactions />
      </AdminProtected>
    ),
  },
  {
    path: "/investments",
    element: (
      <AdminProtected>
        <Investments />
      </AdminProtected>
    ),
  },
  {
    path: "/investment_packages",
    element: (
      <AdminProtected>
        <InvestmentPackages />
      </AdminProtected>
    ),
  },
  {
    path: "/complaints_or_Issues",
    element: (
      <AdminProtected>
        <ComplaintsAndIssues />
      </AdminProtected>
    ),
  },
  {
    path: "/email",
    element: (
      <AdminProtected>
        <Email />
      </AdminProtected>
    ),
  },
  {
    path: "/notifications",
    element: (
      <AdminProtected>
        <Notifications />
      </AdminProtected>
    ),
  },
  {
    path: "/profile",
    element: (
      <AdminProtected>
        <Profile />
      </AdminProtected>
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
