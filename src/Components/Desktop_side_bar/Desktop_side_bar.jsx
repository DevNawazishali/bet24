import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import "./Desktop_side_bar.css"

export default function Desktop_side_bar() {
  return (
    <div>
      <div className="side_menu_bar_all">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>InPlay</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>All Sports</Accordion.Header>
                  <Accordion.Body className="all_sports_content">
                    <div>
                      <p>
                        <i class="fa fa-plus-square-o me-2"></i>Cricket
                      </p>
                      <p>
                        <i class="fa fa-plus-square-o me-2"></i>Football
                      </p>
                      <p>
                        <i class="fa fa-plus-square-o me-2"></i>Tennis
                      </p>
                      <p>
                        <i class="fa fa-plus-square-o me-2"></i>Horse Racing
                      </p>
                      <p>
                        <i class="fa fa-plus-square-o me-2"></i>Greyhound Racing
                      </p>
                      <p>
                        <i class="fa fa-plus-square-o me-2"></i>Kabaddi
                      </p>
                      <p>
                        <i class="fa fa-plus-square-o me-2"></i>Poptics
                      </p>
                      <p>
                        <i class="fa fa-plus-square-o me-2"></i>Casino
                      </p>
                      <p>
                        <i class="fa fa-plus-square-o me-2"></i>Sports book
                      </p>
                      <p>
                        <i class="fa fa-plus-square-o me-2"></i>Int Casino
                      </p>
                      <p>
                        <i class="fa fa-plus-square-o me-2"></i>Binary
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
    
    
    </div>
  )
}
