"use client";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {useEffect, useState} from "react";

export default function Home() {
  const[darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

  return (
    <div>
      <main className={"bg-white px-10"}>
         <section className={"min-h-screen"}>
             <nav className={"py-10 mb-12 flex justify-between"}>
                <h1 className={" text-xl"}>DeveloopedByKeshav</h1>
                 <ul className={" flex items-center"}>
                     <li>
                         <BsFillMoonStarsFill
                         onClick={() => setDarkMode(!darkMode)}
                         className={"cursor-pointer text-2xl"}/>
                     </li>
                     <li>
                         <a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href={"#"}>Resume</a>
                     </li>
                 </ul>
             </nav>
         </section>
      </main>

    </div>
  );
}
