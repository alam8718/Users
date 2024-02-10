import React from "react";
import Users from "./Components/users/Users";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
