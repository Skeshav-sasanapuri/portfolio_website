import React from 'react'
import {motion} from "framer-motion";
import NavLink from "@/components/NavLink";
import {HiHome} from "react-icons/hi";

// Define navigation links data as an array of objects
const navItems = [
  {href:"#home", Icon: HiHome, text: "Home"},
  {href:"#projects", text: "Projects"},
  {href:"#research", text: "Research"},
  {href:"#experience", text: "Experience"},
  {href:"#resume", text: "Resume"},
];

const Navbar = () => {
  // Define class names. It will use it for all the navbar ui elements
  const navBar_ui = "flex bg-[#d3d3d3]/35 fixed left-1/2 w-full max-w-4xl items-center " +
      "border-2 border-[#7d7d7d2b] top-6 ml-10 mr-10 px-6 py-4 z-50 rounded-4xl backdrop-blur-sm lg:justify-center md:justify-between sm:justify-center"

  const shadow_nav = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"

  return (
    <motion.nav
      className={navBar_ui}
      whileHover={{scale: 1.03, boxShadow: shadow_nav, backgroundColor: "#d3d3d3B3"}}
      transition={{duration:0.2}}
      style={{x: "-50%"}}
    >
      {/*<div className="flex justify-between">*/}
        <ul className="flex items-center overflow-visible">
          {navItems.slice(0, 1).map((item) => (
              <NavLink key={item.href} {...item}/>
          ))}
        </ul>
        <ul className="flex items-center overflow-visible">
          {navItems.slice(1).map((item) => (
              <NavLink key={item.href} {...item}/>
          ))}
        </ul>
      {/*</div>*/}
    </motion.nav>
  );
};

export default Navbar;