import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section"
      style={{
        // backgroundImage: "url(" + require("assets/img/3.jpg") + ")",
        backgroundColor: "aliceblue",
        backgroundPositionY: "0%",
        backgroundSize: "cover",
        filter: "hue-rotate(45deg)"
      }}
    >
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title" style={{color: "rgba(0,0,0,0.8)"}}>COMPLAINTS, FEEDBACKS AND SUGGESTIONS FORM!</h2>
              <h5 className="description" style={{color:"gray"}}>
                Hostel Council aims to provide the best possible experience, but still if you face any kind of problems or have any kind of complaints(LAN, Maintenance, etc.) kindly submit here. Also Feedbacks and suggestions are always welcomed.
              </h5>
              <Button
                className="btn-round mr-1" 
                color="danger"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeOFymw-ZVlDh0VMS87k9AYpRFOWOomLzbh8m6yP8O2fOPywg/viewform"
                size="lg"
                target="_blank"
              >
                CLICK HERE
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
