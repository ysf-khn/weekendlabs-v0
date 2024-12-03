import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div
      className=" bg-brandGreen text-black relative h-[500px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] -top-[100vh]">
        <div className="h-[500px] sticky top-[calc(100vh-500px)]">
          <div className="p-4 text-3xl">
            <h1 className="text-">
              We are your business's secret to the digital world
            </h1>
            <h1>Interested in working with us?</h1>
            <h1 className="underline">hello@weekendlabs.in</h1>

            <Image
              src="/LogoTextWhite.svg"
              alt="Weekend Labs Logo Big"
              height={1200}
              width={1200}
              className="absolute bottom-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
