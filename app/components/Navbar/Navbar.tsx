"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import Nav from "./Nav/Nav";

const defaultMenu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [menu, setMenu] = useState(defaultMenu);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  // Update menu styles based on screen width
  useEffect(() => {
    const updateMenuForScreenSize = () => {
      if (window.innerWidth <= 768) {
        setMenu({
          open: {
            width: "300px",
            height: "600px",
            top: "-10px",
            right: "-10px",
            transition: {
              duration: 0.75,
              type: "tween",
              ease: [0.76, 0, 0.24, 1],
            },
          },
          closed: {
            width: "80px",
            height: "30px",
            top: "0px",
            right: "0px",
            transition: {
              duration: 0.75,
              delay: 0.35,
              type: "tween",
              ease: [0.76, 0, 0.24, 1],
            },
          },
        });
      } else {
        setMenu(defaultMenu);
      }
    };

    // Initial call and add resize event listener
    updateMenuForScreenSize();
    window.addEventListener("resize", updateMenuForScreenSize);

    // Setup Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on whether hero is out of view
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0, // trigger as soon as any part of hero leaves viewport
        rootMargin: "0px",
      }
    );

    // Find and observe the hero section
    const heroElement = document.querySelector("#hero");
    if (heroElement) {
      observer.observe(heroElement);
      // @ts-ignore
      heroRef.current = heroElement;
    }

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("resize", updateMenuForScreenSize);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="header">
          <motion.div
            className="menu"
            variants={menu}
            animate={isActive ? "open" : "closed"}
            initial="closed"
          >
            <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
          </motion.div>
          <Button
            isActive={isActive}
            toggleMenu={() => {
              setIsActive(!isActive);
            }}
          />
        </div>
      )}
    </>
  );
}
