"use client";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { Velustro } from "uvcanvas";

import Link from "next/link";
import TransitionLink from "@/app/Utilities/TransitionLink";

// const View = dynamic(
//   () => import("@/app/components/canvas/View").then((mod) => mod.View),
//   {
//     ssr: false,
//     loading: () => (
//       <div className="w-96 h-96 flex items-center justify-center">
//         <svg
//           className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
//           fill="none"
//           viewBox="0 0 24 24"
//         >
//           <circle
//             className="opacity-25"
//             cx="12"
//             cy="12"
//             r="10"
//             stroke="currentColor"
//             strokeWidth="4"
//           />
//           <path
//             className="opacity-75"
//             fill="currentColor"
//             d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//           />
//         </svg>
//       </div>
//     ),
//   }
// );

const Hero = () => {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const [isInView, setIsInView] = useState(false);

  const heroSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0.1, // 10% of the section must be visible
      }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initial animation to show pre-loader content
      const tl = gsap.timeline({
        onComplete: () => {
          // Add the animate-fill class to the h1 elements
          document.querySelectorAll(".hero-header h1").forEach((h1) => {
            h1.classList.add("animate-fill");
          });
        },
      });

      tl.fromTo(
        ".hero-pre-loader-header h1",
        {
          opacity: 0,
          y: 125,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
        }
      );

      tl.to(".hero-pre-loader-btn", {
        opacity: 1,
        duration: 0.5,
      });

      gsap.to(".hero-cta-center", {
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        duration: 0.6,
        delay: 3, // Same as 3000ms
      });
    }
  }, []);

  const revealSite = () => {
    if (typeof window !== "undefined") {
      const t1 = gsap.timeline();

      t1.to(".hero-pre-loader", {
        opacity: 0,
        display: "none",
        ease: "power2.inOut",
        duration: 1,
      });

      t1.to(
        ".hero-header-row",
        {
          top: "0",
          ease: "power4.inOut",
          stagger: 0.2,
          duration: 0.8,
        },
        "-=0.5"
      );

      t1.from(
        ".hero-navbar > *, .hero-footer",
        {
          y: 40,
          opacity: 0,
          ease: "power4.inOut",
          stagger: 0.2,
          duration: 1,
        },
        "-=0.5"
      );
    }
  };

  return (
    <section ref={heroSectionRef} className="hero-body" id="hero">
      {isPreloaderVisible && (
        <div className="hero-pre-loader">
          <div className="hero-pre-loader-container">
            <div className="hero-pre-loader-header">
              <div className="hero-header flex">
                <h1>Transform your online&nbsp;</h1>
                <h1 data-text="presence">presence</h1>
                <div className="hero-header-wrapper"></div>
              </div>

              <div className="hero-header flex">
                <h1>with&nbsp;</h1>
                <h1 data-text="stunning Websites">stunning Websites</h1>
                <div className="hero-header-wrapper"></div>
              </div>

              <div className="hero-header flex">
                <h1>seamless&nbsp;</h1>
                <h1 data-text="Ecommerce stores">Ecommerce stores</h1>
                <div className="hero-header-wrapper"></div>
              </div>

              <div className="hero-header flex">
                <h1>custom&nbsp;</h1>
                <h1 data-text="Logos">Logos</h1>
                <h1>&nbsp;and&nbsp;</h1>
                <h1 data-text="Designs">Designs</h1>
                <div className="hero-header-wrapper"></div>
              </div>

              <div className="hero-header flex">
                <h1>that capture your&nbsp;</h1>
              </div>

              <div className="hero-header flex">
                <h1>Brand&apos;s&nbsp;</h1>
                <h1 data-text="Essence">Essence</h1>
                <h1>&nbsp;and&nbsp;</h1>
                <h1 data-text="Drive Growth">Drive Growth</h1>
                <div className="hero-header-wrapper"></div>
              </div>
            </div>
            <div
              className="hero-pre-loader-btn hover:scale-110 transition-all"
              onClick={revealSite}
            >
              <div className="flex items-center space-x-2 bg-white text-black rounded-full p-4 animate-bounce">
                Dive In
                <ArrowRightIcon className=" ml-2 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rest of your existing content */}
      {/* @ts-ignore */}
      <Velustro className="animated-background" />

      {/* <ShaderGradientCanvas
        style={{
          position: "absolute",
          top: 0,
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%2300E96F&color2=%234F76F6&color3=%231F2B37&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1.5&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&toggleAxis=false&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.3&uStrength=4.2&uTime=0&wireframe=false&zoomOut=false"
        />
      </ShaderGradientCanvas> */}

      {/* @ts-ignore */}
      {/* <View>
        <Suspense fallback={null}>
          <ShaderGradient
            cDistance={24}
            color1="#ff5005"
            color2="#dbba95"
            color3="#d0bce1"
          />
        </Suspense>
      </View> */}

      <div className="hero-website-content">
        <div className="hero-navbar">
          <div className="hero-logo">
            <Image
              src="/LogoTextWhite.svg"
              height={250}
              width={250}
              alt="Weekend Labs Logo"
            />
          </div>

          <div className="space-x-7 lowercase">
            <Link href="/">Services</Link>
            <TransitionLink href="/about-us">About</TransitionLink>
            <Link href="/">Projects</Link>
            <Link href="/">Testimonials</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className="hero-site-header">
          <div className="hero-row">
            <div className="hero-header-row">
              websites <span>that</span>impress
            </div>
            {/* <div className="hero-header-row-wrapper"></div> */}
          </div>
          <div className="hero-row">
            <div className="hero-header-row">
              stores <span> that</span>sell
            </div>
            {/* <div className="hero-header-row-wrapper"></div> */}
          </div>

          <div className="hero-row">
            <div className="hero-header-row">
              logos<span> that</span>define
            </div>
            {/* <div className="hero-header-row-wrapper"></div> */}
          </div>
          <div className="hero-row">
            <div className="hero-header-row">
              designs <span> that</span>inspire
            </div>
            {/* <div className="hero-header-row-wrapper"></div> */}
          </div>
        </div>
        <div className="hero-footer">
          From sleek websites to powerful ecommerce stores, from unforgettable
          logos to inspiring designs, we help your business stand out and grow.
        </div>
      </div>
    </section>
  );
};

export default Hero;
