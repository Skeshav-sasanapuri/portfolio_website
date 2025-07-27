"use client";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {useState} from "react";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube
} from "react-icons/ai";
import Image from "next/image";
import keshavdp from "../public/keshav-dp-test.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const[darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className={" min-h-screen"}>
          <nav className="py-5 mb-12 mt-12 flex justify-between rounded-xl">
            <h1 className="text-xl font-burtons dark:text-gray-300">develoopedbykeshav</h1>
            <ul className="flex items-center">
              <div className="shadow-lg p-1 rounded-xl dark:bg-white">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className={"cursor-pointer text-2xl"}/>
                </li>
              </div>
              <li>
                <a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                   href={"#"}
                >
                Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Keshav Sasanapuri
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Programmer and Awesome
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
                PhD Imaging Science with MS CS and BS Math and Statistics.
                What more could you ask for at this point ya know?
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={keshavdp} alt={"Image of Keshav"} fill objectFit="cover" className="object-cover object-[10%_center]"/> //if you want to scale image, add scale-100
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              This is some fake text I have added to fill this gap. Please replace this with original text.
              If you forget to replace it, the people visiting this page or going to see this text and laugh thinking
              <span className="text-teal-500"> that </span> you forgot to replace this text. Now, did I actually forgot
              or was this text added <span className="text-teal-500"> intentionally? </span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Did I simply add the previous sentence so that it is an easy escape if i forget the text and people
              think I <span className="text-teal-500"> intentionally </span> forgot rather than actually forgetting. The conclusion is that you will never know
              if I have bad memory or if I am a mastermind XD.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} alt={"design image"} width={100} height={100} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Replace this with skills suitable to you. This is just
                from the tutorial
              </p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} alt={"code image"} width={100} height={100} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Replace this with skills suitable to you. This is just
                from the tutorial
              </p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} alt={"consulting image"} width={100} height={100} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Replace this with skills suitable to you. This is just
                from the tutorial
              </p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              This is some fake text I have added to fill this gap. Please replace this with original text.
              If you forget to replace it, the people visiting this page or going to see this text and laugh thinking
              <span className="text-teal-500"> that </span> you forgot to replace this text. Now, did I actually forgot
              or was this text added <span className="text-teal-500"> intentionally? </span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Did I simply add the previous sentence so that it is an easy escape if i forget the text and people
              think I <span className="text-teal-500"> intentionally </span> forgot rather than actually forgetting. The
              conclusion is that you will never know
              if I have bad memory or if I am a mastermind XD.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} alt={"web1 image"} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} alt={"web2 image"} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} alt={"web3 image"} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} alt={"web4 image"} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} alt={"web5 image"} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} alt={"web6 image"} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
