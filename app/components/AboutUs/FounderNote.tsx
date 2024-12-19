import Image from "next/image";
import React from "react";

const FounderNote = () => {
  return (
    <section className="bg-black py-24 px-10">
      <div className="text-[5rem] text-center font-semibold leading-[6rem]">
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
          className="rounded-[3rem] mt-[3rem]"
        />
        <p className="mt-[3rem] font-bold text-3xl">Mohammad Yusuf Khan</p>
        <p className="text-3xl">Founder</p>
      </div>
    </section>
  );
};

export default FounderNote;
