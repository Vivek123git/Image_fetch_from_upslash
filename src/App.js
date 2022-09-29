import React from "react";

import SearchPage from "./SearchPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import AddCaption from "./AddCaption";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/add" element={<AddCaption />} />
        </Routes>
      </Router>
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    </div>
  );
}
