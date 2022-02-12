import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import AddChallenge from "./components/Challenge/AddChallenge";
function App() {
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
          <Route
            key="add-challenge"
            path="/add-challenge"
            element={<AddChallenge />}
          />
        </Routes>
      </HashRouter>
    </React.Suspense>
  );
}

export default App;
