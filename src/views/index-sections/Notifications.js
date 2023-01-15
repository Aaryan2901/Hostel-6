import React, { useEffect, useState } from "react";

// reactstrap components
import { Alert, ButtonToggle, Container } from "reactstrap";

import axios from "axios";
// core components

function Notifications() {
  const [notifications, message] = useState("");
  
  function api(){
    axios
      .get("http://localhost:1337/notifications/")
      .then((res) => {
        message(res.data.values);
        console.log("POKEMOn", notifications);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  api();
  // useEffect(() => {
    
  // }, [notifications]);
  // const [alert1, setAlert1] = React.useState(true);
  // const [alert2, setAlert2] = React.useState(true);
  // const [alert3, setAlert3] = React.useState(true);
  // const [alert4, setAlert4] = React.useState(true);
  return (
    <>
      <div className="section section-notifications text-center">
        <h3 style={{ fontWeight: "bolder", fontFamily: "cursive" }}>
          Notifications
        </h3>
        <Alert
          style={{
            background:
              " linear-gradient(to right,black,  rgb(81, 83, 104), black)",
          }}
        >
          <Container>
            <strong>{notifications[0]}</strong>
          </Container>
        </Alert>
        <Alert
          style={{
            background:
              " linear-gradient(to right,black,  rgb(81, 83, 104), black)",
          }}
        >
          <Container>
            <strong>{notifications[1]}</strong>
          </Container>
        </Alert>
        <Alert
          style={{
            background:
              " linear-gradient(to right,black,  rgb(81, 83, 104), black)",
          }}
        >
          <Container>
            <strong>{notifications[2]}</strong>
          </Container>
        </Alert>
      </div>
    </>
  );
}

export default Notifications;
