"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useModal } from "@/app/Utilities/ModalContext";

const Card = ({
  i,
  title,
  description,
  image,
  url,
  color,
  textColor,
  progress,
  range,
  targetScale,
}: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const { toggleModal } = useModal();

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          // top: `calc(-5vh + ${i * 25}px)`,
          top: `calc(0vh + ${i * 10}px)`,
          color: textColor,
        }}
        className={styles.card}
      >
        <h2 className="uppercase font-bold">{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
            <button
              className={`border px-3 py-1 rounded-md  mt-2 md:mt-5 border-${textColor}`}
              onClick={toggleModal}
            >
              Get Started
            </button>
          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 35%",
                }}
                src={image}
                alt="image"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
