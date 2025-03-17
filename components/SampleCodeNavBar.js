"use client";
import React, { useState } from "react";
import Link from 'next/link';

const SampleCodeNavBar = () => {
  const [openSections, setOpenSections] = useState({
    communication: false,
    verification: false,
    pricing: false,
    whatsappPricing: false,
    isNavCollapsed: true,
  });

  const toggleSection = (section) => {
    setOpenSections(prevOpenSections => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  const handleLinkClick = (event) => {
    // Prevent click event from bubbling up to the parent li element
    event.stopPropagation();
  };

  const sections = [
    {
      id: "PHP",
      name: "Sample Code in PHP",
      links: [
        { href: "/sample-code-for-sending-sms-in-php", text: "Code For SMS" },
        { href: "/sample-code-for-sending-email-in-php", text: "Code For Email" },
        { href: "/sample-code-for-sending-voice-in-php", text: "Code For Voice" },
      ],
    },
    {
      id: "Python",
      name: "Sample Code in Python",
      links: [
        { href: "/sample-code-for-sending-sms-in-python", text: "Code For SMS" },
        { href: "/sample-code-for-sending-email-in-python", text: "Code For Email" },
        { href: "/sample-code-for-sending-voice-in-python", text: "Code For Voice" },
      ],
    },
    {
      id: "JAVA",
      name: "Sample Code in JAVA",
      links: [
        { href: "/sample-code-for-sending-sms-in-java", text: "Code For SMS" },
        { href: "/sample-code-for-sending-email-in-java", text: "Code For Email" },
        { href: "/sample-code-for-sending-voice-in-java", text: "Code For Voice" },
      ],
    },
    {
      id: "CSharp",
      name: "Sample Code in C#",
      links: [
        { href: "/sample-code-for-sending-sms-in-c", text: "Code For SMS" },
        { href: "/sample-code-for-sending-email-in-c", text: "Code For Email" },
        { href: "/sample-code-for-sending-voice-in-c", text: "Code For Voice" },
      ],
    },
    {
      id: "cURL",
      name: "Sample Code in cURL",
      links: [
        { href: "/sample-code-for-sending-sms-in-curl", text: "Code For SMS" },
        { href: "/sample-code-for-sending-email-in-curl", text: "Code For Email" },
        { href: "/sample-code-for-sending-voice-in-curl", text: "Code For Voice" },
      ],
    },
    {
      id: "Powershell",
      name: "Sample Code in Powershell",
      links: [
        { href: "/sample-code-for-sending-sms-in-powershell", text: "Code For SMS" },
        { href: "/sample-code-for-sending-email-in-powershell", text: "Code For Email" },
        { href: "/sample-code-for-sending-voice-in-powershell", text: "Code For Voice" },
      ],
    },
    {
      id: "Node",
      name: "Sample Code in Node.js",
      links: [
        { href: "/sample-code-for-sending-sms-in-nodejs", text: "Code For SMS" },
        { href: "/sample-code-for-sending-email-in-nodejs", text: "Code For Email" },
        { href: "/sample-code-for-sending-voice-in-nodejs", text: "Code For Voice" },
      ],
    },
    {
      id: "Go",
      name: "Sample Code in Go",
      links: [
        { href: "/sample-code-for-sending-sms-in-go", text: "Code For SMS" },
        { href: "/sample-code-for-sending-email-in-go", text: "Code For Email" },
        { href: "/sample-code-for-sending-voice-in-go", text: "Code For Voice" },
      ],
    },
    {
      id: "JavaScript",
      name: "Sample Code in JavaScript",
      links: [
        { href: "/sample-code-for-sending-sms-in-javascript", text: "Code For SMS" },
        { href: "/sample-code-for-sending-email-in-javascript", text: "Code For Email" },
        { href: "/sample-code-for-sending-voice-in-javascript", text: "Code For Voice" },
      ],
    },
    {
      id: "Ruby",
      name: "Sample Code in Ruby",
      links: [
        { href: "/sample-code-for-sending-sms-in-ruby", text: "Code For SMS" },
        { href: "/sample-code-for-sending-email-in-ruby", text: "Code For Email" },
        { href: "/sample-code-for-sending-voice-in-ruby", text: "Code For Voice" },
      ],
    },
    {
      id: "Swift",
      name: "Sample Code in Swift",
      links: [
        { href: "/sample-code-for-sending-sms-in-swift", text: "Code For SMS" },
        { href: "/sample-code-for-sending-email-in-swift", text: "Code For Email" },
        { href: "/sample-code-for-sending-voice-in-swift", text: "Code For Voice" },
      ],
    },
  ];

  return (
    <ul className="sample-code-api">
      <div className="accordion" id="accordionExample">
        {sections.map((section) => (
          <div key={section.id} className="samplecode">
            <li
              className={`nav-link ${openSections[section.id] ? 'li-active' : ''}`}
              onClick={() => toggleSection(section.id)}
            >
              {section.name}
            </li>
            <div
              className={`collapse ${openSections[section.id] ? 'show' : ''}`}
            >
              <div className="subNavLink">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={handleLinkClick}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ul>
  );
};

export default SampleCodeNavBar;