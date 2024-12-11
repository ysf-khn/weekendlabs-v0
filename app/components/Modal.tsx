import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { shimmer, toBase64 } from "../Utilities/shimmer";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, projects }: any) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  // useEffect(() => {
  //   //Move Container
  //   let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
  //     duration: 0.8,
  //     ease: "power3",
  //   });
  //   let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
  //     duration: 0.8,
  //     ease: "power3",
  //   });
  //   //Move cursor
  //   let xMoveCursor = gsap.quickTo(cursor.current, "left", {
  //     duration: 0.5,
  //     ease: "power3",
  //   });
  //   let yMoveCursor = gsap.quickTo(cursor.current, "top", {
  //     duration: 0.5,
  //     ease: "power3",
  //   });
  //   //Move cursor label
  //   let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
  //     duration: 0.45,
  //     ease: "power3",
  //   });
  //   let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
  //     duration: 0.45,
  //     ease: "power3",
  //   });

  //   window.addEventListener("mousemove", (e) => {
  //     const { pageX, pageY } = e;
  //     xMoveContainer(pageX);
  //     yMoveContainer(pageY);
  //     xMoveCursor(pageX);
  //     yMoveCursor(pageY);
  //     xMoveCursorLabel(pageX);
  //     yMoveCursorLabel(pageY);
  //   });
  // }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      gsap.to(modalContainer.current, {
        left: pageX,
        top: pageY,
        duration: 0.8,
        ease: "power3",
      });
      gsap.to(cursor.current, {
        left: pageX,
        top: pageY,
        duration: 0.5,
        ease: "power3",
      });
      gsap.to(cursorLabel.current, {
        left: pageX,
        top: pageY,
        duration: 0.45,
        ease: "power3",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Important: Cleanup event listener to prevent memory leaks
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="modalContainer"
      >
        <div style={{ top: index * -100 + "%" }} className="modalSlider">
          {projects.map((project: any, index: any) => {
            const { src, color } = project;
            return (
              <div
                className="modal"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <Image
                  src={src}
                  width={300}
                  height={0}
                  alt="image"
                  priority
                  placeholder="blur"
                  blurDataURL={`data:image/png;base64,${toBase64(
                    shimmer(300, 200)
                  )}`}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className="cursor"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className="cursorLabel"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
}
