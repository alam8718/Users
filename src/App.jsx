import React from "react";
import Users from "./Components/users/Users";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserDetails from "./Components/Details/UserDetails";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
