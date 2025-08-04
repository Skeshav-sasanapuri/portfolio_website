import React from 'react'
import {motion} from "framer-motion";

// My first component. This takes arguments href (link) and text (name of button)
const NavLink = ({href, Icon, text}) => {
  // Define class names. It will use it for all the options in navbar
  const LinkClasses = "items-center text-[#333] px-4 py-2 rounded-4xl ml-5 my-1 transition-transform duration-200 hover:shadow-xl";

  return (
    <motion.li
      whileHover={{y: -4, scale: 1.02}}
      transition={{duration: 0.2}}
      whileTap={{scale: 0.96}}
    >
      <motion.a
        className={LinkClasses} href={href}
      >
        {/*{Icon ? <Icon className="text-xl"/>: text}*/}
        {text}
      </motion.a>
    </motion.li>
  );
};

export default NavLink;