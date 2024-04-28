import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./mesh.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.min.css";
import {
  checkAuthAsync,
  selectAuthInfo,
  selectcheckAuth,
} from "./features/auth/authSlice";
import { programDataAsync } from "./features/program/programSlice";
import Loader from "./components/loader/Loader";
import { userRoutes } from "./routes/userRoutes";
import { adminRouter } from "./routes/adminRoutes";

function App() {
  const dispatch = useDispatch();
  const checkAuth = useSelector(selectcheckAuth);
  const user = useSelector(selectAuthInfo);

  useEffect(() => {
    dispatch(checkAuthAsync());
    dispatch(programDataAsync());
  }, [dispatch]);
  useEffect(() => {
    if (user) {
    }
  }, [dispatch, user]);
  let router;
  if (user && user.role === "admin") {
    router = adminRouter;
  } else {
    router = userRoutes;
  }
  return (
    checkAuth && (
      <>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
          <ToastContainer />
        </Suspense>
      </>
    )
  );
}

export default App;
