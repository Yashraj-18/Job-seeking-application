import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By CodeWithZeeshu.</div>
      <div>
        <Link to={"link padegi iski jagah"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"link padegi iski jagah"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"link padegi iski jagah"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"link padegi iski jagah"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;