import React from "react";
import "./Sports_bar.css";

export default function Sports_bar() {
  return (
    <div className="main_sport_bar d-none d-lg-block">
      <ul>
        <li>
          <i className="fa fa-home" /> Home
        </li>
        <li>Horse Racing</li>
        <li>Greyhound Racing</li>
        <li>Kabaddi</li>
        <li>Politics</li>
        <li>Casino</li>
        <li>Sports Book</li>
        <li>INT Casino</li>
        <li>Binary</li>
        <li>
          <i className="fa fa-sign-out" /> Logout
        </li>
      </ul>
    </div>
  );
}
