"use client";

import React from 'react';
import { motion } from 'framer-motion';

const paths = [
  'M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875',
  'M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867',
  // Add remaining paths here...
];

const BackgroundPattern = () => {
  return (
    <div className="position-relative d-flex align-items-center justify-content-center h-100 w-100 overflow-hidden">
      <svg
        className="position-absolute w-100 h-100 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 696 316"
        fill="none"
      >
        <defs>
          {paths.map((_, index) => (
            <linearGradient
              id={`linearGradient-${index}`}
              x1="100%"
              x2="100%"
              y1="100%"
              y2="100%"
              key={index}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="32.5%" stopColor="#6344F5" />
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        <motion.g>
          {paths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.4"
              strokeWidth="0.5"
              animate={{
                pathLength: [0, 1],
                pathOffset: [1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
};

export default BackgroundPattern;