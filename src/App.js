import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
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
          <Route
            key="home"
            path="/"
            exact={true}
            element={React.lazy(() =>
              import("./components/Challenge/Challenge")
            )}
          />
          <Route
            key="add-challenge"
            path="/add-challenge"
            element={React.lazy(() => import("./components/Login/Login"))}
          />
        </Routes>
      </HashRouter>
    </React.Suspense>
  );
}

export default App;
