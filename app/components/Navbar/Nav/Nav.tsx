import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anim";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-body">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className="linkContainer">
              <motion.a
                href={href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a>{title}</a>
              </motion.a>
            </div>
          );
        })}
      </div>
      <motion.div className="footer">
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
