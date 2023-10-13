import React from 'react'
import  "./Change_password.css"
import Desktop_side_bar from '../Desktop_side_bar/Desktop_side_bar'

export default function Change_password() {
  return (
    <div className='change_password_main'>
    <div className="container-fluid px-0">
        <div className="row m-0">
            <div className="col-md-2 ps-0 d-none d-lg-block">
                <Desktop_side_bar/>
            </div>
            <div className="col-md-10">
                <div className="change_password_content">
                    <div className='cp_heading'>
                        <h4>Change Password</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 text-start">
                    <input type="password" className='change_password_input' placeholder='Old Password'  maxLength="20" name="" id="" />
                    <input type="password" className='change_password_input' placeholder='New Password'  maxLength="20" name="" id="" />
                    <input type="password" className='change_password_input' placeholder='Confirm Password '  maxLength="20" name="" id="" />
 <button className='password_change_btn'>Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    </div>



    </div>
  )
}
