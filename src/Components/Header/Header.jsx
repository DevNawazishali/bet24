import React from "react";
import "./Header.css";
import logo from "../Assets/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import Top_scroll_bar from "../Top_scroll_bar/Top_scroll_bar";
import mb_bn from "../Assets/binary.png"
import mb_ft from "../Assets/football.png"
import mb_tn from "../Assets/tenis.png"
import mb_hr from "../Assets/horse_racing.png"
import mb_gr from "../Assets/greyhound_racing.png"
import mb_cricket from "../Assets/cricket.png"
import mb_kb from "../Assets/kabaddi.png"
import mb_pol from "../Assets/politics.png"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>

  
    <div className="bet24_header">
      <div className="d-flex justify-content-between">
        <div className="maiN_logo">
     <Link to="/">     <img src={logo} alt="" /></Link>
        </div>

        <div className="d-flex justify-content-right gap-2">
          <div className="content_here text-start">
            <h3 className="d-flex">
              <span className="d-none d-lg-block"> Balance:</span>{" "}
              <span className="d-flex d-lg-none">
                <i class="fa fa-university"></i>
              </span>{" "}
              <span>1234</span>
            </h3>
            <h3>
              Exposure: <span>0</span>
            </h3>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle className="header_drop_down" id="dropdown-basic">
                <span className="drop_title">626262</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="drop_down_menu" href="#/action-1">
              <Link to="Account_Statement" className="text-decoration-none text-dark">    Account Statement </Link>
                </Dropdown.Item>
                <Dropdown.Item className="drop_down_menu" href="#/action-2">
                  Profit Loss Report
                </Dropdown.Item>
                <Dropdown.Item className="drop_down_menu" href="#/action-3">
                  Bet History
                </Dropdown.Item>
                <Dropdown.Item className="drop_down_menu" href="#/action-3">
                  Unsetteled Bet
                </Dropdown.Item>
                <Dropdown.Item className="drop_down_menu">
                <Link to="/Change_Password" className="text-decoration-none text-dark">  Change Password</Link>
                </Dropdown.Item>
                <hr />
                <Dropdown.Item className="drop_down_menu" href="#/action-3">
                  <i class="fa fa-sign-out"></i> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="scroling_text">
        <marquee id="marquee1" direction="left" scrollamount="4">
          Welcome to demo. For Buy Fund Call Our India Coordinator. 12345
        </marquee>
      </div>
      <div className="d-lg-none">
        <Top_scroll_bar className="" />

        <div className="d-lg-none mobile_top_nav_sports_bar">
          <ul className="">
            <li className="">
              <Link to="/" className="nav-link">
                InPlay
              </Link>
            </li>
            <li className="">
              <Link to="/Soccer" className="nav-link">
                Soccer
              </Link>
            </li>
            <li className="">
              <Link to="/Tennis" className="nav-link">
                Tennis
              </Link>
            </li>
            <li className="">
              <Link to="/Cricket" className="nav-link">
                Cricket
              </Link>
            </li>
            <li className="">
              <a  className="nav-link">
                Horse Racing
              </a>
            </li>
            <li className="">
              <a  className="nav-link">
                Greyhound Racing
              </a>
            </li>
            <li className="">
              <a  className="nav-link">
                Kabaddi
              </a>
            </li>
            <li className="">
              <Link to="/Politics" className="nav-link">
                Politics
              </Link>
            </li>
            <li className="">
              <a  className="nav-link">
                Casino
              </a>
            </li>
            <li className="">
              <a  className="nav-link">
                INT Casino
              </a>
            </li>
            <li className="">
              <a  className="nav-link">
                Binary
              </a>
            </li>
          </ul>
        </div>

       
      </div>
    </div>
    <div className="mobile_botton_sports_bar d-block d-lg-none">
          <ul>
            <li>
              <a >
                <img src={mb_cricket} />
                <span>Cricket</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={mb_ft} />
                <span>Football</span>
              </a>
            </li>
            <li>
              <a >
                <img src={mb_tn} />
                <span>Tennis</span>
              </a>
            </li>
            <li>
              <a >
                <img src={mb_hr} />
                <span>Horse Racing</span>
              </a>
            </li>
            <li>
              <a >
                <img src={mb_gr} />
                <span>Greyhound Racing</span>
              </a>
            </li>
            <li>
              <a>
                <img src={mb_kb} />
                <span>Kabaddi</span>
              </a>
            </li>
            <li>
              <a >
                <img src={mb_pol} />
                <span>Politics</span>
              </a>
            </li>
            <li>
              <a >
                <img src={mb_bn} />
                <span>Binary</span>
              </a>
            </li>
          </ul>
        </div>
    </>
  );
}
