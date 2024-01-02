import React from "react";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function Admin() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div className="admin-container">
        <div className="admin-sidebar">
          <SideBar collapsed={collapsed} />
        </div>
        <div className="admin-content">
          <div className="admin-header">
            <FaBars
              size={30}
              onClick={() => setCollapsed(!collapsed)}
              style={{ marginLeft: "10px" }}
            />
          </div>
          <div className="admin-main">
            <Outlet />
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </>
  );
}
