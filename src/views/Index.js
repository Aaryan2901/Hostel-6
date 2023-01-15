import React, { useEffect, useState } from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import "../assets/css/loader.css";
// sections for this page
// import Images from "./index-sections/Images.js";
// import BasicElements from "./index-sections/BasicElements.js";
// import Navbars from "./index-sections/Navbars.js";
// import Tabs from "./index-sections/Tabs.js";
// import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
// import Typography from "./index-sections/Typography.js";
// import Javascript from "./index-sections/Javascript.js";
// import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
// import SignUp from "./index-sections/SignUp.js";
// import Examples from "./index-sections/Examples.js";
// import Download from "./index-sections/Download.js";
import { motion } from "framer-motion";
function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, 3500);
  });
  return (
    <>
      <motion.div
        animate={{ height: [900, 0] }}
        transition={{ ease: "easeOut", delay: 1, duration: 2 }}
        exit={{ opacity: 0 }}
        className={`text-justify insti text-white ${loading ? "block" : ""}`}
      >
        <motion.h1
          initial={{ x: "-60%" }}
          animate={{ x: 0 }}
          transition={{
            x: { duration: 0.8 },
            default: { ease: "linear" },
          }}
          style={{ fontSize: "6rem", position: "relative", top: "15%" }}
        >
          INSTI <br />
          KA <br />
          BAAP <br />
          KAUN?
        </motion.h1>
      </motion.div>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <NucleoIcons />
          <Notifications />
          <CompleteExamples />
          {/* <Images /> */}
          {/* <Tabs /> */}
          {/* 
          <BasicElements />
          <Navbars />
          <Pagination />
          <Typography />
          <Javascript />
          <Carousel />
          <SignUp />
          <Examples />
          <Download /> */}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
