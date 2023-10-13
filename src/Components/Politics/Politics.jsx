import React from "react";
import Desktop_side_bar from "../Desktop_side_bar/Desktop_side_bar";
import Lower_images from "../Lower_images/Lower_images";
import Desktop_games_name from "../Desktop_games_name/Desktop_games_name";
import Top_scroll_bar from "../Top_scroll_bar/Top_scroll_bar";

export default function Politics() {
  return (
    <div className="main_politics_page">
      <div className="container-fluid px-0">
        <div className="row m-0">
          <div className="col-md-2 ps-0 ">
            <div className="d-none d-lg-block ">
              <Desktop_side_bar />
            </div>
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
        <th>Game</th>
        <th>OpenDate</th>
        <th />
        <th />
        <th className="text-center">1</th>
        <th className="text-center">X</th>
        <th className="text-center">2</th>
      </tr>
    </thead>
    <tbody className="Main_Table">
      {/*  <tr>
								                     <td>
								                     	<img class="img_a" src="assets/user_img/1.png">
								                     </td>
								                     <td><a href="" class="main_color">Moro Canas v Barrere</a></td>
								                     <td class="main_color">14/09/2023 12:30:0 AM</td>
								                     <td scope="row"><span class="circle"> </span></td>
								                     <td><img src="assets/user_img/tv.svg" alt="" class="img_a"></td>
								                     <td>
								                     	<span class="main_blue">-</span>
								                     	<span class="main_pink">-</span>
								                     </td>
								                     <td>
								                     	<span class="main_blue">-</span>
								                     	<span class="main_pink">-</span>
								                     </td>
								                      <td>
								                     	<span class="main_blue">-</span>
								                     	<span class="main_pink">-</span>
								                     </td>
								                  </tr> */}
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
