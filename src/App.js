import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Login from "./components/Login/Login";
import AddChallenge from "./components/Challenge/Add-Challenge";
import Challenge from "./components/Challenge/Challenge";
import { getEmpId } from "./components/Utility/utils";

const App = () => {
  return (
    <React.Suspense
      fallback={
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }
    >
      <HashRouter>
        <Routes>
          <Route exact={true} key="home" path="/" element={<Login />} />
          {getEmpId() ? (
            <Route
              key="add-challenge"
              path="/add-challenge"
              element={<AddChallenge />}
            />
          ) : null}
          {getEmpId() ? (
            <Route
              exact={true}
              key="challenge"
              path="/challenge"
              element={<Challenge />}
            />
          ) : null}
        </Routes>
      </HashRouter>
    </React.Suspense>
  );
};

export default App;
