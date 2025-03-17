// components/Dialog.js
"use client";
import React from 'react';
const HomeBanner = () => (
  <div>
    <svg aria-hidden="true" height="100%" viewBox="-1 -1 802 802" width="100%" alt="Cloud Communication APIs">
      <g data-testid="globe-wireframe">
        <circle cx="400" cy="400" fill="#fff" r="400" stroke></circle>
        <path d="M 400 800 A -400 400 0 0 0 400 0" fill="none" stroke="#EEF0FF" stroke-width="2" vector-effect="non-scaling-stroke"></path>
        <path d="M 400 800 A -266.667 400 0 0 0 400 0" fill="none" stroke="#EEF0FF" stroke-width="2" vector-effect="non-scaling-stroke"></path>
        <path d="M 400 800 A -133.333 400 0 0 0 400 0" fill="none" stroke="#EEF0FF" stroke-width="2" vector-effect="non-scaling-stroke"></path>
        <path d="M 400 800 A 0 400 0 0 0 400 0" fill="none" stroke="#EEF0FF" stroke-width="2" vector-effect="non-scaling-stroke"></path>
        <path d="M 400 0 A 133.333 400 0 0 0 400 800" fill="none" stroke="#EEF0FF" stroke-width="2" vector-effect="non-scaling-stroke"></path>
        <path d="M 400 0 A 266.667 400 0 0 0 400 800" fill="none" stroke="#EEF0FF" stroke-width="2" vector-effect="non-scaling-stroke"></path>
        <path d="M 400 0 A 400 400 0 0 0 400 800" fill="none" stroke="#EEF0FF" stroke-width="2" vector-effect="non-scaling-stroke"></path>
        <path d="M101.858,133.333 h596.285" fill="none" stroke="#EEF0FF" stroke-width="2" vector-effect="non-scaling-stroke"></path>
        <path d="M22.876,266.667 h754.247" fill="none" stroke="#EEF0FF" stroke-width="2" vector-effect="non-scaling-stroke"></path>
        <path d="M0,400 h800" fill="none" stroke="#EEF0FF" stroke-width="2" vector-effect="non-scaling-stroke"></path>
        <path d="M22.876,533.333 h754.247" fill="none" stroke="#EEF0FF" stroke-width="2" vector-effect="non-scaling-stroke"></path>
        <path d="M101.858,666.667 h596.285" fill="none" stroke="#EEF0FF" stroke-width="2" vector-effect="non-scaling-stroke"></path>
      </g>
      <g id="rdr-21" mask="url(#globe-gradient-mask)" opacity="1">
        <path
          d="M148.584,266.667 h125.708M 274.292 266.667 A -133.333 400 0 0 0 266.667 400M266.667,400 h133.333"
          fill="none"
          stroke="url(#rdr-21-gradient)"
          stroke-linecap="round"
          stroke-width="2"
          vector-effect="non-scaling-stroke"
        >
          <animate
            attributeName="opacity"
            dur="3.9s"
            id="opacity-rdr-21"
            keyTimes="0;0.098;0.196;0.294;0.392;0.49;1"
            repeatCount="indefinite"
            values="0;0;0;1;1;1;1"
          ></animate>
        </path>
        <defs>
          <radialGradient
            cx="400"
            cy="400"
            gradientUnits="userSpaceOnUse"
            id="rdr-21-gradient"
            r="66.667"
            style={{ color: '#1a73e9' }}
          >
            <stop offset="0" stop-color="#1a73e9"></stop>
            <stop offset="0.4" stop-color="#1a73e9"></stop>
            <stop offset="1" stop-color="#1a73e9" stop-opacity="0"></stop>
            <animate
              attributeName="cx"
              dur="3.9s"
              id="cx-rdr-21"
              keyTimes="0;0.098;0.196;0.294;0.392;0.49;1"
              repeatCount="indefinite"
              values="400;400;266.667;274.292;148.584;148.584;0"
            ></animate>
            <animate
              attributeName="cy"
              dur="3.9s"
              id="cy-rdr-21"
              keyTimes="0;0.098;0.196;0.294;0.392;0.49;1"
              repeatCount="indefinite"
              values="400;400;400;266.667;266.667;266.667;0"
            ></animate>
            <animate
              attributeName="r"
              dur="3.9s"
              id="r-rdr-21"
              keyTimes="0;0.098;0.196;0.294;0.392;0.49;1"
              repeatCount="indefinite"
              values="66.667;66.667;66.667;66.667;66.667;0;0"
            ></animate>
          </radialGradient>
        </defs>
      </g>
      <g id="ldl21" mask="url(#globe-gradient-mask)" opacity="1">
        <path
          d="M 700 400 L 400 400"
          fill="none"
          stroke="url(#ldl21-gradient)"
          stroke-linecap="round"
          stroke-width="2"
          vector-effect="non-scaling-stroke"
        >
          <animate
            attributeName="opacity"
            dur="4.9s"
            id="opacity-ldl21"
            keyTimes="0;0.098;0.196;0.294;0.392;0.49;1"
            repeatCount="indefinite"
            values="0;0;0;1;1;1;1"
          ></animate>
        </path>
        <defs>
          <radialGradient
            cx="200"
            cy="400"
            gradientUnits="userSpaceOnUse"
            id="ldl21-gradient"
            r="100"
            style={{ color: 'var(--green)' }}
          >
            <stop offset="0" stop-color="var(--green)"></stop>
            <stop offset="0.4" stop-color="var(--green)"></stop>
            <stop offset="1" stop-color="var(--green)" stop-opacity="0"></stop>
            <animate
              attributeName="cx"
              dur="4.9s"
              id="cx-ldl21"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
              values="200;700;700"
            ></animate>
            <animate
              attributeName="cy"
              dur="4.9s"
              id="cy-ldl21"
              keyTimes="0;1"
              repeatCount="indefinite"
              values="400;400"
            ></animate>
            <animate
              attributeName="r"
              dur="4.9s"
              id="r-ldl21"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
              values="100;0;100"
            ></animate>
          </radialGradient>
        </defs>
      </g>
      <g id="ldd12" mask="url(#globe-gradient-mask)" opacity="1">
        <path d="M499.381,133.333 h-99.381M 400 266.667 A 0 400 0 0 0 400 133.333M 400 400 A 0 400 0 0 0 400 266.667" fill="none" stroke="url(#ldd12-gradient)" stroke-linecap="round" stroke-width="2" vector-effect="non-scaling-stroke">
          <animate attributeName="opacity" dur="6.9s" id="opacity-ldd12" keyTimes="0;0.098;0.196;0.294;0.392;0.49;1" repeatCount="indefinite" values="0;0;0;1;1;1;1"></animate>
        </path>
        <defs>
          <radialGradient cx="0" cy="0" gradientUnits="userSpaceOnUse" id="ldd12-gradient" r="66.667" style={{ color: 'var(--orange)' }}>
            <stop offset="0" stop-color="var(--orange)"></stop>
            <stop offset="0.4" stop-color="var(--orange)"></stop>
            <stop offset="1" stop-color="var(--orange)" stop-opacity="0"></stop>
            <animate attributeName="cx" dur="6.9s" id="cx-ldd12" keyTimes="0;0.098;0.196;0.294;0.392;0.49;1" repeatCount="indefinite" values="0;400;400;400;400;499.381;499.381"></animate>
            <animate attributeName="cy" dur="6.9s" id="cy-ldd12" keyTimes="0;0.098;0.196;0.294;0.392;0.49;1" repeatCount="indefinite" values="0;400;400;266.667;133.333;133.333;133.333"></animate>
            <animate attributeName="r" dur="6.9s" id="r-ldd12" keyTimes="0;0.098;0.196;0.294;0.392;0.49;1" repeatCount="indefinite" values="66.667;66.667;66.667;66.667;66.667;0;0"></animate>
          </radialGradient>
        </defs>
      </g>
      <g id="ulu1-2" mask="url(#globe-gradient-mask)" opacity="1">
        <path d="M 499.381 666.667 A 133.333 400 0 0 0 525.708 533.333M525.708,533.333 h-125.708M 400 400 A 0 400 0 0 0 400 533.333" fill="none" stroke="url(#ulu1-2-gradient)" stroke-linecap="round" stroke-width="2" vector-effect="non-scaling-stroke">
          <animate attributeName="opacity" dur="8.9s" id="opacity-ulu1-2" keyTimes="0;0.098;0.196;0.294;0.392;0.49;1" repeatCount="indefinite" values="0;0;0;1;1;1;1"></animate>
        </path>
        <defs>
          <radialGradient cx="0" cy="0" gradientUnits="userSpaceOnUse" id="ulu1-2-gradient" r="66.667" style={{ color: 'var(--violet)' }}>
            <stop offset="0" stop-color="var(--violet)"></stop>
            <stop offset="0.4" stop-color="var(--violet)"></stop>
            <stop offset="1" stop-color="var(--violet)" stop-opacity="0"></stop>
            <animate attributeName="cx" dur="8.9s" id="cx-ulu1-2" keyTimes="0;0.098;0.196;0.294;0.392;0.49;1" repeatCount="indefinite" values="0;400;400;400;525.708;499.381;499.381"></animate>
            <animate attributeName="cy" dur="8.9s" id="cy-ulu1-2" keyTimes="0;0.098;0.196;0.294;0.392;0.49;1" repeatCount="indefinite" values="0;400;400;533.333;533.333;666.667;666.667"></animate>
            <animate attributeName="r" dur="8.9s" id="r-ulu1-2" keyTimes="0;0.098;0.196;0.294;0.392;0.49;1" repeatCount="indefinite" values="66.667;66.667;66.667;66.667;66.667;0;0"></animate>
          </radialGradient>
        </defs>
      </g>


      <g id="rdruu-2-1" mask="url(#globe-gradient-mask)" opacity="1">
        <path
          d="M148.584,533.333 h125.708M 274.292 533.333 A -133.333 400 0 0 0 300.619 666.667M300.619,666.667 h99.381M 400 533.333 A 0 400 0 0 0 400 666.667M 400 400 A 0 400 0 0 0 400 533.333"
          fill="none"
          stroke="url(#rdruu-2-1-gradient)"
          stroke-linecap="round"
          stroke-width="2"
          vector-effect="non-scaling-stroke"
        >
          <animate
            attributeName="opacity"
            dur="3.9s"
            id="opacity-rdruu-2-1"
            keyTimes="0;0.083;0.167;0.25;0.333;0.417;0.5;0.583;1"
            repeatCount="indefinite"
            values="0;1;1;1;1;1;1;0;0"
          />
        </path>
        <defs>
          <radialGradient
            cx="100"
            cy="100"
            gradientUnits="userSpaceOnUse"
            id="rdruu-2-1-gradient"
            r="66.667"
            style={{ color: '#ffd23f' }}
          >
            <stop offset="0" stop-color="#ffd23f" />
            <stop offset="0.4" stop-color="#ffd23f" />
            <stop offset="1" stop-color="#ffd23f" stop-opacity="0" />


            <animate
              attributeName="cx"
              dur="3.9s"
              id="cx-rdruu-2-1"
              keyTimes="0;0.083;0.167;0.25;0.333;0.417;0.5;0.583;1"
              repeatCount="indefinite"
              values="0;400;400;400;300.619;274.292;148.584;148.584;0"
            />


            <animate
              attributeName="cy"
              dur="3.9s"
              id="cy-rdruu-2-1"
              keyTimes="0;0.083;0.167;0.25;0.333;0.417;0.5;0.583;1"
              repeatCount="indefinite"
              values="533.333;533.333;533.333;666.667;666.667;533.333;400;400;0"
            />


            <animate
              attributeName="r"
              dur="3.9s"
              id="r-rdruu-2-1"
              keyTimes="0;0.083;0.167;0.25;0.333;0.417;0.5;0.583;1"
              repeatCount="indefinite"
              values="0;66.667;66.667;66.667;66.667;66.667;66.667;0;0"
            />
          </radialGradient>
        </defs>
      </g>


      <g data-testid="node">
        <circle cx="148.58425557811643" cy="266.6666666666667" fill="#deedf7" r="60" stroke-width="2" stroke="#8cb9f4" vector-effect="non-scaling-stroke"></circle>
        <image height="70" width="70" href="/img/home/rcs-icon.webp" x="113.58425557811643" y="231.6666666666667"></image>
        <circle cx="153" cy="326" fill="#1a73e9" r="7" vector-effect="non-scaling-stroke"></circle>
        <text x="118" y="371" fill="#535353" className="Bannertxt">RCS</text>
      </g>


      <g data-testid="node"><circle cx="664.415744" cy="394.666667" fill="#eefcef" r="60" stroke-width="2" stroke="#92e9b2" vector-effect="non-scaling-stroke"></circle>
        <image height="70" width="70" href="/img/home/whatsapp-icon.webp" x="630.415744" y="358.666667"></image>
        <circle cx="670" cy="455" fill="#25d366" r="7" vector-effect="non-scaling-stroke"></circle>
        <text x="580" y="500" fill="#535353" className="Bannertxt">WhatsApp</text></g>

      <g data-testid="node"><circle cx="508.380799" cy="133.33333333333334" fill="#ffebde" r="60" stroke-width="2" stroke="#ffc19a" vector-effect="non-scaling-stroke"></circle><image height="70" width="70" href="/img/home/email-icon.webp" x="472.380799" y="98.33333333333334"></image><circle cx="510" cy="193" fill="#ff6300" r="7" vector-effect="non-scaling-stroke"></circle><text x="477" y="237" fill="#535353" className="Bannertxt">Email</text></g>


      <g data-testid="node"><circle cx="499.38079899999065" cy="666.6666666666667" fill="#ebeafb" r="60" stroke-width="2" stroke="#9c99b0" vector-effect="non-scaling-stroke"></circle><image height="70" width="70" href="/img/home/voice-icon.webp" x="464.38079899999065" y="631.6666666666667"></image><circle cx="499.380799" cy="725.666667" fill="#3c3664" r="7" vector-effect="non-scaling-stroke"></circle><text x="455" y="764" fill="#535353" className="Bannertxt">Voice</text></g>

      <g data-testid="node"><circle className="node_node__2cNJA" cx="148.58425557811643" cy="533.3333333333334" fill="#fffbee" r="60" stroke-width="2" stroke="#ffe89f" vector-effect="non-scaling-stroke"></circle>
        <image height="70" width="70" href="/img/home/sms-icon.webp" x="114.584256" y="504.333333"></image><circle cx="148" cy="595" fill="#ffd23f" r="7" vector-effect="non-scaling-stroke"></circle>
        <text x="117" y="638" fill="#535353" className="Bannertxt">SMS</text></g>
      <g data-testid="node">
        <circle cx="400.5" cy="400.5" fill="#ffffff" r="65" stroke="#3c3664" stroke-width="2" vector-effect="non-scaling-stroke"></circle>
        <svg width="80pt" height="80pt" viewBox="0 0 143 107" version="1.1" xmlns="http://www.w3.org/2000/svg" x="350.5" y="350.5">
          <g id="#4d4771ff">
            <path fill="#4d4771" opacity="1.00" d=" M 81.62 12.55 C 84.35 12.06 88.07 11.48 89.81 14.26 C 91.75 16.98 90.63 20.72 89.38 23.54 C 81.38 43.57 73.55 63.66 65.60 83.71 C 64.28 86.79 63.70 90.63 60.52 92.43 C 57.91 93.18 55.10 92.73 52.89 91.16 C 52.08 89.21 50.84 87.07 51.84 84.94 C 60.60 62.39 69.61 39.95 78.39 17.41 C 79.11 15.60 79.80 13.55 81.62 12.55 Z" />
            <path fill="#4d4771" opacity="1.00" d=" M 37.19 28.40 C 40.13 26.60 44.39 28.04 45.72 31.18 C 47.46 34.13 45.89 38.30 42.78 39.59 C 35.42 43.28 27.97 46.81 20.56 50.39 C 19.34 51.15 17.45 51.39 17.11 53.05 C 25.06 56.57 32.64 60.89 40.50 64.64 C 42.72 65.74 45.57 67.19 45.70 70.01 C 46.15 72.20 45.23 74.23 44.14 76.06 C 41.94 77.22 39.28 78.31 36.91 76.89 C 28.07 72.40 19.17 67.98 10.41 63.33 C 5.10 60.34 2.85 53.43 5.06 47.80 C 6.39 44.50 9.21 41.97 12.41 40.51 C 20.69 36.53 28.92 32.42 37.19 28.40 Z" />
            <path fill="#4d4771" opacity="1.00" d=" M 93.39 29.17 C 95.11 27.67 97.71 27.08 99.77 28.24 C 108.62 32.43 117.42 36.74 126.20 41.07 C 130.36 43.03 132.96 47.46 133.57 51.91 C 133.53 56.86 130.53 61.85 125.99 63.99 C 117.36 68.34 108.75 72.76 100.08 77.04 C 95.38 79.49 89.59 73.53 91.99 68.88 C 92.78 66.44 95.36 65.55 97.39 64.41 C 105.04 60.61 112.56 56.58 120.28 52.91 C 119.37 51.24 117.39 50.79 115.85 49.93 C 108.68 46.40 101.47 42.97 94.35 39.35 C 90.53 37.54 90.01 31.64 93.39 29.17 Z" />
          </g>
        </svg>

      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="globe-gradient" x1="0" x2="0" y1="0" y2="400">
          <stop offset="0%" stop-color="#0000ff"></stop>
          <stop offset="100%" stop-color="#ff0000"></stop>
        </linearGradient>
      </defs>
    </svg>

  </div>
);

export default HomeBanner;


