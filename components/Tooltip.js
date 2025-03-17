import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tooltip = ({ children, tooltipText, linkText, linkHref }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="tooltip-container"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {tooltipText}{" "}
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;