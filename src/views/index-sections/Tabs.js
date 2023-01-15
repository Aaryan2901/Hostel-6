import React, { useEffect, useState } from "react";
import axios from "axios";
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [data, setData] = useState();
  // const getData = async () => {
  //   try{
  //     const res = await fetch(
  //       "http://127.0.0.1/:1337/"
  //     );
  //     const data = await res.json();
  //     console.log("THIS IS THE DATA: ",data);
  //     setData(data);
  //   } catch(e){
  //     console.log(e);
  //   }
  // }

  useEffect(() => {
    // getData();
    axios
      .get("http://localhost:1337/")
      .then((res) => {
        // data = res.data;
        setData(res.data.values);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);
  const [iconPills, setIconPills] = React.useState("0");
  // const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs text-center">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="12">
              <p className="category">Weekly Mess Menu</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        {/* <i className="now-ui-icons objects_umbrella-13"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="20px"
                        >
                          <path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z" />
                        </svg>
                        &nbsp;Monday
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        {/* <i className="now-ui-icons shopping_cart-simple"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width="20px"
                        >
                          <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
                        </svg>
                        &nbsp;Tuesday
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        {/* <i className="now-ui-icons shopping_shop"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="20px"
                        >
                          <path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm240 16c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16zM272 96c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z" />
                        </svg>
                        &nbsp;Wednesday
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        {/* <i className="now-ui-icons ui-2_settings-90"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="20px"
                        >
                          <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 272c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm128 64c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zM160 384c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                        </svg>
                        &nbsp;Thursday
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "5" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("5");
                        }}
                      >
                        {/* <i className="now-ui-icons ui-2_settings-90"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="20px"
                        >
                          <path d="M176 56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24zm24 48h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zM56 176H72c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24zM0 283.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4zM224 200c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24zm-96 0c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H104c-13.3 0-24-10.7-24-24s10.7-24 24-24zm216 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24zm120 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H392c-13.3 0-24-10.7-24-24s10.7-24 24-24zM296 32h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                        </svg>
                        &nbsp;Friday
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "6" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("6");
                        }}
                      >
                        {/* <i className="now-ui-icons ui-2_settings-90"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          width="20px"
                        >
                          <path d="M335.1 160c.6-5.3 .9-10.6 .9-16C336 64.5 271.5 0 192 0S48 64.5 48 144c0 5.4 .3 10.7 .9 16H48c-26.5 0-48 21.5-48 48s21.5 48 48 48h53.5 181H336c26.5 0 48-21.5 48-48s-21.5-48-48-48h-.9zM64 288L168.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L320 288H64z" />
                        </svg>
                        &nbsp;Saturday
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "7" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("7");
                        }}
                      >
                        {/* <i className="now-ui-icons ui-2_settings-90"></i> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          width="20px"
                        >
                          <path d="M64 0C47.4 0 33.5 12.8 32.1 29.3l-14 168.4c-6 72 42.5 135.2 109.9 150.6V448H80c-17.7 0-32 14.3-32 32s14.3 32 32 32h80 80c17.7 0 32-14.3 32-32s-14.3-32-32-32H192V348.4c67.4-15.4 115.9-78.6 109.9-150.6l-14-168.4C286.5 12.8 272.6 0 256 0H64zM88.1 128l5.3-64H226.6l5.3 64H88.1z" />
                        </svg>
                        &nbsp;Sunday
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <Row>
                        <Col>
                          <Row>
                            <b>
                              <u>Breakfast</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[0]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Lunch</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[1]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Snacks</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[2]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Dinner</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[3]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane tabId="iconPills2">
                      <Row>
                        <Col>
                          <Row>
                            <b>
                              <u>Breakfast</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[4]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Lunch</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[5]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Snacks</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[6]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Dinner</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[7]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <Row>
                        <Col>
                          <Row>
                            <b>
                              <u>Breakfast</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[8]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Lunch</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[9]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Snacks</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[10]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Dinner</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[11]}
                              </Badge>
                            </Row>
                          ))}{" "}
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <Row>
                        <Col>
                          <Row>
                            <b>
                              <u>Breakfast</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[12]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Lunch</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[13]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Snacks</u>
                            </b>
                          </Row>

                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[14]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Dinner</u>
                            </b>
                          </Row>

                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[15]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="iconPills5">
                      <Row>
                        <Col>
                          <Row>
                            <b>
                              <u>Breakfast</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[16]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Lunch</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[17]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Snacks</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[18]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Dinner</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[19]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="iconPills6">
                      <Row>
                        <Col>
                          <Row>
                            <b>
                              <u>Breakfast</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[20]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Lunch</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[21]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Snacks</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[22]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Dinner</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[23]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="iconPills7">
                      <Row>
                        <Col>
                          <Row>
                            <b>
                              <u>Breakfast</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[24]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Lunch</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[25]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Snacks</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[26]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                        <Col>
                          <Row>
                            <b>
                              <u>Dinner</u>
                            </b>
                          </Row>
                          {data?.map((item, i) => (
                            <Row id={i}>
                              <Badge color="primary" className="mr-1">
                                {item[27]}
                              </Badge>
                            </Row>
                          ))}
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
