"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useModal } from "@/app/Utilities/ModalContext";
import EmailContactLink from "../EmailContactLink";
import AnimatedButton from "@/app/Utilities/AnimatedButton";
const menuLinks = [
  {
    path: "/#hero",
    label: "Home",
  },
  {
    path: "/#services",
    label: "Services",
  },
  {
    path: "/about-us",
    label: "About",
  },
  {
    path: "/#projects",
    label: "Projects",
  },
  {
    path: "/#footer",
    label: "Contact",
  },
];
const Menu = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const { toggleModal } = useModal();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menuLinkItemHolder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menuOverlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menuLinkItemHolder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <div className="menuContainer" ref={container}>
      <div className="menuBar">
        <div className="menuLogo">
          <Link href="/">
            <Image
              src="/LogoTextWhite.svg"
              height={150}
              width={150}
              alt="Weekend Labs Logo"
              priority={false}
            />
          </Link>
        </div>
        <div className="flex items-center justify-between gap-4">
          <AnimatedButton toggleModal={toggleModal} />
          {/* <button
            className="menuOpen border border-white rounded-md px-4 py-2"
            onClick={toggleMenu}
          >
            <p>Menu</p>
          </button> */}
          <button
            className="menuOpen text-red hover:before:bg-redborder-red-500 relative overflow-hidden border border-white rounded-md bg-black px-4 py-2 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:shadow-none hover:before:left-0 hover:before:w-full"
            onClick={toggleMenu}
          >
            <span className="relative z-10">Menu</span>
          </button>
        </div>
      </div>
      <div className="menuOverlay">
        <div className="menuOverlayBar">
          <div className="menuLogo">
            <Link href="/">
              <Image
                src="/logoBlackWhiteDot.svg"
                height={150}
                width={150}
                alt="Weekend Labs Logo"
                priority={false}
              />
            </Link>
          </div>
          <div className="menuClose" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>
        <div className="menuCloseIcon">
          <p>&#x2715;</p>
        </div>
        <div className="menuCopy">
          <div className="menuLinks">
            {menuLinks.map((link, index) => (
              <div className="menuLinkItem" key={index}>
                <div className="menuLinkItemHolder" onClick={toggleMenu}>
                  <Link href={link.path} className="menuLink">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menuInfo">
            <div className="menuInfoCol">
              {/* <a href="#">X &#8599;</a> */}
              <a
                href="https://instagram.com/weekend_labs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white"
              >
                Instagram &#8599;
              </a>
            </div>
            <div className="menuInfoCol">
              <div className="underline decoration-white">
                <EmailContactLink />
              </div>
            </div>
          </div>
        </div>
        <div className="menuPreview">
          <p className="">everything software.</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
