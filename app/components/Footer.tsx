"use client";

import Image from "next/image";
import React from "react";
import EmailContactLink from "./EmailContactLink";

export default function Footer() {
  return (
    <div
      className=" bg-brandGreen text-black relative h-[600px] md:h-[500px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+850px)] -top-[130vh]  md:h-[calc(100vh+500px)] md:-top-[100vh]">
        <div className="h-[550px] md:h-[500px] sticky top-[calc(100vh-550px)] md:top-[calc(100vh-500px)]">
          <div className="p-4 text-3xl">
            <div className="md:flex justify-between">
              <div>
                <h1 className="text-xl md:text-4xl mb-2">
                  We are your business&apos;s secret to the digital world.
                </h1>
                <h1 className="text-xl md:text-3xl">
                  Interested in working with us?
                </h1>
                <h1 className="underline decoration-white mt-3 text-lg md:text-3xl">
                  <EmailContactLink />
                </h1>
                <h1 className="mt-2 underline decoration-white w-fit text-lg md:text-3xl">
                  <a
                    href="https://wa.me/919997035168?text=Hi%20Yusuf,%20I%20would%20like%20to%20know%20more%20about%20the%20services%20offered%20by%20Weekend%20Labs."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on WhatsApp
                  </a>
                </h1>
              </div>
              <div className="mt-24 md:mt-0 text-right">
                <h1 className="text-lg text-white">Version</h1>
                <h1 className="text-lg md:text-xl">2024 © Weekend Labs</h1>

                <div className="mt-4">
                  <p className="text-lg text-white">Socials</p>
                  <a
                    href="https://instagram.com/weekend_labs"
                    className="text-lg md:text-xl underline decoration-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center absolute bottom-2 left-0 right-0 p-4 md:p-0">
              <Image
                src="/LogoTextWhite.svg"
                alt="Weekend Labs Logo Big"
                height={1200}
                width={1200}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
