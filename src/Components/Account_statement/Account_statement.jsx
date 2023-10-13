import React from 'react'
import Desktop_side_bar from '../Desktop_side_bar/Desktop_side_bar'
import "./Account_statement.css"

export default function Account_statement() {
  return (
    <div className='main_account_statement_page'>
    <div className="container-fluid px-0">
        <div className="row m-0">
            <div className="col-md-2 ps-0">
            <div className='d-none d-lg-block'>

                <Desktop_side_bar/>
            </div>
            </div>
            <div className="col-md-10">
                <div className="cp_heading">
                <h4>Account Statement</h4>

              

                </div>
                <div className="row">
                   
                   
                        <div className="col-md-2 col-6 text-start">
                            <label htmlFor="fdate" className='dates'>From Date</label> <br />
                            <input type="date" className='acc_statement_inputs' name="" id="" />
                        </div>
                        <div className="col-md-2 col-6 text-start">
                            <label htmlFor="tdate" className='dates'>To Date</label> <br />
                            <input type="date" className='acc_statement_inputs' name="tdate" id="" />
                        </div>

                        <div className="col-md-3 col-12 text-start">
                            <button className='acc_submit'>Submit</button>
                        </div>
                   
                </div>


                <div className="row">
                    <div className="col-md-12">
                    <div className="table-responsive acc_table">
  <table className="table">
    <thead className="Statement_head">
      <tr className='bag_tr'  style={{backgroundColor:"#068267"}}>
        <th className='acc__th_text' >No</th>
        <th className='acc__th_text'>From Id</th>
        <th className='acc__th_text'>From Type</th>
        <th className='acc__th_text'>From Name</th>
        <th className='acc__th_text'>Date</th>
        <th className='acc__th_text'>Credit</th>
        <th className='acc__th_text'>Debit</th>
        <th className='acc__th_text'>Balance</th>
        <th className='acc__th_text'>Remark</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>487569</td>
        <td>Master</td>
        <td />
        <td>04/09/2023, 10:57 PM</td>
        <td>2000</td>
        <td>0</td>
        <td>0</td>
        <td>Add from winner</td>
      </tr>
      <tr>
        <td>2</td>
        <td>507140</td>
        <td>Master</td>
        <td>bet1 bwt1 bet1</td>
        <td>04/09/2023, 10:32 PM</td>
        <td>1000</td>
        <td>0</td>
        <td>0</td>
        <td>Fund transfer by bet1 bwt1 bet1(Sub Admin)</td>
      </tr>
      <tr>
        <td>3</td>
        <td>223125</td>
        <td>Master</td>
        <td>merazul merazul merazul</td>
        <td>04/09/2023, 08:09 PM</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>Fund deduct by merazul merazul merazul(Master)</td>
      </tr>
      <tr>
        <td>4</td>
        <td>223125</td>
        <td>Master</td>
        <td>merazul merazul merazul</td>
        <td>04/09/2023, 08:08 PM</td>
        <td>10000</td>
        <td>0</td>
        <td>0</td>
        <td>Fund transfer by merazul merazul merazul(Master)</td>
      </tr>
      <tr>
        <td>5</td>
        <td>223125</td>
        <td>Master</td>
        <td>merazul merazul merazul</td>
        <td>04/09/2023, 07:53 PM</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>Fund deduct by merazul merazul merazul</td>
      </tr>
      <tr>
        <td>6</td>
        <td>223125</td>
        <td>Master</td>
        <td>merazul merazul merazul</td>
        <td>04/09/2023, 07:52 PM</td>
        <td>5000</td>
        <td>0</td>
        <td>0</td>
        <td>Fund transfer by merazul merazul merazul</td>
      </tr>
      <tr>
        <td>7</td>
        <td>164952</td>
        <td>Master</td>
        <td>sumit kumar kumar</td>
        <td>04/09/2023, 07:31 PM</td>
        <td>5000</td>
        <td>0</td>
        <td>0</td>
        <td>Fund transfer by sumit kumar kumar</td>
      </tr>
      <tr>
        <td>8</td>
        <td>164952</td>
        <td>Master</td>
        <td>sumit kumar kumar</td>
        <td>04/09/2023, 07:31 PM</td>
        <td>5000</td>
        <td>0</td>
        <td>0</td>
        <td>Fund transfer by sumit kumar kumar</td>
      </tr>
      <tr>
        <td>9</td>
        <td>377379</td>
        <td>Master</td>
        <td>Roushan Kumar</td>
        <td>02/09/2023, 05:11 PM</td>
        <td>10000</td>
        <td>0</td>
        <td>0</td>
        <td>Fund transfer by Roushan Kumar</td>
      </tr>
    </tbody>
  </table>
  
  <div className="d-flex justify-content-center">
    <div className="d-flex flex-row align-items-center">
      <button className="btns_p">First</button>
      <button className="btns_p">Prev</button>
      <p className="btns_pp">1</p>
      <button className="btns_p">Next</button>
      <button className="btns_p">Last</button>
    </div>
  </div>
</div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    </div>
  )
}
