import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/basic/Loader/Loader";
const Todo = lazy(() => import("../pages/Todo"))
const Landing = lazy(() => import("../pages/Landing"))
const SignIn = lazy(() => import("../pages/SignIn"))


const Router = () => {
  return <Routes>
    <Route path="/">
      <Route index element={<Suspense fallback={<Loader />}><Landing /></Suspense>} />
      <Route path="todo" element={<Suspense fallback={<Loader />}><Todo /></Suspense>} />
      <Route path="signin" element={<Suspense fallback={<Loader />}><SignIn /></Suspense>} />
    </Route>
  </Routes>;
};

export default Router;
