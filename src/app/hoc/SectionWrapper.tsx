import { motion } from "framer-motion";
import { styles } from "../../lib/styles";
import { staggerContainer } from "../../utils/motion";

import React from "react";

// HOC
const StarWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  idName: string
) => {
  const HOC: React.FC<P> = (props) => {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };

  return HOC;
};

export default StarWrapper;
