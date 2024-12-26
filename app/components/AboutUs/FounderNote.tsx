import Image from "next/image";
import React from "react";

const FounderNote = () => {
  return (
    <section className="bg-black py-24 px-2 md:px-10">
      <div className="text-[2rem] text-white md:text-[5rem] text-center font-semibold md:leading-[6rem]">
        &quot;We craft impactful experiences with innovative design, tailored
        solutions, and bold execution, transforming possibilities for businesses
        ready to stand out and thrive.&quot;
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/yusuf.jpg"
          height={350}
          width={350}
          alt="Founder's Image"
          className="hidden md:blockrounded-[3rem] mt-[3rem]"
        />

        <Image
          src="/yusuf.jpg"
          height={200}
          width={200}
          alt="Founder's Image"
          className="block md:hidden rounded-[1rem] mt-[3rem]"
        />
        <p className="mt-[3rem] font-bold text-xl md:text-3xl text-white">
          Mohammad Yusuf Khan
        </p>
        <p className="text-xl md:text-3xl text-white">Founder</p>
      </div>
    </section>
  );
};

export default FounderNote;
