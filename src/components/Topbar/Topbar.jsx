import {Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <Link to="/" className="link">
            <div className="logo">NJAdmin</div>
            </Link>
          </div>

          <div className="topRight">
            <div className="topbarIcons">
              <NotificationsNone />
              <span className="topIconBadge">3</span>
            </div>
            <div className="topbarIcons">
              <Language/>
            </div>
            <div className="topbarIcons">
              <Settings />
            </div>
            <Link to="/" className="link">
              <img src="profilepic.jpg" alt="profilepic" className="topAvatar"/>
            </Link>

          </div>
        </div>
      </div>
  );
};

export default Topbar;
