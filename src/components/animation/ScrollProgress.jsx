

import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 origin-left bg-blue-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollProgress;