import React from "react";
import "./Cricket.css";
import Accordion from "react-bootstrap/Accordion";
import cricket from "../Assets/cricket.png";
import Dropdown from 'react-bootstrap/Dropdown';
import tv from "../Assets/tv.svg"
import one from "../Assets/1.png"
import three from "../Assets/3.png"

import Top_scroll_bar from "../Top_scroll_bar/Top_scroll_bar";
import Desktop_side_bar from "../Desktop_side_bar/Desktop_side_bar";
import Desktop_games_name from "../Desktop_games_name/Desktop_games_name";
import Lower_images from "../Lower_images/Lower_images";
export default function Cricket() {
  return (
    <div className="main_cricket_page">
      <div className="container-fluid px-0">
        <div className="row m-0">
          <div className="col-md-2 ps-0 d-none d-lg-block">
          <Desktop_side_bar/>
          </div>

          <div className="col-md-10">
          <div className="d-none d-lg-block">

           <Top_scroll_bar/>
          </div>


            <div className="row">
                <div className="col-md-12">
                <div className="m_games d-none d-lg-block">
 <Desktop_games_name/>

</div>

                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
  <label htmlFor="comp" className="compition_lebal">view: </label>
  <select className="main_compition_select" name="comp" id="">
 
      <option value="1">COMPETITIONS</option>
      <option value="2">TIME</option>
      {/* <option value="3">Three</option> */}
  </select>

            </div>


            <div className="row">
                <div className="col-md-12">
                <div className="table-responsive">
  <table className="table">
    <thead>
      <tr>
        <th />
        <th className="text-start">Game</th>
        <th className="text-start">OpenDate</th>
        <th />
        <th />
        <th className="text-center">1</th>
        <th className="text-center">X</th>
        <th className="text-center">2</th>
      </tr>
    </thead>
    <tbody className="table_main">
      <tr>
        <td>
          <img className="img_a" src={one} />
        </td>
        <td className="Start_text">
          <a href="Live_Match.html" className="main_color">
            Moro Canas v Barrere
          </a>
        </td>
        <td className="main_color">14/09/2023 12:30:0 AM</td>
        <td scope="row">
          <span className="circle"> </span>
        </td>
        <td>
          <img src={tv} alt="" className="img_a" />
        </td>
        <td>
          <span className="main_blue">-</span>
          <span className="main_pink">-</span>
        </td>
        <td>
          <span className="main_blue">-</span>
          <span className="main_pink">-</span>
        </td>
        <td>
          <span className="main_blue">-</span>
          <span className="main_pink">-</span>
        </td>
      </tr>
      <tr>
        <td>
          <img className="img_a" src={three} />
        </td>
        <td  className="Start_text">
          <a href="" className="main_color">
            Pakistan v Sri Lanka
          </a>
        </td>
        <td className="main_color">14/09/2023 1:50:0 AM</td>
        <td scope="row">
          <span className="circle"> </span>
        </td>
        <td>
          <img src={tv} alt="" className="img_a" />
        </td>
        <td>
          <span className="main_blue">-</span>
          <span className="main_pink">-</span>
        </td>
        <td>
          <span className="main_blue">-</span>
          <span className="main_pink">-</span>
        </td>
        <td>
          <span className="main_blue">-</span>
          <span className="main_pink">-</span>
        </td>
      </tr>
      <tr>
        <td>
          <img className="img_a" src={one} />
        </td>
        <td  className="Start_text">
          <a href="" className="main_color">
            Guyana Amazon Warriors v Jamaica Tallawahs
          </a>
        </td>
        <td className="main_color">14/09/2023 05:30:0 PM</td>
        <td scope="row">
          <span className="circle"> </span>
        </td>
        <td>
          <img src={tv} alt="" className="img_a" />
        </td>
        <td>
          <span className="main_blue">1.02</span>
          <span className="main_pink">2.02</span>
        </td>
        <td>
          <span className="main_blue">-</span>
          <span className="main_pink">-</span>
        </td>
        <td>
          <span className="main_blue">3.01</span>
          <span className="main_pink">2.05</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

                </div>
            </div>
<Lower_images/>



            
            </div>
          </div>
        </div>
      </div>
 
  );
}
