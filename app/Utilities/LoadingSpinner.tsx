import Image from "next/image";
import React, { useEffect, useState } from "react";

const LoadingSpinner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check both preloaderShown and if we're on mobile
    const preloaderShown = sessionStorage.getItem("preloaderShown") === "true";
    const isMobile = window.innerWidth < 768;

    // If preloader has been shown or we're not on mobile, hide the spinner
    if (preloaderShown || !isMobile) {
      setIsVisible(false);
      document.body.classList.remove("lock-scroll");
    }

    // Set a timeout to hide the spinner after 2.4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove("lock-scroll");
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("lock-scroll");
    };
  }, []);

  useEffect(() => {
    // Add lock-scroll when spinner is visible
    if (isVisible) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }

    // Cleanup
    return () => {
      document.body.classList.remove("lock-scroll");
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed inset-0 bg-black flex flex-col items-center justify-center z-[10001]">
      <div className="relative">
        <Image
          src="/LogoWhite.svg"
          alt="Loading"
          className="animate-pulse"
          height={64}
          width={64}
        />
      </div>
      <p className="text-white mt-6 text-xl font-medium animate-pulse">
        Building your experience...
      </p>
    </div>
  );
};

export default LoadingSpinner;
