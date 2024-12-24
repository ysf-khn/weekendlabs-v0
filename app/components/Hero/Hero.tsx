"use client";
import { BackgroundGradientAnimation } from "@/app/Utilities/bggradientanimation";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Velustro } from "uvcanvas";

const Hero = () => {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const heroSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const preloaderShown = sessionStorage.getItem("preloaderShown");

    if (preloaderShown) {
      // If preloader was shown before, immediately set the final states
      setIsPreloaderVisible(false);

      // Apply final styles immediately for returning visitors
      const headerRows = document.querySelectorAll(".hero-header-row");
      headerRows.forEach((row) => {
        if (row instanceof HTMLElement) {
          row.style.top = "0";
          row.style.opacity = "1";
        }
      });

      const textContent = document.querySelector(".hero-text-content");
      if (textContent instanceof HTMLElement) {
        textContent.style.opacity = "1";
      }

      const navAndFooter = document.querySelectorAll(
        ".hero-navbar > *, .hero-footer"
      );
      navAndFooter.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        // @ts-ignore
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && isPreloaderVisible) {
      const tl = gsap.timeline({
        onComplete: () => {
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
        delay: 3,
      });
    }
  }, [isPreloaderVisible]);

  const revealSite = () => {
    if (typeof window !== "undefined") {
      const tl = gsap.timeline({
        onComplete: () => {
          // Store the state after all animations are complete
          sessionStorage.setItem("preloaderShown", "true");
          document.body.classList.remove("lock-scroll");
          setIsPreloaderVisible(false);
        },
      });

      tl.to(".hero-pre-loader", {
        opacity: 0,
        display: "none",
        ease: "power2.inOut",
        duration: 1,
      })
        .to(
          ".hero-text-content",
          {
            opacity: 1,
            ease: "power4.inOut",
            duration: 1,
          },
          "-=0.5"
        )
        .to(
          ".hero-header-row",
          {
            top: "0",
            ease: "power4.inOut",
            stagger: 0.2,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
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

  useEffect(() => {
    if (isPreloaderVisible) {
      document.body.classList.add("lock-scroll");
    }
  }, [isPreloaderVisible]);

  return (
    <>
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
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="hero-wrapper">
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white  px-4 text-center pointer-events-none">
            <div
              className="hero-text-content"
              style={{ opacity: isPreloaderVisible ? 0 : 1 }}
            >
              <div className="hero-website-content">
                <div className="hero-site-header">
                  <div className="hero-row">
                    <div className="hero-header-row">
                      websites <span>that</span>impress
                    </div>
                  </div>

                  <div className="hero-row">
                    <div className="hero-header-row">
                      stores <span>that</span>sell
                    </div>
                  </div>

                  <div className="hero-row">
                    <div className="hero-header-row">
                      logos <span>that</span>define
                    </div>
                  </div>

                  <div className="hero-row">
                    <div className="hero-header-row">
                      designs <span>that</span>inspire
                    </div>
                  </div>
                </div>
                <div className="hero-footer text-center">
                  <div>
                    From sleek websites to powerful ecommerce stores, from
                    unforgettable logos to inspiring designs, we help your
                    business stand out and grow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundGradientAnimation>

        {/* <section ref={heroSectionRef} className="hero-body" id="hero">
          <div className="grain-container">
            <Velustro className="animated-background" />
            <div className="grain-overlay"></div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Hero;
