import React from "react";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
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
      </div>
    </>
  );
}
