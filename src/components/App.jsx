import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
import Layout from "../layout/Layout/Layout";

const HomePage = lazy(() => import("../pages/Home"));
const TweetsPage = lazy(() => import("../pages/Tweets"));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
