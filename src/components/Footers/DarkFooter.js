/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav
        style={{
          margin: "auto",
          textAlign: "center",
          justifyContent: "center",
          position: "absolute",
          left: "10%",
        }}
        >
          <ul>
            <li>
              <a
                href="/council"
              >
                Council
              </a>
            </li>
            <li>
              <a
                href="https://www.cc.iitb.ac.in/"
                target="_blank"
              >
                Computer Centre
              </a>
            </li>
            <li>
              <a
                href="https://support.iitb.ac.in/support/login.jsp"
                target="_blank"
              >
                Maintenance
              </a>
            </li>
          </ul>
        </nav>
        <br /><br />
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Developed by Web Team &nbsp;| Hostel 6
          &nbsp;with ♥.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
