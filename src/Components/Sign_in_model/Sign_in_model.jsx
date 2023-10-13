import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Sign_in_model.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Sign_in_model(props) {
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter ">
            <h6 className="model_heading"> Login</h6>
            <AiOutlineClose onClick={props.onHide} className="close_icon" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="sing_up_content">
            <div>
              <label htmlFor="user" className="lebal_input">
                Username
              </label>
              <br />

              <input
                type="text"
                name="user"
                placeholder="Enter Username"
                id=""
              />
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="lebal_input">
                Password
              </label>
              <br />

              <input
                type="text"
                name="password"
                placeholder="Enter Username"
                id=""
              />
            </div>

            <p className="termcondition">I am at least 18 years of age and I have read, accept and agree to the Terms and Conditions , Responsible Gaming , GamCare, Gambling Therapy</p>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
      </Modal>
    </div>
  );
}
