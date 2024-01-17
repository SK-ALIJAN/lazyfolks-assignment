import React, { useRef } from "react";
import NavLinks from "./NavLinks";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const Links = [
    { link: "How it work", to: "/how-it-work" },
    { link: "All apps", to: "/all-apps" },
    { link: "Pricing", to: "/pricing" },
    { link: "For teams", to: "/teams" },
    { link: "Blogs", to: "/blogs" },
    { link: "Sign in", to: "/login" },
  ];

  return (
    <div className={styles.container}>
      <Link to={"/"} className={styles.header}>
        SETAPP
      </Link>

      <div className={styles.hamburger}>
        <HiOutlineMenuAlt4 />
      </div>

      <div className={styles.allLinks}>
        <div className={styles.cross}>
          <MdCancel />
        </div>
        {Links.map((ele, i) => {
          return <NavLinks {...ele} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Navbar;
