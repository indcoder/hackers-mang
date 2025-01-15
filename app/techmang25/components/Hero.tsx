"use client";

import Image from "next/image";
// import Register from "./Register";
import Venue from "./Venue";
import Link from "next/link";
import About from "./About";

const Hero = () => {
  return (
    <section className="flex flex-col gap-2 md:gap-4 py-4 md:py-6 px-2 bg-grainy">
      <div className="relative flex flex-1 flex-col nav-link-outline rounded-2xl gap-4 py-72 lg:py-60 flexCenter md:mx-2">
        <h1 className="text-5xl md:text-7xl lg:text-9xl text-[#9fb2b2] font-extrabold text-center">TechMang25</h1>
        <Image
          src="/ai-techverse/chevron-down.svg"
          alt="Arrow down"
          width={10}
          height={10}
          className="absolute bottom-20 h-5 w-5 animate-pulse self-center"
        />
      </div>
      <div id="main-content" className="relative flex flex-col gap-4 md:mx-2 rounded-3xl">
        <Venue />
        <About />
        {/* <Register /> */}
      </div>
    </section>
  );
}

export default Hero;
