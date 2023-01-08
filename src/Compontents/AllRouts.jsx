import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersDetailspage from "./Users.Detailspage";
import Navbar from "./Navbar";
import Userspage from "./Userspage";
import { Pagination } from "./Pagination";

const AllRouts = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Userspage />} />
        <Route path="/usersDetails" element={<UsersDetailspage />} />
      </Routes>
    </div>
  );
};

export default AllRouts;
