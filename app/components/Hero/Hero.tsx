"use client";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import gsap from "gsap";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

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
    <section className="hero-body">
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
                <h1>Brand's&nbsp;</h1>
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
      <div className="hero-website-content">
        <div className="hero-navbar">
          <div className="hero-logo">Chiara Luzzana</div>
          <div className="hero-menu-icon">Menu</div>
        </div>
        <div className="hero-site-header">
          <div className="hero-row">
            <div className="hero-header-row">
              <span>the</span>purity
            </div>
            {/* <div className="hero-header-row-wrapper"></div> */}
          </div>
          <div className="hero-row">
            <div className="hero-header-row">
              <span>of</span>noise
            </div>
            {/* <div className="hero-header-row-wrapper"></div> */}
          </div>
        </div>
        <div className="hero-footer">Everyday life is her sound</div>
      </div>
    </section>
  );
};

export default Hero;
