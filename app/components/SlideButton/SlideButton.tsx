"use client";
import { useModal } from "@/app/Utilities/ModalContext";
import { usePreloader } from "@/app/Utilities/PreLoaderContext";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

const SlideButton = () => {
  const { isPreloaderVisible } = usePreloader();

  const [isOpen, setIsOpen] = useState(false);

  const { isModalOpen, toggleModal } = useModal();

  return (
    <div className={isPreloaderVisible || isModalOpen ? "hidden" : "block"}>
      <div className="md:hidden fixed top-1/2 right-0 -translate-y-1/2 z-[20000]">
        <div
          className={`flex items-center transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Arrow Toggle - Now part of the sliding group */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-black text-white px-2 py-4 rounded-l-md -ml-10" // -ml-10 makes it stick out
            aria-label={isOpen ? "Close panel" : "Open panel"}
          >
            <ChevronLeftIcon
              className={`transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              height={24}
              width={24}
            />
          </button>

          {/* Main Button Content */}
          <button
            className="bg-black text-white p-4"
            onClick={() => {
              toggleModal();
              setIsOpen(!isOpen);
            }}
          >
            Get Started NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideButton;
