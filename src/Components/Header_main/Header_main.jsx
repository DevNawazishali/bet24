import React from 'react'
import logo from "../Assets/logo.png"
import "./Header_main.css"
import Sign_in_model from '../Sign_in_model/Sign_in_model';

export default function Header_main() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className='main_header_jsx'>
    <div className="container-fluid">
        <div className="d-flex justify-content-between">
            <div className='main_logo'>
                <img src={logo} alt="" />
            </div>

            <div className="three_top_buttons d-flex gap-2">
            <button className='sign_btn'  onClick={() => setModalShow(true)}> sign in</button>
            <button className='sign_btn'> Sign up</button>
            <button className='sign_btn'> Demo</button>
            <Sign_in_model
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            </div>
          
        </div>
    </div>

    
    
    </div>
  )
}
